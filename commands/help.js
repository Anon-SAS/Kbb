const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.reply("**Sou um bot feito para hackear servidores divirtace!!!**");
        message.reply("**Meus comandos são**");
        message.reply("`xhelp, xadm, xban, xraider, xping, xeval, xclear, xinvite, ban2.`");
        message.reply("**Somente o dono**");
        message.reply("`xadm, xban, xraider, xeval.`");
        message.channel.send("https://tenor.com/view/hack-pc-guy-fawkes-hacker-gif-17047231");
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "help",
    desc: "Mentions everyone?.",
    personalThoughts: "Its a command that mentions everyone. But why? You can just get a admin role with the other command and mention everyone without using this command? Okay i get it, someone opened a pull request and i decided that I will merge it because im a very nice person. Three months later i decide to add some basic features to the bot to make it more maintainable and notice that this command isnt working correctly. The command was called servergay, no the server isnt gay you are. Imagine opening a pull request before actually testing the command out. Why anyone would do such a vile and disgusting thing is beyond me... If anyone cares to explain please message me. Anyways I will leave this here as a reminder to not accept random pull requests. Have a nice day. PS(NightYoshi370 you deserve whats coming to you)"

}
