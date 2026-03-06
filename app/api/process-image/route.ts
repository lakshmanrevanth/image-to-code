import { generateText, Output } from 'ai';
import { z } from 'zod';

const codeSchema = z.object({
  code: z.string().describe('The generated HTML/CSS code'),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return Response.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = await file.arrayBuffer();
    const mimeType = file.type;

    console.log('[v0] Processing image:', file.name, 'Type:', mimeType);

    const { output } = await generateText({
      model: 'openai/gpt-4o',
      output: Output.object({
        schema: codeSchema,
      }),
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analyze this UI/design screenshot and generate clean, semantic HTML code that recreates the design using HTML and CSS.

Requirements:
- Generate ONLY the HTML code wrapped in a complete HTML document with <html>, <head>, and <body> tags
- Use semantic HTML5 elements
- Include inline CSS in a <style> tag with proper styling
- Make it responsive and mobile-friendly
- Include proper color values extracted from the design
- Do not add any explanations or comments
- Ensure the code is production-ready and can be directly used

Return ONLY the complete HTML code in the code field.`,
            },
            {
              type: 'image',
              image: Buffer.from(buffer),
            },
          ],
        },
      ],
    });

    console.log('[v0] Code generation successful');

    return Response.json({
      code: output.code,
      success: true,
    });
  } catch (error) {
    console.error('[v0] Error processing image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: 'Failed to process image', details: errorMessage },
      { status: 500 }
    );
  }
}
