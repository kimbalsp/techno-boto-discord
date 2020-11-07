const Discord = require('discord.js');
const client = new Discord.Client();
import { DISCORD_TOKEN, TWITCH_CHANNEL_ID } from './constants'
import { containsBotCommand } from './helpers'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
    if (msg.channel.id === TWITCH_CHANNEL_ID) {
      console.log('is general channel')
      // is in general channel
      if (containsBotCommand(msg.content)) {
        console.log('contains bot command')
          // is bot command
          msg.channel.send(`<@${msg.author.id}>
          Sorry, this channel is not for bot commands`)
          // then delete it
          msg.delete()
          console.log('is a bot command')
        } else {
        // it's not a bot command
        // do nothing
        console.log('not a bot command')
      }
    } else {
      console.log('not the general channel')
    }
});






client.login(DISCORD_TOKEN);
