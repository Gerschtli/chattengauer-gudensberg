import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_SECURE, SMTP_USERNAME, SMTP_USE_TEST } from '$env/static/private';

async function buildTransportOptions(): Promise<SMTPTransport.Options> {
	if (!SMTP_USE_TEST) {
		return {
			host: SMTP_HOST,
			port: parseInt(SMTP_PORT),
			secure: !!SMTP_SECURE,
			auth: {
				user: SMTP_USERNAME,
				pass: SMTP_PASSWORD,
			},
		};
	}

	const testAccount = await nodemailer.createTestAccount();

	return {
		host: testAccount.smtp.host,
		port: testAccount.smtp.port,
		secure: testAccount.smtp.secure,
		auth: {
			user: testAccount.user,
			pass: testAccount.pass,
		},
	};
}

const transporter = nodemailer.createTransport(await buildTransportOptions());

type MailAddress = {
	name: string;
	address: string;
};

type SendMailRequest = {
	from: MailAddress;
	to: MailAddress;
	replyTo: MailAddress;
	subject: string;
	text: string;
};

export async function sendMail({ from, to, replyTo, subject, text }: SendMailRequest) {
	try {
		const info = await transporter.sendMail({
			from,
			to,
			replyTo,
			subject,
			text,
		});

		console.info('mail sent successfully.');

		if (SMTP_USE_TEST) {
			console.info('mail preview url: %s', nodemailer.getTestMessageUrl(info));
		}

		return true;
	} catch (e) {
		console.error('send mail failed.', e);

		return false;
	}
}
