import type { SuperValidated } from 'sveltekit-superforms';
import { z } from 'zod';

export const IntentionEnum = z.enum(['join', 'apply', 'support'], {
	error: 'Bitte wähle eine Option',
});

export const schemaBooking = z.object({
	name: z.string().trim().optional(),
	email: z.email('Bitte E-Mail Adresse angeben').trim(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export const schemaEngageHome = z.object({
	intention: IntentionEnum.default(null as unknown as z.infer<typeof IntentionEnum>),
	name: z.string().trim().optional(),
	email: z.email('Bitte E-Mail Adresse angeben').trim(),
	instrument: z.string().trim().optional(),
	experience: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export const schemaEngageEnsemble = z.object({
	name: z.string().trim().optional(),
	email: z.email('Bitte E-Mail Adresse angeben').trim(),
	instrument: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export type SuperValidatedEngageHome = SuperValidated<z.infer<typeof schemaEngageHome>>;
export type SuperValidatedEngageEnsemble = SuperValidated<z.infer<typeof schemaEngageEnsemble>>;
export type SuperValidatedBooking = SuperValidated<z.infer<typeof schemaBooking>>;
