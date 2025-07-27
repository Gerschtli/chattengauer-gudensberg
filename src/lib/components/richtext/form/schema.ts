import type { SuperValidated } from 'sveltekit-superforms';
import { z } from 'zod';

export const IntentionEnum = z.enum(['join', 'apply', 'support'] as const, {
	required_error: 'Bitte wähle eine Option',
});

export const schemaBooking = z.object({
	name: z.string().trim().optional(),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export const schemaEngageHome = z.object({
	intention: IntentionEnum.default(undefined as unknown as z.infer<typeof IntentionEnum>),
	name: z.string().trim().optional(),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	instrument: z.string().trim().optional(),
	experience: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export const schemaEngageEnsemble = z.object({
	name: z.string().trim().optional(),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	instrument: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});

export type SuperValidatedEngageHome = SuperValidated<z.infer<typeof schemaEngageHome>>;
export type SuperValidatedEngageEnsemble = SuperValidated<z.infer<typeof schemaEngageEnsemble>>;
export type SuperValidatedBooking = SuperValidated<z.infer<typeof schemaBooking>>;
