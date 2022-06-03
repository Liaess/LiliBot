import "reflect-metadata";
import "./setup";
import "./events";
import { Intents } from "discord.js";
import { Client } from "discordx";
import { dirname, importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";

const client = new Client({
  botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
  //@ts-ignore
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],

  silent: false,

  simpleCommand: {
    prefix: process.env.BOT_PREFIX,
  },
});

client.once("ready", async () => {
  await client.guilds.fetch();

  await client.initApplicationCommands();

  await client.initApplicationPermissions();

  console.log("Bot started");
});

client.on("interactionCreate", (interaction: Interaction) => {
  client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
  client.executeCommand(message);
});

async function start() {
  // await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{ts,js}");

  if (!process.env.DISCORD_TOKEN) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }

  await client.login(process.env.DISCORD_TOKEN);
}

start();
