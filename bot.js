const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content.substring(0,1) === '!') {
        message.reply('ping');
    }
    if (message.content.substring(0,1) === '!') {
        var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
        message.reply(args '+' cmd);
		switch(cmd) {
			// !ping
			case 'ping':
				message.reply('Pong!');
		    break;
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
