'use server';
/**
 * @fileOverview An AI tool that generates creative, evocative, and professional descriptions for dishes.
 *
 * - generateDishDescription - A function that handles the dish description generation process.
 * - GenerateDishDescriptionInput - The input type for the generateDishDescription function.
 * - GenerateDishDescriptionOutput - The return type for the generateDishDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDishDescriptionInputSchema = z.object({
  dishName: z.string().optional().describe('The name of the dish.'),
  keyIngredients: z
    .string()
    .optional()
    .describe('Key ingredients of the dish, e.g., "saffron, lamb, basmati rice".'),
  cookingMethod: z
    .string()
    .optional()
    .describe('The primary cooking method, e.g., "slow-braised, pan-seared, roasted".'),
  culinaryStyle: z
    .string()
    .optional()
    .describe('The culinary style or cuisine, e.g., "Indian Tandoor, French bistro, modern American".'),
  additionalNotes: z
    .string()
    .optional()
    .describe('Any additional notes or specific details to include in the description.'),
});
export type GenerateDishDescriptionInput = z.infer<
  typeof GenerateDishDescriptionInputSchema
>;

const GenerateDishDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated evocative dish description.'),
});
export type GenerateDishDescriptionOutput = z.infer<
  typeof GenerateDishDescriptionOutputSchema
>;

export async function generateDishDescription(
  input: GenerateDishDescriptionInput
): Promise<GenerateDishDescriptionOutput> {
  return dishDescriptionAssistantFlow(input);
}

const dishDescriptionPrompt = ai.definePrompt({
  name: 'dishDescriptionPrompt',
  input: {schema: GenerateDishDescriptionInputSchema},
  output: {schema: GenerateDishDescriptionOutputSchema},
  prompt: `You are a world-renowned culinary writer, tasked with creating a creative, evocative, and professional description for a chef's signature dish.

Craft a compelling description (3-5 sentences) that highlights the unique qualities and appeal of the dish, suitable for a high-end culinary portfolio. Focus on sensory details and the chef's expertise.

Dish Details:
{{#if dishName}}Dish Name: {{{dishName}}}{{/if}}
{{#if keyIngredients}}Key Ingredients: {{{keyIngredients}}}{{/if}}
{{#if cookingMethod}}Cooking Method: {{{cookingMethod}}}{{/if}}
{{#if culinaryStyle}}Culinary Style: {{{culinaryStyle}}}{{/if}}
{{#if additionalNotes}}Additional Notes: {{{additionalNotes}}}{{/if}}

Generate the description now.`,
});

const dishDescriptionAssistantFlow = ai.defineFlow(
  {
    name: 'dishDescriptionAssistantFlow',
    inputSchema: GenerateDishDescriptionInputSchema,
    outputSchema: GenerateDishDescriptionOutputSchema,
  },
  async input => {
    const {output} = await dishDescriptionPrompt(input);
    return output!;
  }
);
