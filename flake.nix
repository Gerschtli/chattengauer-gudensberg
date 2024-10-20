{
  description = "chattengauer-gudensberg";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    playwright.url = "github:pietdevries94/playwright-web-flake/1.48.1";
  };

  outputs = { self, nixpkgs, playwright }:
    let
      forEachSystem = nixpkgs.lib.genAttrs [ "aarch64-darwin" "x86_64-linux" ];

      pkgsFor = forEachSystem (system: import nixpkgs {
        inherit system;
        overlays = [
          (final: prev: {
            inherit (playwright.packages.${system})
              playwright-driver
              playwright-test;
          })
        ];
      });

      nodejsFor = forEachSystem (system: pkgsFor.${system}.nodejs_20);
    in
    {
      devShells = forEachSystem
        (system:
          let
            pkgs = pkgsFor.${system};
            nodejs = nodejsFor.${system};
          in
          {
            default = pkgs.mkShell {
              packages = [
                nodejs
                nodejs.pkgs.pnpm
              ];

              PLAYWRIGHT_BROWSERS_PATH = pkgs.playwright-driver.browsers;
              PLAYWRIGHT_BROWSERS_VERSION = pkgs.playwright-driver.version;
              PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "true";
            };
          });

      checks = forEachSystem
        (system:
          let
            pkgs = pkgsFor.${system};
            nodejs = nodejsFor.${system};

            inherit (pkgs.lib) getExe versions;

            checker = name: description: package: versionCommand: pkgs.runCommand "check-${name}-version" { } ''
              version_nix="${package.version}"
              version_non_nix="$(${versionCommand})"

              echo "compare versions for ${description}"
              echo "version_nix:     $version_nix"
              echo "version_non_nix: $version_non_nix"

              [[ "$version_nix" == "$version_non_nix" ]]
              touch $out
            '';
          in
          {
            node = checker
              "node"
              "node major version in package.json"
              { version = versions.major nodejs.version; }
              ''
                ${getExe pkgs.jq} --raw-output '.engines.node' ${./package.json} \
                  | ${getExe pkgs.gnused} -e 's,\.x$,,'
              '';

            playwright = checker "playwright" "npm package @playwright/test" pkgs.playwright-driver ''
              ${getExe pkgs.jq} --raw-output '.devDependencies."@playwright/test"' ${./package.json}
            '';

            pnpm = checker "pnpm" "pnpm version in package.json" nodejs.pkgs.pnpm ''
              ${getExe pkgs.jq} --raw-output '.packageManager' ${./package.json} \
                | ${getExe pkgs.gnused} -e 's,^pnpm@,,'
            '';
          });
    };
}
