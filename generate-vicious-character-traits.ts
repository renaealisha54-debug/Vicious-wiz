'use server';
/**
 * @fileOverview A Genkit flow to generate aggressive traits and dark backstories for characters.
 *
 * - generateViciousCharacterTraits - A function that handles the generation of vicious character traits and backstories.
 * - GenerateViciousCharacterTraitsInput - The input type for the generateViciousCharacterTraits function.
 * - GenerateViciousCharacterTraitsOutput - The return type for the generateViciousCharacterTraits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateViciousCharacterTraitsInputSchema = z.object({
  characterName: z.string().describe('The name of the character.'),
  characterType: z.string().describe('The type of the character (e.g., "vicious wizard", "dark fairy").'),
});
export type GenerateViciousCharacterTraitsInput = z.infer<typeof GenerateViciousCharacterTraitsInputSchema>;

const GenerateViciousCharacterTraitsOutputSchema = z.object({
  traits: z.array(z.string()).describe('An array of aggressive traits for the character.'),
  backstory: z.string().describe('A dark and menacing backstory for the character.'),
});
export type GenerateViciousCharacterTraitsOutput = z.infer<typeof GenerateViciousCharacterTraitsOutputSchema>;

export async function generateViciousCharacterTraits(
  input: GenerateViciousCharacterTraitsInput
): Promise<GenerateViciousCharacterTraitsOutput> {
  return generateViciousCharacterTraitsFlow(input);
}

const generateViciousCharacterTraitsPrompt = ai.definePrompt({
  name: 'generateViciousCharacterTraitsPrompt',
  input: {schema: GenerateViciousCharacterTraitsInputSchema},
  output: {schema: GenerateViciousCharacterTraitsOutputSchema},
  prompt: `You are an ancient, malevolent entity tasked with imbuing characters with darkness and aggression.

Generate a list of 3-5 aggressive traits and a dark, menacing backstory for the character.

Character Name: {{{characterName}}}
Character Type: {{{characterType}}}

Ensure the generated content aligns with the character type and emphasizes viciousness and dark origins.`,
});

const generateViciousCharacterTraitsFlow = ai.defineFlow(
  {
    name: 'generateViciousCharacterTraitsFlow',
    inputSchema: GenerateViciousCharacterTraitsInputSchema,
    outputSchema: GenerateViciousCharacterTraitsOutputSchema,
  },
  async input => {
    const {output} = await generateViciousCharacterTraitsPrompt(input);
    return output!;
  }
);
