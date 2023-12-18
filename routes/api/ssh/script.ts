import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
    const responseBody = '';
    return new Response(responseBody);
}