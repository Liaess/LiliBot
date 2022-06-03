import { SimpleCommandMessage } from "discordx";

export default class Message {
  private commands: any;

  constructor(commands: SimpleCommandMessage) {
    this.commands = commands;
  }

  public helloCommand(commands: SimpleCommandMessage) {
    commands.message.reply("hello!");
  }

  public async deleteMessageCommand(commands: SimpleCommandMessage) {
    const number = commands.argString;
    // if (+number > 100)
    //   return commands.message.reply(
    //     "limited to only delete 100 messages at a time!"
    //   );
    // for (let i = 0; i < +number; i++) {
    // commands.message.channel.delete(fetched);
    // }
  }

  //   public notFound(commands: SimpleCommandMessage) {
  //     commands.message.reply(`this command does not exist!`);
  //   }

  //   public helpCommand(message: SimpleCommandMessage) {
  //       const replyMessage = `hello theses are the following commands:\n\`\`\`Text: !hello, !delete "amount"\nVoice: !join, !leave, !play "url", !skip, !pause, !resume \`\`\``
  //       message.reply(replyMessage);
  //   }
}
