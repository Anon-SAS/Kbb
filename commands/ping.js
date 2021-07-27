module.exports.run = async (bot, message, args) => {
message.channel.send('Ping! `' + Math.floor(Math.round(1)) + '`ms')

message.delete();

}
  module.exports.help = {
    name: "ping"
  }
