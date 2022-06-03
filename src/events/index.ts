import "../setup";
import Message from "./message";
import Voice from "./voice";
import {
  Discord,
  DApplicationCommand,
  SimpleCommand,
  SimpleCommandMessage,
} from "discordx";

@Discord()
export class App {
  private message: Message;
  private commands: any;
  constructor() {
    this.commands = DApplicationCommand;
    this.message = new Message(this.commands);
  }

  // -------------------- Message --------------------

  @SimpleCommand("hello")
  private helloCommand(message: SimpleCommandMessage) {
    this.message.helloCommand(message);
  }

  @SimpleCommand("delete")
  private deleteMessageCommand(message: any) {
    this.message.deleteMessageCommand(message);
  }
}

// private deleteMessageCommand(message: SimpleCommandMessage) {
//     this.message.deleteMessageCommand(message);
// }
// @Command("delete :number")
// private deleteMessageCommand(message: CommandMessage) {
//     this.message.deleteMessageCommand(message);
// }

// @Command("help")
// private helpCommand(message: CommandMessage) {
//     this.message.helpCommand(message);
// }

// @CommandNotFound()
// private notFound(message: CommandMessage) {
//     this.message.notFound(message)
// }

// // -------------------- Voice --------------------

// @Command("join")
// private async joinChannel(message: CommandMessage) {
//     this.voice.joinChannel(message);
// }

// @Command("leave")
// private async leaveChannel(message: CommandMessage) {
//     this.voice.leaveChannel();
// }

// @Command("play :url")
// private async playSongCommand(message: CommandMessage) {
//     this.voice.playSongCommand(message);
// }

// @Command("skip")
// private async skipCommand(message: CommandMessage) {
//     this.voice.skipCommand(message);
// }

// @Command("resume")
// private async resumeCommand(message: CommandMessage) {
//     this.voice.resumeCommand(message);
// }

// @Command("pause")
// private async pauseCommand(message: CommandMessage) {
//     this.voice.pauseCommand(message);
// }

// @Command("queue")
// private async queueCommand(message: CommandMessage) {
//     this.voice.queueCommand(message);
// }
