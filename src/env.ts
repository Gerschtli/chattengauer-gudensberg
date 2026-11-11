import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	CONTACT_EMAIL: { static: true },
	CONTACT_NAME: { static: true },
	SENDER_EMAIL: { static: true },
	SENDER_NAME: { static: true },
	PUBLIC_STORYBLOK_ACCESS_TOKEN: { public: true, static: true },
	SMTP_HOST: { static: true },
	SMTP_PASSWORD: { static: true },
	SMTP_PORT: { static: true },
	SMTP_USERNAME: { static: true },
	SMTP_USE_TEST: { static: true },
});
