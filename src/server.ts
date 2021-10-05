import "./setup";
import "./events";
import { Client } from "@typeit/discord";
import { Intents } from "discord.js";

async function start() {
    const token = process.env.DISCORD_TOKEN;
    const client = new Client({
        ws: { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]},
        classes: [
            `${__dirname}/*Discord.ts`,
            `${__dirname}/*Discord.js`
        ],
            silent: false,
            variablesChar: ":"
    });

    await client.login(`${token}`);
}

start();