import { z } from 'zod';

export const IntentionEnum = z.enum(['none', 'join', 'apply', 'support'] as const);

export const schema = z.object({
	intention: IntentionEnum.default(IntentionEnum.enum.none).refine((value) => value !== IntentionEnum.enum.none, {
		message: 'Bitte Option wählen',
	}),
	name: z.string().trim().min(1, 'Bitte Namen angeben'),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});
