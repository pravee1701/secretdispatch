import { GoogleGenerativeAI, GoogleGenerativeAIError } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');


const buildGoogleGenAIPrompt = (messages: Message[]) => ({
    contents: messages
        .filter(message => message.role === 'user' || message.role === 'assistant')
        .map(message => ({
            role: message.role === 'user' ? 'user' : 'model',
            parts: [{ text: message.content }],
        })),
});

export async function POST(req: Request) {
    try {
        interface Message {
            id: string;
            role: 'user' | 'assistant';
            content: string;
        }

        const messages: Message[] = [
            {
                id: 'user-1',
                role: 'user',
                content:
                    "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qoo.me, and should be suitable for a diverse audience. Avoid personal and sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you've started? || If you could have dinner with any historical figure, who would it be? || What's a single thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.",
            },
        ];

        const geminiStream = await genAI
            .getGenerativeModel({ model: 'gemini-pro' })
            .generateContentStream(buildGoogleGenAIPrompt(messages));

        const stream = GoogleGenerativeAIStream(geminiStream);

        return new StreamingTextResponse(stream);
    } catch (error) {
        if (error instanceof GoogleGenerativeAIError) {
            const { name, message } = error;
            return Response.json({
                name,
                message
            }, { status:500 });
        } else {
            console.error("An unexpected error has occurred:", error);
            throw error;
        }
    }
}