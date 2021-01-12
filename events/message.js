
const emotes = ["🤩", "😃", "😆", "😂", "🤣", "😄", "😃", "😀"];

module.exports = async (bot, message) => {

    if (message.author.bot) return;
    if (!message.guild.available) return;

    if (message.author.id === "300842468482613259" && (/meme/gi.test(message.channel.name) || message.channel.id === "409464383358631944")) {
        message.react(emotes[Math.floor(Math.random() * emotes.length)])
    }


}