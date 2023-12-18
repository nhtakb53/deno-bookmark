import { FreshContext } from "$fresh/server.ts";
import { exec, execSequence, OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";

export const handler = async (_req: Request, _ctx: FreshContext): Promise<Response> => {
    try {
        await exec("ssh nhtakb53@125.131.88.25");
        await exec("ssh nhtakb53@125.131.88.25 nginx -v");
        const serverResponse = await execSequence([
            "ssh nhtakb53@125.131.88.25 pwd",
            "ssh nhtakb53@125.131.88.25 ls -al",
            "ssh nhtakb53@125.131.88.25 nginx -v"
        ], { output: OutputMode.Capture, continueOnError: true });
        const responseBody = `${serverResponse.map(res => res.output).join('\n')}`;
        return new Response(responseBody, { status: 200 });
    } catch (error) {
        return new Response(`Error executing command: ${error.message}`, { status: 500 });
    }
}