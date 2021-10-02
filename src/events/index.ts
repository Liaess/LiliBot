import "../setup";
import Message from "./message";
import Voice from "./voice";
import { Discord, Command, CommandMessage, CommandNotFound } from "@typeit/discord";

@Discord(`${process.env.BOT_PREFIX}`)
export class App {
    private message: Message;
    private voice: Voice;
    private commands: any;
    constructor() {
        this.commands = CommandMessage;
        this.message = new Message(this.commands);
        this.voice = new Voice();
    }
    // -------------------- Message --------------------

    @Command("hello")
    private helloCommand(message: CommandMessage){
        this.message.helloCommand(message);
    }

    @Command("delete :number")
    private deleteMessageCommand(message: CommandMessage) {
        this.message.deleteMessageCommand(message);
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {
        this.message.notFound(message)
    }

    // -------------------- Voice --------------------

    @Command("join")
    private async joinChannel(message: CommandMessage) {
        this.voice.joinChannel(message);
    }
    
    @Command("leave")
    private async leaveChannel(message: CommandMessage) {
        this.voice.leaveChannel();
    }

    @Command("play :url")
    private async playSongCommand(message: CommandMessage) {
        this.voice.playSongCommand(message);
    }

    @Command("skip")
    private async skipCommand(message: CommandMessage) {
        this.voice.skipCommand(message);
    }

    @Command("resume")
    private async resumeCommand(message: CommandMessage) {
        this.voice.resumeCommand(message);
    }

    @Command("pause")
    private async pauseCommand(message: CommandMessage) {
        this.voice.pauseCommand(message);
    }

}