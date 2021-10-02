import { CommandMessage, } from "@typeit/discord";

export default class Message {
    private commands: any;

    constructor(commands: CommandMessage) {
        this.commands = commands;
    }

    public helloCommand(message: CommandMessage) {
        message.reply(`hello.`);
    }

    public deleteMessageCommand(message: CommandMessage) {
        const number = message.args.number;
        if(number > 100) return message.reply("limited to only delete 100 messages at a time!");
        message.channel.messages.channel.bulkDelete(number);
    }

    public notFound(message: CommandMessage) {
        message.reply(`this command does not exist!`);
    }
}