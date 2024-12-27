import { z } from 'zod';

export const IntentionEnum = z.enum(['join', 'apply', 'support'] as const, {
	required_error: 'Bitte wähle eine Option',
});

export const schema = z.object({
	intention: IntentionEnum.default(undefined as unknown as z.infer<typeof IntentionEnum>),
	name: z.string().trim().min(1, 'Bitte Namen angeben'),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	instrument: z.string().trim().optional(),
	experience: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});
