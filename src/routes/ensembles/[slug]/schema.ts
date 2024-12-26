import { z } from 'zod';

export const schema = z.object({
	name: z.string().trim().min(1, 'Bitte Namen angeben'),
	email: z.string().trim().email('Bitte E-Mail Adresse angeben'),
	instrument: z.string().trim().optional(),
	message: z.string().trim().min(1, 'Bitte Nachricht angeben'),
});
