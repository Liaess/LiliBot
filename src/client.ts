import "./setup";
import { Discord, On, Command, CommandMessage, CommandNotFound } from "@typeit/discord";

@Discord(`${process.env.BOT_PREFIX}`)
export class App {
    @Command("hello")
    private helloCommand(message: CommandMessage){
        message.reply(`Hello.`);
    }

    @Command("delete :number")
    private deleteMessageCommand(message: CommandMessage){
        const number = message.args.number;
        if(number > 100) message.reply("Funcionalidade limitada para deletar somente 100 mensagens por vez!");
        else message.channel.messages.channel.bulkDelete(number);
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {
        message.reply(`Comando não existente!`);
    }

}