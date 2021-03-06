const commands = require('./commands');
const Discord = require('discord.js');
const client = new Discord.Client();


const prefix = process.env.PREFIX;


client.on('ready', () => {
    console.log('I am the testbot!');
});

client.on('message', message => {

    // Check for prefix and not-botness
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let runnable = commands.list.filter( obj => {return obj.command === command})[0];
    runnable.run(client, message, args);

});

client.login(process.env.BOT_TOKEN);