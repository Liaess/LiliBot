import "./setup";
import "./events";
import { Client } from "@typeit/discord";

async function start() {
    const token = process.env.DISCORD_TOKEN;
    const client = new Client({
    classes: [
        `${__dirname}/*Discord.ts`,
        `${__dirname}/*Discord.js`
    ],
        silent: false,
        variablesChar: ":"
    });
    console.log("Bot running!")
    await client.login(`${token}`);
}

start();