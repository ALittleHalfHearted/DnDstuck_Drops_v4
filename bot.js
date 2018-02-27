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
		
		var tMod = 0;
		var build = 0;
		var t1 = 0;
		var t2 = 0;
		var t3 = 0;
		var t4 = 0;
		var t5 = 0;
		var t6 = 0;
		var t7 = 0;
		var t8 = 0;
		var boon = 0;
		var imps = 0;
		var ogres = 0;
		var basilisks = 0;
		var lichs = 0;
		var giclopes = 0;
		var titachnids = 0;
		var archerons = 0;
		var rooks = 0;
		var grist = 0;
		var health = 0;
		
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
			case 'death':
				var pass = 0;
				var fail = 0;
				while(pass != 3 && fail != 3){
					var roll = Math.floor(Math.random() * 20) + 1;
					if(roll >= 10){
						pass = pass + 1
					}
					else{
						fail = fail + 1
					}
				}
				if(pass == 3){
					message.reply('Congratulations, you survived! Well, barely. You\'re not in the clear yet. But you\'re alive!')
				}
				else{
					message.reply('We at the Committe for Living Peoples regret to inform you that you are no longer allowed to attend our meetings.' +
					'We hope your experiences in the dream bubbles will be compensation enough until your papers have been processed.')
				}
			break;
			case 'imp':
				var x = message.content.substring(5)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				for(var i = 0; i < x; i++){
					grist = impGrist(grist);
					boon = impBoon(boon);
					health = impHealth(health);
				}
				build = grist * 0.8
				t1 = grist * 0.2
				message.reply('```For killing ' + x + ' imps, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
				'\nT1 = ' + t1.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```')
			break;
		}
	}
})

function impGrist(grist){
	return grist + Math.floor(Math.random() * 100) + 1;
}
function impBoon(boon){
	return boon + Math.floor(Math.random() * 10) + 1;
}
function impHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 2) + 1;
	}
	return health
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
