import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    let request = await fetch("https://api.adviceslip.com/advice");
    request = await request.json();
    return new Response(JSON.stringify(request));
};