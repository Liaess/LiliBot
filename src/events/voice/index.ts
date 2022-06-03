import { Player, Queue } from "@discordx/music";
import { Message } from "discord.js";

export class MyQueue extends Queue {

}

export default class Voice {
  // private player: VoiceConnection | undefined;
  private queue: { url: string; name: string }[];

  constructor() {
    this.queue = [];
  }
}

// private clearQueue() {
//   this.queue = [];
// }

// public async joinChannel(message: CommandMessage) {
//   this.player = await message.member?.voice.channel?.join();
// }

// public async leaveChannel() {
//   this.player?.disconnect();
//   this.clearQueue();
// }

// public async playSongCommand(message: CommandMessage) {
//   const url = message.args.url;
//   if (!url)
//     return message.reply("you need to submit a link or a text to continue");
//   if (this.validateYoutubeUrl(url)) {
//     this.addQueue(message, url);
//   } else {
//     this.awaitUserDecision(message, url);
//   }
// }

// private async addQueue(message: CommandMessage, url: string) {
//   const videos = await yt.search(url);
//   this.player = await message.member?.voice.channel?.join();
//   this.queue.push({ url, name: videos[0].title });
//   if (this.queue.length > 1) {
//     message.reply("A new song was added.");
//     return;
//   }
//   this.playMusic(message);
// }

// private async awaitUserDecision(message: CommandMessage, url: string) {
//   const videos = await yt.search(url);
//   message.channel
//     .send(
//       `
//       \`\`\`
// First option: ${videos[0].title}:
// ${videos[0].url}\n
// Second option: ${videos[1].title}:
// ${videos[1].url}\n
// Third option: ${videos[2].title}:
// ${videos[2].url}
//       \`\`\``
//     )
//     .then(async (sendedMessage) => {
//       await Promise.all([
//         sendedMessage.react("1⃣"),
//         sendedMessage.react("2⃣"),
//         sendedMessage.react("3⃣"),
//       ]);
//       sendedMessage
//         .awaitReactions(
//           () => {
//             return true;
//           },
//           {
//             max: 1,
//             time: 30000,
//           }
//         )
//         .then(async (option) => {
//           const firstReply = option.first();
//           switch (firstReply?.emoji.name) {
//             case "1⃣":
//               this.addQueue(message, videos[0].url);
//               break;
//             case "2⃣":
//               this.addQueue(message, videos[1].url);
//               break;
//             case "3⃣":
//               this.addQueue(message, videos[2].url);
//               break;
//             default:
//               message.reply(
//                 "time expired, call me if you want another song =)"
//               );
//               break;
//           }
//         });
//     });
// }

// private playMusic(message?: CommandMessage) {
//   message?.reply(`now playing ${this.queue[0].url}`);
//   this.player?.play(ytdl(this.queue[0].url)).on("finish", () => {
//     this.queue = this.queue.slice(1);
//     if (this.queue.length === 0) {
//       message?.reply("I ended my playlist, bye! =)");
//       this.leaveChannel();
//       return;
//     }
//     this.playMusic();
//   });
// }

// private validateYoutubeUrl(url: string) {
//   const pattern = new RegExp(
//     "^(https?://)?((www.)?youtube.com|youtu.be)/.+$"
//   );
//   return !!pattern.test(url);
// }

// public async skipCommand(message: CommandMessage) {
//   if (!this.player?.dispatcher) return;
//   if (this.queue.length > 1) {
//     this.queue = this.queue.splice(1);
//     this.playMusic(message);
//     return;
//   }
//   this.player?.dispatcher.end();
//   this.clearQueue();
// }

// public async resumeCommand(message: CommandMessage) {
//   if (!this.player?.dispatcher) return;
//   this.player?.dispatcher.resume();
//   message.reply("resumming song.");
// }

// public async pauseCommand(message: CommandMessage) {
//   if (!this.player?.dispatcher) return;
//   this.player?.dispatcher.pause();
//   message.reply("pausing song.");
// }

// public async queueCommand(message: CommandMessage) {
//   if (!this.player?.dispatcher) return;
//   console.log(this.queue);
// }
