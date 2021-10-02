import ytdl from "ytdl-core";
import { VoiceConnection } from "discord.js";
import { CommandMessage } from "@typeit/discord";

export default class Voice {
    private player: VoiceConnection | undefined;
    private queue: string[];

    constructor(){
        this.queue = [];
    }

    public async joinChannel(message: CommandMessage) {
        this.player = await message.member?.voice.channel?.join();
    }

    public async leaveChannel() {
        this.player?.disconnect();
    }

    public async playSongCommand(message: CommandMessage) {
        const url = message.args.url;
        if(!url) return message.reply("you need to submit a link to continue");
        this.player = await message.member?.voice.channel?.join();
        this.queue.push(url);
        if(this.queue.length > 1) return;
        this.playMusic(message);
    }

    private async playMusic(message: CommandMessage) {
        if(this.queue.length === 0) return message.reply("")
        message.reply(`now playing ${this.queue[0]}`);
        this.player?.play(ytdl(this.queue[0])).on('finish', () => {
            this.queue = this.queue.slice(1);
            if(this.queue.length === 0) return this.leaveChannel();
            this.playMusic(message);
        });
    }

}