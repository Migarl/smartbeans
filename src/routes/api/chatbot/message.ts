import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async () => {
    return { body: JSON.stringify({ text: "Hello my friend!\nHow can I help you? :)", timestamp: new Date().getTime() }) };
};