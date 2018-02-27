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
        var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		switch(cmd) {
			// !ping
			case 'ping':
				message.reply('Pong!');
			break;
			case 'drops':
				var command = message.content.substring(7)
				switch(command){
					//![enemy] [#killed]
					case 'imp': case 'ogre': case 'basilisk': case 'lich': case 'giclops': case 'lich': case 'giclops': case 'titachnid': case 'archeron': case 'rook':
						message.reply('**```Use this command to get drops from any number of a single type of enemy. Automatically divides grist ' +
							'and applies multipliers.```**\n\n**Format:** `![enemy name] [# killed]`\n\n**examples:**\n`!ogre 45` gets drops from 45 ' +
							'ogres\n`!rook 22` gets drops from 22 rooks.')
					break;
					//!multi t[#] [#killed] t[#] [# killed](Repeat as necessary)
					case 'multi':
						message.reply('**```Use this command to get drops from any number of any amount of enemy types. Automatically divides ' +
							'grist and applies multipliers.```**\n```Tier #s\nt1 = imp\nt2 = ogre\nt3 = basilisk\nt4 = lich\nt5 = giclops\nt6 ' +
							'= titachnid\nt7 = archeron\ntx = rook/D.A.```\n\n**Format:** `!multi t[tier #] [#killed] t[tier #] [# killed](Repeat as ' +
							'necessary)`\n\n**examples:**\n`!multi t3 54 tx 3` gets drops from 54 basilisks and 3 rooks\n`!multi t6 20 t2 8` gets drops ' +
							'from 20 titachnids and 8 ogres.')
					break;
					//!custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
					case 'custom':
						message.reply('**```Use this command to get drops from any number of any enemy that doesn\'t have a command. ' +
							'Automatically divides grist and applies multipliers according to the tier.```**\n\n**Format:** `!custom [# ' +
							'killed] t[Tier (1-7 (WIP: 8/UNDEFINED: 9))] [# of boon dice]d[dice value] [# of grist dice]d[dice ' +
							'value]`\n\n**examples:**\n`!multi 14 2 200d400 88d94` rolls 200d400 for boon and 88d94 for grist, then multiplies ' +
							'and breaks down as if it were an ogre.')
					break;
					case 'death':
						message.reply('Rolls death saves until a result is determined and informs you of your fate.')
					break;
					//normal
					default:
						message.reply('use `!drops [command]` to get info on a specific command\n\n```To get drops:```\n`!imp`\n`!ogre`\n`!basilisk`\n`!lich`\n`!giclops`\n`!titachnid`\n`!archeron`\n`!rook`\n`!multi`\n`!custom`\n\n```Other:```\n`!death`');
				}
			break;
		}
    }
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
