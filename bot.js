const Discord = require('discord.js');
const client = new Discord.Client();

const embed = new Discord.RichEmbed()
	.setTitle("__```Commands List```__")
	.setDescription("use `%drops [command]` to get info on a specific command")
	.setColor(65299)
	.setThumbnail("https://images.fineartamerica.com/images-medium-large/god-does-not-play-dice-with-the-universe-einstein-arley-blankenship.jpg")
	.addField("Enemy Drops", "`%imp`\n`%ogre`\n`%basilisk`\n`%lich`\n`%giclops`\n`%titachnid`\n`%archeron`\n`%rook`\n`%multi`\n`%custom`", true)
	.addField("Storage", "`%register`\n`%list`\n`%me`\n`%set`\n`%check`", true)
	.addBlankField()
	.addField("```Other Commands```", "`%death`\n`%d10`\t`%d20`\n`%percent`\n`%tohit`\n`%damage`\n`%ping`\t`%pong`",true);

var playerStats = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
//var substats = [' ',' ']


client.on('ready', () => {
	console.log('I am ready!');
});


client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content.substring(0,1) === '%') {
		const Player1 = [playerStats[0],playerStats[1],playerStats[2],playerStats[3],playerStats[4],playerStats[5],playerStats[6]];
		const Player2 = [playerStats[7],playerStats[8],playerStats[9],playerStats[10],playerStats[11],playerStats[12],playerStats[13]];
		const Player3 = [playerStats[14],playerStats[15],playerStats[16],playerStats[17],playerStats[18],playerStats[19],playerStats[20]];
		const Player4 = [playerStats[21],playerStats[22],playerStats[23],playerStats[24],playerStats[25],playerStats[26],playerStats[27]];
		const Player5 = [playerStats[28],playerStats[29],playerStats[30],playerStats[31],playerStats[32],playerStats[33],playerStats[34]];
		const Player6 = [playerStats[35],playerStats[36],playerStats[37],playerStats[38],playerStats[39],playerStats[40],playerStats[41]];
		const Player7 = [playerStats[42],playerStats[43],playerStats[44],playerStats[45],playerStats[46],playerStats[47],playerStats[48]];
		const Player8 = [playerStats[49],playerStats[50],playerStats[51],playerStats[52],playerStats[53],playerStats[54],playerStats[55]];
		const Player9 = [playerStats[56],playerStats[57],playerStats[58],playerStats[59],playerStats[60],playerStats[61],playerStats[62]];
		const Player10 = [playerStats[63],playerStats[64],playerStats[65],playerStats[66],playerStats[67],playerStats[68],playerStats[69]];
		const Player11 = [playerStats[70],playerStats[71],playerStats[72],playerStats[73],playerStats[74],playerStats[75],playerStats[76]];
		const Player12 = [playerStats[77],playerStats[78],playerStats[79],playerStats[80],playerStats[81],playerStats[82],playerStats[83]];
		const PlayerSort = [Player1,Player2,Player3,Player4,Player5,Player6,Player7,Player8,Player9,Player10,Player11,Player12];
		const PlayerNames = [Player1[0],Player2[0],Player3[0],Player4[0],Player5[0],Player6[0],Player7[0],Player8[0],Player9[0],Player10[0],Player11[0],Player12[0]];
		
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
		var EnemyAC = [5,10,15,20,25,30,35,35];
		
		var ac = '';
		var tier = 0;
		var check = 0;
		var check2 = 0;
		var check3 = 0;
		var math = "";
		var mod = 0;
		var build = 0;
		var t1 = 0;
		var t2 = 0;
		var t3 = 0;
		var t4 = 0;
		var t5 = 0;
		var t6 = 0;
		var t7 = 0;
		var t8 = 0;
		var t9 = 0;
		var boon = 0;
		var imps = 0;
		var ogres = 0;
		var basilisks = 0;
		var liches = 0;
		var giclopes = 0;
		var titachnids = 0;
		var archerons = 0;
		var rooks = 0;
		var grist = 0;
		var health = 0;
		
		switch(cmd) {
			// Ping Pong
			case 'ping':
				message.reply('Pong!');
			break;
			case 'pong':
				message.reply('Ping!');
			break;
			case 'embed':
				message.channel.send({embed});
			break;
			case 'drops':
				//FORMAT: message.channel.send('**```description```**\n\n**Format:** `%cmd (args)`\n\n**Examples:**\n`%cmd (args)` what it does');
				//COPY: message.channel.send('**``` ```**\n\n**Format:** `%`');
				switch(args){
					//%[enemy] [#killed]
					case 'imp': case 'ogre': case 'basilisk': case 'lich': case 'giclops': case 'lich': case 'giclops': case 'titachnid': case 'archeron': case 'rook':
						message.channel.send('**```Use this command to get drops from any number of a single type of enemy. Automatically divides grist ' +
							      'and applies multipliers.```**\n\n**Format:** `%[enemy name] [# killed]`\n\n**examples:**\n`%ogre 45` gets drops from 45 ' +
							      'ogres\n`%rook 22` gets drops from 22 rooks.');
					break;
					//%multi t[#] [#killed] t[#] [# killed](Repeat as necessary)
					case 'multi':
						message.channel.send('**```Use this command to get drops from any number of any amount of enemy types. Automatically divides ' +
						'grist and applies multipliers.```**\n```Tier #s\nt1 = imp\nt2 = ogre\nt3 = basilisk\nt4 = lich\nt5 = giclops\nt6 ' +
						'= titachnid\nt7 = archeron\nt8 = rook/D.A.```\n\n**Format:** `%multi t[tier #] [#killed] t[tier #] [# killed](Repeat as ' +
						'necessary)`\n\n**examples:**\n`%multi t3 54 t8 3` gets drops from 54 basilisks and 3 rooks\n`%multi t6 20 t2 8` gets drops ' +
						'from 20 titachnids and 8 ogres.');
					break;
					//%custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
					case 'custom':
						message.channel.send('**```Use this command to get drops from any number of any enemy that doesn\'t have a command. ' +
							      'Automatically divides grist and applies multipliers according to the tier.```**\n\n**Format:** `%custom [# ' +
							      'killed] t[Tier (1-7 (UNDEFINED: 9))] [# of boon dice]d[dice value] [# of grist dice]d[dice ' +
							      'value]`\n\n**examples:**\n`%custom 14 t2 200d40 88d94` rolls 200d40 for boon and 88d94 for grist, then multiplies ' +
							      'and breaks down as if it were an ogre. You\'ll have to do health drops yourself.');
					break;
					case 'death':
						message.channel.send('**```Rolls death saves until a result is determined and informs you of your fate.```**');
					break;
					case 'd20':
						message.channel.send('**```Rolls 1d20 and explodes as necessary. Allows for most modifiers, just keep it simple.```**\n\n**Format:** `%check [adv/dis/bless/curse][mods]`\n\nPossibly adding mod dice at later date. Until then, dice will simply break it.');
					break;
					case 'd10':
						message.channel.send('**```Rolls 1d10 and explodes as necessary. Allows for most modifiers, just keep it simple.```**\n\n**Format:** `%check [adv/dis/bless/curse][mods]`');
					break;
					case 'tohit':
						message.channel.send('**```Exploding roll to hit! Now with mods! Also, if you specify the enemy\s armor or tier it will inform you if you crit. (For e[y], y = base enemy tier. For a[y], y = custom AC.) Good luck. Don\'t break anything ~~important~~.```**\n\n**Format:** `%tohit t[x][adv/dis/bless/curse][mods](e/a)[y]`');
					break;
					case 'ping': case 'pong':
						message.channel.send('**```Ping! Pong! Ping! Pong! Use this to see if the bot is working! Ping! Pong! Ping! Pong!\nSeriously though, this serves no real purpose other than to make sure the bot is online.```**');
					break;
					case 'damage':
						message.channel.send('**```Rolling your damage with whatever sides and whatever mods. Have fun!```**\n\n**Format:** `%damage t[tier] d[sides] [mods]`');
					break;
					case 'percent':
						message.channel.send('**```Rolls Xd100. You can specify how many times it rolls, but if you don\'t it just rolls until you hit at least 100% total.```**\n\n**Format:** `%damage [turns]`');
					break;
					case 'register':
						message.channel.send('**```Registers you as a player in the session. Limited to 12 players.```**\n\n**Format:** `%register`');
					break;
					case 'set':
						message.channel.send('**```Allows you to set a stat to modify rolls.```**\n\n**Format:** `%set [stat]`'); //DO NOT DO ANYTHING WITH A "NEW" STAT!
					break;
					case 'me':
						message.channel.send('**```Lets you check your stats.```**\n\n**Format:** `%me`');
					break;
					case 'list':
						message.channel.send('**```Allows you to see a list of everyone registered so far. Add \'stats\' after the command to see everyone and their stats.```**\n\n**Format:** `%list (stats)`');
					break;
					case 'check':
						message.channel.send('**```Makes an exploding d20 check. If you are registered, you can add your set stat for any category. (Currently working on substats and conditional stats.) Also allows for adv/dis rolls.```**\n\n**Format:** `%check [stat][adv/dis/bless/curse]`');
					break;
					//normal
					default:
						message.channel.send('use `%drops [command]` to get info on a specific command\n`(You can also use %embed to get this list as an embed!)`\n\n```Enemy Drops:```\n`%imp`\n`%ogre`\n`%basilisk`\n`%lich`\n`%giclops`\n`%' +
							      'titachnid`\n`%archeron`\n`%rook`\n`%multi`\n`%custom`\n\n```Stored:```\n`%register`\n`%list`\n`%me`\n`%set`\n`%check`\n\n```Other:```\n`%death`\n`%d10`\t`%d20`\n`%percent`\n`%tohit`\n`%damage`\n`%ping`\t`%pong`');
				}
			break;
			case 'resetstats':
				if(message.author == '<@220176861379035137>'){
					for(var i = 0; i < 84; i++){
						playerStats[i] = ' ';
					}
					//substats = [' ',' '];
					console.log('Player data reset');
					message.channel.send('Data reset successfully!');
				}
				else{
					message.channel.send('You don\'t have permission to do that.');
				}
			break;
			case 'register':
				var i = 0;
				var found = false;
				var dupe = false;
				console.log(message.author + ' is registering...');
				while(i < 12 && found == false && dupe == false){
					if(PlayerNames[i] == ' '){
						found = true;
						console.log('Registration successful!');
					}
					else if(PlayerNames[i] == message.author){
						dupe = true;
						console.log('Player is already in system.');
					}
					else{
						i++;
						console.log('Space ' + i + ' taken.');
					}
				}
				if(found == true && dupe == false){
					/*ID*/ playerStats[i * 7] = message.author;
					/*CHA*/ playerStats[i * 7 + 1] = 'CHA: 0';
					/*DEX*/ playerStats[i * 7 + 2] = 'DEX: 0';
					/*STR*/ playerStats[i * 7 + 3] = 'STR: 0';
					/*CON*/ playerStats[i * 7 + 4] = 'CON: 0';
					/*INT*/ playerStats[i * 7 + 5] = 'INT: 0';
					/*WIS*/ playerStats[i * 7 + 6] = 'WIS: 0';
					message.reply('You have successfully been registered as player ' + (i + 1) + '. Have a nice day!');
					console.log('New Player: ' + playerStats[i * 7]);
				}
				else{
					message.reply('Unfortunately, you could not be registered. Either the session is maxed out on players or you already registered.');
					console.log('Player registration failed.');
				}
			break;
			case 'list':
				if(args == 'stats'){
					message.channel.send('All players: ' + PlayerSort);
				}
				else{
					message.channel.send('All players: ' + PlayerNames);
				}
			break;
			case 'me':
				var others = '';
				var i = 0;
				var found = false;
				var sub = false;
				/*for(var n = 0; n < substats.length; n + 2){
					if(substats[n].indexOf(message.author) != -1){
						others = others + ', ' + substats[n] + substats[n + 1];
						sub = true;
					}
				}*/
				while(i < 12 && found == false){
					if(PlayerNames[i] == message.author){
						found = true;
					}
					else{
						i++;
					}
				}
				/*if(found == true && sub == true){
					message.channel.send('Player ' + (i + 1) + ' data: ' + PlayerSort[i] + others);
				}
				else */if(found == true){
					message.channel.send('Player ' + (i + 1) + ' data: ' + PlayerSort[i]);
				}
				else{
					message.channel.send('You aren\'t registered yet! If the session isn\'t full yet, please use `%register` to do so.');
				}
			break;
			case 'set':
				//var custom = false;
				var stat = args.substring(0,3);
				args = args.replace(stat,'').replace(' ','');
				var found = false;
				var i = 0;
				while(i < 12 && found == false){
					if(PlayerNames[i] == message.author){
						found = true;
					}
					else{
						i++;
					}
				}
				if(found == true){
					switch(stat){
						case 'cha':
							playerStats[i * 7 + 1] = 'CHA: ' + args;
						break;
						case 'dex':
							playerStats[i * 7 + 2] = 'DEX: ' + args;
						break;
						case 'str':
							playerStats[i * 7 + 3] = 'STR: ' + args;
						break;
						case 'con':
							playerStats[i * 7 + 4] = 'CON: ' + args;
						break;
						case 'int':
							playerStats[i * 7 + 5] = 'INT: ' + args;
						break;
						case 'wis':
							playerStats[i * 7 + 6] = 'WIS: ' + args;
						break;
						/*case 'new':
							var k = 0;
							var seen = false;
							while(k < substats.length && seen == false){
								if(substats[k] == ' '){
									seen = true;
								}
								else{
									k = k + 2;
								}
							}
							if(k == substats.length && seen == false){
								substats[substats.length] = message.author + ' ' + args.substring(0,args.lastIndexOf(' '));
								substats[substats.length] = args.substring(args.lastIndexOf(' '));
							}
							else{
								substats[k] = message.author + ' ' + args.substring(0,args.lastIndexOf(' '));
								substats[k + 1] = args.substring(args.lastIndexOf(' '));
							}
							message.channel.send('New mod: ' + message.author + ' ' + args.substring(0,args.lastIndexOf(' ')) + ' =' + args.substring(args.lastIndexOf(' ')));
							var custom = true;
						break;
						default:
							var k = 0;
							var seen = false;
							while(k < substats.length && seen == false){
								if(substats[k].indexOf(args.substring(0,args.lastIndexOf(' '))) != -1 && substats[k].indexOf(message.author) != -1){
									seen = true;
								}
								else{
									k = k + 2;
								}
							}
							if(seen == false){
								message.channel.send('Sorry, we couldn\'t find a mod for ' + args.substring(0,args.lastIndexOf(' ')) + ' from ' + message.author + 'in our datbase. Please try starting with the \'new\' declaration next time.');
							}
							else{
								substats[k + 1] = args.substring(args.lastIndexOf(' '));
							}
							var custom = true;*/
					}
					//if(custom == false){
						message.channel.send('Updated player ' + (i + 1) + ' data: ' + playerStats[i * 7 + 1] + ', ' + playerStats[i * 7 + 2] + ', ' + playerStats[i * 7 + 3] + ', ' + playerStats[i * 7 + 4] + ', ' + playerStats[i * 7 + 5] + ', ' + playerStats[i * 7 + 6]);
						console.log('Updated player ' + (i + 1) + '(' + playerStats[i * 7] + ') data: ' + playerStats[i * 7 + 1] + ', ' + playerStats[i * 7 + 2] + ', ' + playerStats[i * 7 + 3] + ', ' + playerStats[i * 7 + 4] + ', ' + playerStats[i * 7 + 5] + ', ' + playerStats[i * 7 + 6]);
					/*}
					else{
						message.channel.send('Updated player ' + (i + 1) + ' data: ' + playerStats[i * 7 + 1] + ', ' + playerStats[i * 7 + 2] + ', ' + playerStats[i * 7 + 3] + ', ' + playerStats[i * 7 + 4] + ', ' + playerStats[i * 7 + 5] + ', ' + playerStats[i * 7 + 6] + ', ' + substats[k] + substats[k + 1]);
						console.log('Updated player ' + (i + 1) + '(' + playerStats[i * 7] + ') data: ' + playerStats[i * 7 + 1] + ', ' + playerStats[i * 7 + 2] + ', ' + playerStats[i * 7 + 3] + ', ' + playerStats[i * 7 + 4] + ', ' + playerStats[i * 7 + 5] + ', ' + playerStats[i * 7 + 6] + ', ' + substats[k] + substats[k + 1]);
					}*/
				}
				else{
					message.channel.send('You aren\'t registered yet! If the session isn\'t full yet, please use `%register` to do so.');
				}
			break;
			case 'check':
				check = d20();
				if(message.content.indexOf('adv') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					if(check2 > check){
						check = check2;
					}
					args = args.replace("adv","");
				}
				else if(message.content.indexOf('bless') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					check3 = d20();
					message.channel.send(check3);
					if(check2 > check && check2 > check3){
						check = check2;
					}
					else if(check3 > check && check3 > check2){
						check = check3;
					}
					args = args.replace("bless","");
				}
				else if(message.content.indexOf('dis') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					if(check2 < check){
						check = check2;
					}
					args = args.replace("dis","");
				}
				else if(message.content.indexOf('curse') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					check3 = d20();
					message.channel.send(check3);
					if(check2 < check && check2 < check3){
						check = check2;
					}
					else if(check3 < check && check3 < check2){
						check = check3;
					}
					args = args.replace("curse","");
				}
				math = check.toString();
				var found = false;
				var i = 0;
				while(i < 12 && found == false){
					if(PlayerNames[i] == message.author){
						found = true;
					}
					else{
						i++;
					}
				}
				if(found == true){
					if(args != ''){
						args = args.replace(' ','');
						switch(args){
							case 'cha':
								check = check + parseInt(playerStats[i * 7 + 1].substring(5));
								math = math + '+' + playerStats[i * 7 + 1].substring(5);
							break;
							case 'dex':
								check = check + parseInt(playerStats[i * 7 + 2].substring(5));
								math = math + '+' + playerStats[i * 7 + 2].substring(5);
							break;
							case 'str':
								check = check + parseInt(playerStats[i * 7 + 3].substring(5));
								math = math + '+' + playerStats[i * 7 + 3].substring(5);
							break;
							case 'con':
								check = check + parseInt(playerStats[i * 7 + 4].substring(5));
								math = math + '+' + playerStats[i * 7 + 4].substring(5);
							break;
							case 'int':
								check = check + parseInt(playerStats[i * 7 + 5].substring(5));
								math = math + '+' + playerStats[i * 7 + 5].substring(5);
							break;
							case 'wis':
								check = check + parseInt(playerStats[i * 7 + 6].substring(5));
								math = math + '+' + playerStats[i * 7 + 6].substring(5);
							break;
							/*default:
								var i = 0
								var found = false
								while(i < substats.length && found == false){
									if(substats[i] == message.author + ' ' + args){
										check = check + parseInt(substats[i + 1]);
										math = math + '+' + substats[i + 1];
									}
									else{
										i = i + 2;
									}
								}
								if(i == substats.length && found == false){
									message.channel.send('Sorry, we couldn\'t find a mod for ' + args.substring(0,args.lastIndexOf(' ')) + ' from ' + message.author + 'in our datbase. Please try again after using the `%set [new]` command.');
								}*/
						}
					}
				}
				else{
					message.channel.send('You aren\'t registered yet! If the session isn\'t full yet, please use `%register` to do so.');
				}
				message.reply('Your check resulted in: ' + math + "=" + check);
			break;
			case 'percent':
				check = Math.floor(Math.random() * 100) + 1;
				var count = 1;
				math = check;
				if(args == ''){
					while(check < 100){
						var hold = Math.floor(Math.random() * 100) + 1;
						math = math + '+' + hold;
						check = check + hold;
						count++;
					}
				}
				else{
					while(count < args){
						var hold = Math.floor(Math.random() * 100) + 1;
						math = math + '+' + hold;
						check = check + hold;
						count++;
					}
				}
				message.reply('after ' + count + ' turns, you have gotten ' + check + '% of the way to your destination.\n' + math);
			break;
			case 'd10':
				check = d10();
				if(args == 'adv'){
					message.channel.send(check);
					check2 = d10();
					message.channel.send(check2);
					if(check2 > check){
						check = check2;
					}
					args = args.replace('adv','');
				}
				else if(args == 'bless'){
					message.channel.send(check);
					check2 = d10();
					message.channel.send(check2);
					check3 = d10();
					message.channel.send(check3);
					if(check2 > check && check2 > check3){
						check = check2;
					}
					else if(check3 > check && check3 > check2){
						check = check3;
					}
					args = args.replace('bless','');
				}
				else if(args == 'dis'){
					message.channel.send(check);
					check2 = d10();
					message.channel.send(check2);
					if(check2 < check){
						check = check2;
					}
					args = args.replace('dis','');
				}
				else if(args == 'curse'){
					message.channel.send(check);
					check2 = d10();
					message.channel.send(check2);
					check3 = d10();
					message.channel.send(check3);
					if(check2 < check && check2 < check3){
						check = check2;
					}
					else if(check3 < check && check3 < check2){
						check = check3;
					}
					args = args.replace('curse','');
				}
				math = check.toString();
				if(args != ""){
					if(isNaN(args.slice(0,1)) == false){
						var calculate = "=" + math + "+" + args;
					}
					else{
						var calculate = "=" + math + args;
					}
					math = calculate.replace("=","");
					check = modding(calculate);
				}
				message.reply('Your check resulted in: ' + math + "=" + check);
			break;
			case 'death':
				var pass = 0;
				var fail = 0;
				while(pass != 3 && fail != 3){
					check = d20();
					if(check >= 10){
						pass = pass + 1;
					}
					else{
						fail = fail + 1;
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
			case 'd20':
				check = d20();
				if(message.content.indexOf('adv') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					if(check2 > check){
						check = check2;
					}
					args = args.replace("adv","");
				}
				else if(message.content.indexOf('bless') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					check3 = d20();
					message.channel.send(check3);
					if(check2 > check && check2 > check3){
						check = check2;
					}
					else if(check3 > check && check3 > check2){
						check = check3;
					}
					args = args.replace("bless","");
				}
				else if(message.content.indexOf('dis') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					if(check2 < check){
						check = check2;
					}
					args = args.replace("dis","");
				}
				else if(message.content.indexOf('curse') != -1){
					message.channel.send(check);
					check2 = d20();
					message.channel.send(check2);
					check3 = d20();
					message.channel.send(check3);
					if(check2 < check && check2 < check3){
						check = check2;
					}
					else if(check3 < check && check3 < check2){
						check = check3;
					}
					args = args.replace("curse","");
				}
				math = check.toString();
				if(args != ""){
					if(isNaN(args.slice(0,1)) == false){
						var calculate = "=" + math + "+" + args;
					}
					else{
						var calculate = "=" + math + args;
					}
					math = calculate.replace("=","");
					check = modding(calculate);
				}
				message.reply('Your check resulted in: ' + math + "=" + check);
			break;
			case 'tohit':
				//%tohit t[x][adv/dis/bless/curse][mods](e/a)[y]
				var x = args.substring(args.indexOf('t') + 1, args.indexOf('t') + 2);
				if(x == 0 || isNaN(x) == true){
					x = 1;
				}
				for(var i = 0; i < x; i++){
					check = check + d10();
				}
				if(args.indexOf('adv') != -1){
					for(var i = 0; i < x; i++){
						check2 = check2 + d10();
					}
					if(check2 > check){
						check = check2;
					}
					args = args.replace("adv","");
				}
				else if(args.indexOf('dis') != -1){
					for(var i = 0; i < x; i++){
						check2 = check2 + d10();
					}
					if(check2 < check){
						check = check2;
					}
					args = args.replace("dis","");
				}
				else if(args.indexOf('bless') != -1){
					for(var i = 0; i < x; i++){
						check2 = check2 + d10();
					}
					for(var i = 0; i < x; i++){
						check3 = check3 + d10();
					}
					if(check2 > check && check2 > check3){
						check = check2;
					}
					else if(check3 > check && check3 > check2){
						check = check3;
					}
					args = args.replace("bless","");
				}
				else if(args.indexOf('curse') != -1){
					for(var i = 0; i < x; i++){
						check2 = check2 + d10();
					}
					for(var i = 0; i < x; i++){
						check3 = check3 + d10();
					}
					if(check2 < check && check2 < check3){
						check = check2;
					}
					else if(check3 < check && check3 < check2){
						check = check3;
					}
					args = args.replace("curse","");
				}
				math = check.toString();
				if(args.indexOf('e') != -1){
					ac = EnemyAC[args.substring(args.indexOf('e') + 1,args.indexOf('e') + 2) - 1];
					args = args.replace(args.substring(args.indexOf('e'),args.indexOf('e') + 2),'');
				}
				else if(args.indexOf('a') != -1){
					ac = args.substring(args.indexOf('a') + 1,args.indexOf('a') + 2);
					args = args.replace(args.substring(args.indexOf('a'),args.indexOf('a') + 2),'');
				}
				if(args.indexOf(' ') != -1){
					args.replace(/ /g,'');
				}
				if(args != ""){
					if(isNaN(args.substring(0,1)) == false){
						var op = "+";
					}
					else{
						var op = "";
					}
					var calculate = "=" + math + op + args.substring(2).toLowerCase();
					math = calculate.replace("=","");
					check = modding(calculate);
				}
				math = math.replace(/ /g,'');
				if(ac == '' || check < ac + 10){
					message.reply('Your roll to hit: ' + math + '=' + check);
				}
				else if(check >= ac + 10){
					message.reply('Your roll to hit: ' + math + '=' + check + '\n**Critical Hit!! Effect roll: ' + (Math.floor(Math.random() * 20) + 1) + '**');
				}
			break;
			case 'damage':
				//%damage t[tier] d[sides] [mods]
				if(args == ''){
					message.reply('Where\'s your input mate?');
				}
				else{
					tier = args.substring(args.indexOf('t') + 1,args.indexOf('t') + 2);
					var num = args.substring(args.indexOf('d') + 1,args.indexOf('d') + 2);
					for(var c = 0; c < tier; c++){
						check = check + Math.floor(Math.random() * num) + 1;
					}
					math = check;
					args = args.replace(tier,'').replace(num,'').replace(/ /g,'');
					if(args != ''){
						mod = args.slice(args.lastIndexOf(' '));
						if(isNaN(mod) == false){
							var op = "+";
						}
						else{
							var op = "";
						}
						var calculate = "=" + math + op + args.substring(2).toLowerCase();
						math = calculate.replace("=","");
						check = modding(calculate);
					}
					message.reply('You dealt ' + math + '=' + check + ' damage');
				}
			break;
			case 'imp':
				if(args == 0 || isNaN(args) == true) {
					args = 1;
				}
				for(var i = 0; i < args; i++){
					grist = impGrist(grist);
					boon = impBoon(boon);
					health = impHealth(health);
				}
				build = grist * 0.8;
				t1 = grist * 0.2;
				message.reply('```For killing ' + args + ' imps, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
					      '\nT1 = ' + t1.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
			break;
			case 'ogre':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				for(var i = 0; i < args; i++){
					grist = ogreGrist(grist);
					boon = ogreBoon(boon);
					health = ogreHealth(health);
				}
				grist = grist * 2;
				build = grist * 0.6;
				t1 = grist * 0.3;
				t2 = grist * 0.1;
				message.reply('```For killing ' + args + ' ogres, you have obtained:\nBoon = ' + (boon * 2) + '\nBG = ' + build.toFixed(0) +
					'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
			break;
			case 'basilisk':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < args; i++){
						//5d100
						grist = basiliskGrist(grist);
						//1d100
						boon = basiliskBoon(boon);
						health = basiliskHealth(health);
					}
					grist = grist * 4;
					build = grist * 0.4; 
					t1 = grist * 0.3;
					t2 = grist * 0.2;
					t3 = grist * 0.1;
					message.reply('```For killing ' + args + ' basilisks, you have obtained:\nBoon = ' + (boon * 4) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'lich':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < args; i++){
						//10d100
						grist = lichGrist(grist);
						//2d100
						boon = lichBoon(boon);
						health = lichHealth(health);
					}
					grist = grist * 8;
					build = grist * 0.3;
					t1 = grist * 0.2;
					t2 = grist * 0.2;
					t3 = grist * 0.2;
					t4 = grist * 0.1;
					message.reply('```For killing ' + args + ' liches, you have obtained:\nBoon = ' + (boon * 8) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'giclops':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < args; i++){
						//15d100
						grist = giclopsGrist(grist);
						//4d100
						boon = giclopsBoon(boon);
						health = giclopsHealth(health);
					}
					grist = grist * 16;
					build = grist * 0.25;
					t1 = grist * 0.20;
					t2 = grist * 0.15;
					t3 = grist * 0.15;
					t4 = grist * 0.1;
					t5 = grist * 0.05;
					message.reply('```For killing ' + args + ' giclopes, you have obtained:\nBoon = ' + (boon * 16) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'titachnid':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < args; i++){
						//25d100
						grist = titachnidGrist(grist);
						//10d100
						boon = titachnidBoon(boon);
						health = titachnidHealth(health);
					}
					grist = grist * 32;
					build = grist * 0.2;
					t1 = grist * 0.15;
					t2 = grist * 0.15;
					t3 = grist * 0.15;
					t4 = grist * 0.15;
					t5 = grist * 0.1;
					t6 = grist * 0.1;
					message.reply('```For killing ' + args + ' titachnids, you have obtained:\nBoon = ' + (boon * 32) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'archeron':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < args; i++){
						//40d100
						grist = archeronGrist(boon);
						//20d100
						boon = archeronBoon(boon);
						health = archeronHealth(health);
					}
					grist = grist * 64;
					build = grist * 0.2
					t1 = grist * 0.15
					t2 = grist * 0.15
					t3 = grist * 0.1
					t4 = grist * 0.1
					t5 = grist * 0.1
					t6 = grist * 0.1
					t7 = grist * 0.1
					message.reply('```For killing ' + args + ' archerons, you have obtained:\nBoon = ' + (boon * 64) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'rook':
				if(args == 0 || isNaN(args) == true) {
					args = 1
				}
				if(args < 100){
					for(var i = 0; i < rooks; i++){
						//50d100
						boon = rookBoon(boon);
						health = rookHealth(health);
					}
					message.reply('```For killing ' + args + ' rooks and/or D.A.s, you have obtained:\nBoon = ' + (boon * 128) + '\nHealth Gel = ' + health + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'multi':
				var highest = 0
				if(args.indexOf('t1') != -1){
					imps = args.substring(args.indexOf('t1') + 2,args.indexOf('t1') + 4);
					highest = 1;
					mod = 1;
				}
				if(args.indexOf('t2') != -1){
					ogres = args.substring(args.indexOf('t2') + 2,args.indexOf('t2') + 4);
					highest = 2;
					mod = 2;
				}
				if(args.indexOf('t3') != -1){
					basilisks = args.substring(args.indexOf('t3') + 2,args.indexOf('t3') + 4);
					highest = 3;
					mod = 4;
				}
				if(args.indexOf('t4') != -1){
					liches = args.substring(args.indexOf('t4') + 2,args.indexOf('t4') + 4);
					highest = 4;
					mod = 8;
				}
				if(args.indexOf('t5') != -1){
					giclopes = args.substring(args.indexOf('t5') + 2,args.indexOf('t5') + 4);
					highest = 5;
					mod = 16;
				}
				if(args.indexOf('t6') != -1){
					titachnids = args.substring(args.indexOf('t6') + 2,args.indexOf('t6') + 4);
					highest = 6;
					mod = 32;
				}
				if(args.indexOf('t7') != -1){
					archerons = args.substring(args.indexOf('t7') + 2,args.indexOf('t7') + 4);
					highest = 7;
					mod = 64;
				}
				if(args.indexOf('t8') != -1){
					rooks = args.substring(args.indexOf('t8') + 2,args.indexOf('t8') + 4);
					highest = 8;
					mod = 128;
				}				
				//don't run if there's no input
				if(highest == 0){
					message.reply('why don\'t you have input ~~you little shit~~');
				}
				else{
					//imp drops
					if(imps > 0){
						for(var i = 0; i < imps; i++){
							grist = impGrist(grist);
							boon = impBoon(boon);
							health = impHealth(health);
						}
						build = build + (grist * 0.8);
						t1 = t1 + (grist * 0.2);
						grist = 0;
						
					}
				
					//ogre drops
					if(ogres > 0){
						for(var i = 0; i < ogres; i++){
							grist = ogreGrist(grist);
							boon = ogreBoon(boon);
							health = ogreHealth(health);
						}
						build = build + (grist * 0.6)
						t1 = t1 + (grist * 0.3)
						t2 = t2 + (grist * 0.1)
						grist = 0
					}
				
					//basilisk drops
					if(basilisks > 0){
						for(var i = 0; i < basilisks; i++){
							//5d100
							grist = basiliskGrist(grist);
							//1d100
							boon = basiliskBoon(boon);
							health = basiliskHealth(health);
						}
						build = build + (grist * 0.4); 
						t1 = t1 + (grist * 0.3)
						t2 = t2 + (grist * 0.2)
						t3 = t3 + (grist * 0.1)
						grist = 0
					}
				
					//lich drops
					if(liches > 0){
						for(var i = 0; i < liches; i++){
							//10d100
							grist = lichGrist(grist);
							//2d100
							boon = lichBoon(boon);
							health = lichHealth(health);
						}
						build = build + (grist * 0.3)
						t1 = t1 + (grist * 0.2)
						t2 = t2 + (grist * 0.2)
						t3 = t3 + (grist * 0.2)
						t4 = t4 + (grist * 0.1)
						grist = 0
					}
				
					//giclops drops
					if(giclopes > 0){
						for(var i = 0; i < giclopes; i++){
							//15d100
							grist = giclopsGrist(grist);
							//4d100
							boon = giclopsBoon(boon);
							health = giclopsHealth(health);
						}
						build = build + (grist * 0.25)
						t1 = t1 + (grist * 0.20)
						t2 = t2 + (grist * 0.15)
						t3 = t3 + (grist * 0.15)
						t4 = t4 + (grist * 0.1)
						t5 = t5 + (grist * 0.05)
						grist = 0
					}
					
					//titachnid drops
					if(titachnids > 0){
						for(var i = 0; i < titachnids; i++){
							//25d100
							grist = titachnidGrist(grist);
							//10d100
							boon = titachnidBoon(boon);
							health = titachnidHealth(health);
						}
						build = build + (grist * 0.2)
						t1 = t1 + (grist * 0.2)
						t2 = t2 + (grist * 0.15)
						t3 = t3 + (grist * 0.15)
						t4 = t4 + (grist * 0.15)
						t5 = t5 + (grist * 0.15)
						t6 = t6 + (grist * 0.15)
						grist = 0
					}
					
					//archeron drops
					if(archerons > 0){
						for(var i = 0; i < archerons; i++){
							//40d100
							grist = archeronGrist(boon);
							//20d100
							boon = archeronBoon(boon);
							health = archeronHealth(health);
						}
						build = build + (grist * 0.2)
						t1 = t1 + (grist * 0.15)
						t2 = t2 + (grist * 0.15)
						t3 = t3 + (grist * 0.1)
						t4 = t4 + (grist * 0.1)
						t5 = t5 + (grist * 0.1)
						t6 = t6 + (grist * 0.1)
						t7 = t7 + (grist * 0.1)
						grist = 0
					}
					
					//rook drops
					if(rooks > 0){
						for(var i = 0; i < rooks; i++){
							//50d100
							boon = rookBoon(boon);
							health = rookHealth(health);
						}
					}
				
					//multiplier!!
					boon = boon * mod
					build = build * mod
					t1 = t1 * mod
					t2 = t2 * mod
					t3 = t3 * mod
					t4 = t4 * mod
					t5 = t5 * mod
					t6 = t6 * mod
					t7 = t7 * mod
				
					//display
					message.reply('```for killing whatever you killed, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
							'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
							'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '```')
				}
			break;
			case 'custom':
				//%custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
				//%custom 20 9 100d100 100d100
				var num = message.content.substring(8,10)
				var tier = message.content.substring(message.content.indexOf('t',9) + 1,message.content.indexOf('t',9) + 2)
				var boonDieVal = message.content.substring(message.content.indexOf('d') + 1, message.content.indexOf(' ',message.content.indexOf('d')))
				var boonDieNum = message.content.substring(13,message.content.indexOf('d'))
				var gristDieVal = message.content.substring(message.content.lastIndexOf('d') + 1)
				var gristDieNum = message.content.substring(message.content.lastIndexOf(' ') + 1,message.content.lastIndexOf('d'))
				
				if(num > 40 || tier > 9 || boonDieVal > 100 || boonDieNum > 1000 || gristDieVal > 100 || gristDieNum > 1000){
					message.reply('You need to keep this within reason... The most I will work with is:\n`20 t9 1000d100 1000d100`')
				}
				else if(num == 0 || tier == 0 || boonDieVal == 0 || boonDieNum == 0 || gristDieVal == 0 || gristDieNum == 0){
					message.reply('Please for the love of god fill everything in.')
				}
				else if(tier > 8){
					message.reply('Your tier is undefined. Please wait until my creator has figured this out.')
				}
				else{
					for(var i = 0; i < num; i++){
						for(var z = 0; z < gristDieNum; z++){
							grist = grist + Math.floor(Math.random() * gristDieVal) + 1;
						}
						for(var y = 0; y < boonDieNum; y++){
							boon = boon + Math.floor(Math.random() * boonDieNum) + 1;
						}
					}
					
					//20% T0 10% t1 10% T2 10% T3 10% T4 10% T5 10% T6 10% T7 10% T8 
					if(tier == 8){
						var build = (grist * 128) * 0.2
						var t1 = (grist * 128) * 0.1
						var t2 = (grist * 128) * 0.1
						var t3 = (grist * 128) * 0.1
						var t4 = (grist * 128) * 0.1
						var t5 = (grist * 128) * 0.1
						var t6 = (grist * 128) * 0.1
						var t7 = (grist * 128) * 0.1
						var t8 = (grist * 128) * 0.1
					}
					if(tier == 7){
						var build = (grist * 64) * 0.2
						var t1 = (grist * 64) * 0.15
						var t2 = (grist * 64) * 0.15
						var t3 = (grist * 64) * 0.1
						var t4 = (grist * 64) * 0.1
						var t5 = (grist * 64) * 0.1
						var t6 = (grist * 64) * 0.1
						var t7 = (grist * 64) * 0.1
						var boon = boon * 64
					}
					if(tier == 6){
						var build = (grist * 32) * 0.2
						var t1 = (grist * 32) * 0.2
						var t2 = (grist * 32) * 0.15
						var t3 = (grist * 32) * 0.15
						var t4 = (grist * 32) * 0.15
						var t5 = (grist * 32) * 0.15
						var t6 = (grist * 32) * 0.15
						boon = boon * 32
					}
					if(tier == 5){
						var build = (grist * 16) * 0.25
						var t1 = (grist * 16) * 0.20
						var t2 = (grist * 16) * 0.15
						var t3 = (grist * 16) * 0.15
						var t4 = (grist * 16) * 0.1
						var t5 = (grist * 16) * 0.05
						boon = boon * 16
					}
					if(tier == 4){
						var build = (grist * 8) * 0.3
						var t1 = (grist * 8) * 0.2
						var t2 = (grist * 8) * 0.2
						var t3 = (grist * 8) * 0.2
						var t4 = (grist * 8) * 0.1
						boon = boon * 8
					}
					if(tier == 3){
						var build = (grist * 4) * 0.4; 
						var t1 = (grist * 4) * 0.3
						var t2 = (grist * 4) * 0.2
						var t3 = (grist * 4) * 0.1
						boon = boon * 4
					}
					if(tier == 2){
						var build = (grist * 2) * 0.6
						var t1 = (grist * 2) * 0.3
						var t2 = (grist * 2) * 0.1
						boon = boon * 2
					}
					if(tier == 1){
						var build = grist * 0.8
						var t1 = grist * 0.2
					}
					
					message.reply('```for killing ' + num + ' enemies of tier ' + tier + ', dropping a total of' + boonDieNum + 'd' + boonDieVal + ' ' +
						'boon and ' + gristDieNum + 'd' + gristDieVal + ' grist per enemy, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) + '\nT5 = ' +
						t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nT8 = ' + t8.toFixed(0) + '\nT9 = ' + t9.toFixed(0) + '```');
				}
			break;
			default:
				message.reply('Use an actual command ~~ya gosh darned cunt~~');
		}
	}
})

client.on('error', error => {
	console.log('bot down! ' + error);
	message.channel.send('I\'m going down now, thanks for that.');
	client.destroy();
	const client = new Discord.Client();
})

//Main dice
function d10(){
	var check = Math.floor(Math.random() * 10) + 1;
	if(check == 9 || check == 10){
		check = check + Math.floor(Math.random() * 10) + 1;
	}
	return check;
}
function d20(){
	var check = Math.floor(Math.random() * 20) + 1;
	if(check == 9 || check == 10){
		var explode = Math.floor(Math.random() * 10) + 1;
		check = check + explode;
	}
	else if(check == 19 || check == 20){
		var explode = Math.floor(Math.random() * 20) + 1;
		check = check + explode;
	}
	return check;
}

function modding(calculate){
	if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))) {
		calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()");/*.replace(/acos|arccosine/g, "Math.acos").replace(/asin|arcsine/g, "Math.asin").replace(/atan|arctangent|atan1|arctangent1/g, "Math.atan").replace(/atan2|arctangent2/g, "Math.atan2").replace(/cos|cosine/g, "Math.cos").replace(/sin|sine/g, "Math.sin").replace(/tan|tangent/g, "Math.tan")*/;
		if (calculate.replace(/[^%]/g, "").length > 0) {
			for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
				while ((calculate[calculate.indexOf("%", i+1) + 1] == "+" || calculate[calculate.indexOf("%", i+1) + 1] == "-" || calculate[calculate.indexOf("%", i+1) + 1] == "*" || calculate[calculate.indexOf("%", i+1) + 1] == "/" || calculate[calculate.indexOf("%", i+1) + 1] == "(" || calculate[calculate.indexOf("%", i+1) + 1] == ")" || calculate[calculate.indexOf("%", i+1) + 1] == "," || calculate.indexOf("%", i+1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
					for (let j = calculate.indexOf("%", i+1); j > -1; j--) {
						if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
							calculate = calculate.substring(0, j+1) + (calculate.substring(j+1, calculate.indexOf("%", i+1))/100) + calculate.substring(calculate.indexOf("%", i+1)+1, calculate.length);
							break;
						}
					}
				}
			}
		}
		calculate =  calculate.replace(/=/g, "");
	}
	return eval(calculate).toString();
}

//Enemy drops
function impGrist(grist){
	return grist = grist + Math.floor(Math.random() * 100) + 1;
}
function impBoon(boon){
	return boon = boon + Math.floor(Math.random() * 10) + 1;
}
function impHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 2) + 1;
	}
	return health
}

function ogreGrist(grist){
	for(var z = 0; z < 2; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function ogreBoon(boon){
	return boon = boon + Math.floor(Math.random() * 50) + 1;
}
function ogreHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 4) + 1;
	}
	return health = health + 1;
}

function basiliskGrist(grist){
	for(var z = 0; z < 5; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function basiliskBoon(boon){
	return boon = boon + Math.floor(Math.random() * 100) + 1;
}
function basiliskHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 6) + 1;
	}
	return health = health + 1;
}

function lichGrist(grist){
	for(var z = 0; z < 10; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function lichBoon(boon){
	for(var y = 0; y < 2; y++){
		boon = boon + Math.floor(Math.random() * 100) + 1;
	}
	return boon;
}
function lichHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 9) + 1;
	}
	return health;
}

function giclopsGrist(grist){
	for(var z = 0; z < 15; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function giclopsBoon(boon){
	for(var y = 0; y < 4; y++){
		boon = boon + Math.floor(Math.random() * 100) + 1;
	}
	return boon;
}
function giclopsHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 11) + 1;
	}
	return health;
}

function titachnidGrist(grist){
	for(var z = 0; z < 25; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function titachnidBoon(boon){
	for(var y = 0; y < 10; y++){
		boon = boon + Math.floor(Math.random() * 100) + 1;
	}
	return boon;
}
function titachnidHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 13) + 1;
	}
	return health = health + 1;
}

function archeronGrist(grist){
	for(var z = 0; z < 40; z++){
		grist = grist + Math.floor(Math.random() * 100) + 1;
	}
	return grist;
}
function archeronBoon(boon){
	for(var y = 0; y < 20; y++){
		boon = boon + Math.floor(Math.random() * 100) + 1;
	}
	return boon;
}
function archeronHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 16) + 1;
	}
	return health;
}

function rookBoon(boon){
	for(var z = 0; z < 50; z++){
		boon = boon + Math.floor(Math.random() * 100) + 1;
	}
	return boon;
}
function rookHealth(health){
	for(var c = 0; c < 2; c++){
		health = health + Math.floor(Math.random() * 18) + 1;
	}
	return health;
}

function overload(message){
	message.reply('Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!');
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
