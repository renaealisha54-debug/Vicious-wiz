'use server';
/**
 * @fileOverview A Genkit flow to generate dark spells and arcane incantations.
 *
 * - generateVoidSpell - A function that handles the generation of dark spells.
 * - GenerateVoidSpellInput - The input type for the generateVoidSpell function.
 * - GenerateVoidSpellOutput - The return type for the generateVoidSpell function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateVoidSpellInputSchema = z.object({
  category: z.string().describe('The school of magic (e.g., Necromancy, Void, Chaos).'),
  intensity: z.number().min(1).max(10).describe('The power level of the spell from 1 to 10.'),
});
export type GenerateVoidSpellInput = z.infer<typeof GenerateVoidSpellInputSchema>;

const GenerateVoidSpellOutputSchema = z.object({
  spellName: z.string().describe('A menacing name for the spell.'),
  incantation: z.string().describe('A dark, pseudo-Latin incantation.'),
  effect: z.string().describe('A description of the destructive arcane effect.'),
  sacrifice: z.string().describe('The price the caster must pay (e.g., "a pint of shadow").'),
});
export type GenerateVoidSpellOutput = z.infer<typeof GenerateVoidSpellOutputSchema>;

export async function generateVoidSpell(
  input: GenerateVoidSpellInput
): Promise<GenerateVoidSpellOutput> {
  return generateVoidSpellFlow(input);
}

const generateVoidSpellPrompt = ai.definePrompt({
  name: 'generateVoidSpellPrompt',
  input: {schema: GenerateVoidSpellInputSchema},
  output: {schema: GenerateVoidSpellOutputSchema},
  prompt: `You are a weaver of forbidden arcana from the deepest reaches of the void.

Generate a dark and powerful spell based on the following:
Category: {{{category}}}
Intensity: {{{intensity}}}/10

The spell name should sound ancient and terrifying. The incantation should be rhythmic and menacing. The effect should describe total devastation proportional to the intensity. The sacrifice should be something esoteric and costly.`,
});

const generateVoidSpellFlow = ai.defineFlow(
  {
    name: 'generateVoidSpellFlow',
    inputSchema: GenerateVoidSpellInputSchema,
    outputSchema: GenerateVoidSpellOutputSchema,
  },
  async input => {
    const {output} = await generateVoidSpellPrompt(input);
    return output!;
  }
);
