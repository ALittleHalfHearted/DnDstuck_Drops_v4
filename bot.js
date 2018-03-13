const Discord = require('discord.js');
const client = new Discord.Client();

// Create a new webhook
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

// Send a message using the webhook
hook.send('I am now alive!');

client.on('ready', () => {
	console.log('I am ready!');
});


client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content === 'ping') {
		message.reply('pong');
	}
	if (message.content.substring(0,1) === '%') {
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		
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
			// %ping
			case 'ping':
				message.reply('Pong!');
			break;
			case 'drops':
				var command = message.content.substring(7);
				switch(command){
					//%[enemy] [#killed]
					case 'imp': case 'ogre': case 'basilisk': case 'lich': case 'giclops': case 'lich': case 'giclops': case 'titachnid': case 'archeron': case 'rook':
						message.reply('**```Use this command to get drops from any number of a single type of enemy. Automatically divides grist ' +
							      'and applies multipliers.```**\n\n**Format:** `%[enemy name] [# killed]`\n\n**examples:**\n`%ogre 45` gets drops from 45 ' +
							      'ogres\n`%rook 22` gets drops from 22 rooks.');
					break;
					//%multi t[#] [#killed] t[#] [# killed](Repeat as necessary)
					case 'multi':
						message.reply('**```Use this command to get drops from any number of any amount of enemy types. Automatically divides ' +
						'grist and applies multipliers.```**\n```Tier #s\nt1 = imp\nt2 = ogre\nt3 = basilisk\nt4 = lich\nt5 = giclops\nt6 ' +
						'= titachnid\nt7 = archeron\nt8 = rook/D.A.```\n\n**Format:** `%multi t[tier #] [#killed] t[tier #] [# killed](Repeat as ' +
						'necessary)`\n\n**examples:**\n`%multi t3 54 t8 3` gets drops from 54 basilisks and 3 rooks\n`%multi t6 20 t2 8` gets drops ' +
						'from 20 titachnids and 8 ogres.');
					break;
					//%custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
					case 'custom':
						message.reply('**```Use this command to get drops from any number of any enemy that doesn\'t have a command. ' +
							      'Automatically divides grist and applies multipliers according to the tier.```**\n\n**Format:** `%custom [# ' +
							      'killed] t[Tier (1-7 (UNDEFINED: 9))] [# of boon dice]d[dice value] [# of grist dice]d[dice ' +
							      'value]`\n\n**examples:**\n`%custom 14 t2 200d40 88d94` rolls 200d40 for boon and 88d94 for grist, then multiplies ' +
							      'and breaks down as if it were an ogre. You\'ll have to do health drops yourself.');
					break;
					case 'death':
						message.reply('Rolls death saves until a result is determined and informs you of your fate.');
					break;
					case 'check':
						message.reply('Makes a skill check (1d20) and explodes as necessary. Detects a single added or subtracted modifier.\n`%check (+/-)[mod]`\n\nPossibly adding mod dice at later date. Until then, dice will simply break it');
					break;
					case 'luck':
						message.reply('Exploding luck roll. Allows selection of `adv`, `dis`, `bless`, or `curse` modifiers.\n```%luck [mod]```');
					break;
					//normal
					default:
						message.reply('use `%drops [command]` to get info on a specific command\n\n```To get' +
							      ' drops:```\n`%imp`\n`%ogre`\n`%basilisk`\n`%lich`\n`%giclops`\n`%' +
							      'titachnid`\n`%archeron`\n`%rook`\n`%multi`\n`%custom`\n\n```Other:```\n`%death`\n`%check` (WIP)\n`%luck`');
				}
			break;
			case 'death':
				var pass = 0;
				var fail = 0;
				while(pass != 3 && fail != 3){
					var roll = Math.floor(Math.random() * 20) + 1;
					if(roll >= 10){
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
			case 'luck':
				var luck = Math.floor(Math.random() * 10) + 1;
				if(luck == 9 || luck == 10){
					luck = luck + Math.floor(Math.random() * 10) + 1;
				}
				else if(message.content.indexOf('adv') != -1){
					luck = adv(luck);
					message.reply('Your luck roll at advantage is: ' + luck);
				}
				else if(message.content.indexOf('bless') != -1){
					for(var i = 0; i < 2; i++){
						luck = adv(luck);
					}
					message.reply('Your luck roll at blessed advantage is: ' + luck);
				}
				else if(message.content.indexOf('dis') != -1){
					luck = dis(luck);
					message.reply('Your luck roll at disadvantage is: ' + luck);
				}
				else if(message.content.indexOf('curse') != -1){
					for(var i = 0; i < 2; i++){
						luck = dis(luck);
					}
					message.reply('Your luck roll at cursed disadvantage is: ' + luck);
				}
				else{
					message.reply('Your luck roll is: ' + luck);
				}
			break;
			case 'check':
				var check = Math.floor(Math.random() * 20) + 1;
				var math = check.toString();
				if(check == 9 || check == 10){
					var explode = Math.floor(Math.random() * 10) + 1;
					check = check + explode;
					math = math + "+" + explode;
				}
				else if(check == 19 || check == 20){
					var explode = Math.floor(Math.random() * 20) + 1;
					check = check + explode;
					math = math + "+" + explode;
				}
				if(message.content.indexOf('-') != -1){
					mod = message.content.substring(message.content.indexOf('-')+1);
					check = check - parseInt(mod);
					math = math + "-" + mod;
				}
				else if(message.content.indexOf('+') != -1){
					mod = message.content.substring(message.content.indexOf('+')+1)
					check = check + parseInt(mod);
					math = math + "+" + mod;
				}
				message.reply('Your check with modifier of ' + mod + ' resulted in: ' + check + '\nCheck math: ' + math);
			break;
			case 'imp':
				var x = message.content.substring(5);
				if(x == 0 || isNaN(x) == true) {
					x = 1;
				}
				for(var i = 0; i < x; i++){
					grist = impGrist(grist);
					boon = impBoon(boon);
					health = impHealth(health);
				}
				build = grist * 0.8;
				t1 = grist * 0.2;
				message.reply('```For killing ' + x + ' imps, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
					      '\nT1 = ' + t1.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
			break;
			case 'ogre':
				var x = message.content.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				for(var i = 0; i < x; i++){
					grist = ogreGrist(grist);
					boon = ogreBoon(boon);
					health = ogreHealth(health);
				}
				grist = grist * 2;
				build = grist * 0.6;
				t1 = grist * 0.3;
				t2 = grist * 0.1;
				message.reply('```For killing ' + x + ' ogres, you have obtained:\nBoon = ' + (boon * 2) + '\nBG = ' + build.toFixed(0) +
					'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
			break;
			case 'basilisk':
				var x = message.content.substring(10)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < x; i++){
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
					message.reply('```For killing ' + x + ' basilisks, you have obtained:\nBoon = ' + (boon * 4) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'lich':
				var x = message.content.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < x; i++){
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
					message.reply('```For killing ' + x + ' liches, you have obtained:\nBoon = ' + (boon * 8) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'giclops':
				var x = message.content.substring(9)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < x; i++){
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
					message.reply('```For killing ' + x + ' giclopes, you have obtained:\nBoon = ' + (boon * 16) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'titachnid':
				var x = message.content.substring(11)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < x; i++){
						//25d100
						grist = titachnidGrist(grist);
						//10d100
						boon = titachnidBoon(boon);
						health = titachnidHealth(health);
					}
					grist = grist * 32;
					build = grist * 0.2;
					t1 = grist * 0.2;
					t2 = grist * 0.15;
					t3 = grist * 0.15;
					t4 = grist * 0.15;
					t5 = grist * 0.15;
					t6 = grist * 0.15;
					message.reply('```For killing ' + x + ' titachnids, you have obtained:\nBoon = ' + (boon * 32) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'archeron':
				var x = message.content.substring(10)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < x; i++){
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
					message.reply('```For killing ' + x + ' archerons, you have obtained:\nBoon = ' + (boon * 64) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '\n\nTotal Grist = ' + grist + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'rooks':
				var x = message.content.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					for(var i = 0; i < rooks; i++){
						//50d100
						boon = rookBoon(boon);
						health = rookHealth(health);
					}
					message.reply('```For killing ' + x + ' rooks and/or D.A.s, you have obtained:\nBoon = ' + (boon * 128) + '\nHealth Gel = ' + health + '```');
				}
				else{
					overload(message);
				}
			break;
			case 'multi':
				var highest = 0
				if(message.content.indexOf('t1') != -1){
					imps = message.content.substring(message.content.indexOf('t1') + 2,message.content.indexOf('t1') + 4);
					highest = 1;
					mod = 1;
				}
				if(message.content.indexOf('t2') != -1){
					ogres = message.content.substring(message.content.indexOf('t2') + 2,message.content.indexOf('t2') + 4);
					highest = 2;
					mod = 2;
				}
				if(message.content.indexOf('t3') != -1){
					basilisks = message.content.substring(message.content.indexOf('t3') + 2,message.content.indexOf('t3') + 4);
					highest = 3;
					mod = 4;
				}
				if(message.content.indexOf('t4') != -1){
					liches = message.content.substring(message.content.indexOf('t4') + 2,message.content.indexOf('t4') + 4);
					highest = 4;
					mod = 8;
				}
				if(message.content.indexOf('t5') != -1){
					giclopes = message.content.substring(message.content.indexOf('t5') + 2,message.content.indexOf('t5') + 4);
					highest = 5;
					mod = 16;
				}
				if(message.content.indexOf('t6') != -1){
					titachnids = message.content.substring(message.content.indexOf('t6') + 2,message.content.indexOf('t6') + 4);
					highest = 6;
					mod = 32;
				}
				if(message.content.indexOf('t7') != -1){
					archerons = message.content.substring(message.content.indexOf('t7') + 2,message.content.indexOf('t7') + 4);
					highest = 7;
					mod = 64;
				}
				if(message.content.indexOf('t8') != -1){
					rooks = message.content.substring(message.content.indexOf('t8') + 2,message.content.indexOf('t8') + 4);
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

function adv(luck){
	var altLuck = Math.floor(Math.random() * 10) + 1;
	if(altLuck == 9 || altLuck == 10){
		altLuck = altLuck + Math.floor(Math.random() * 10) + 1;
	}
	if(altLuck > luck){
		return altLuck;
	}
	else{
		return luck;
	}
}
function dis(luck){
	var altLuck = Math.floor(Math.random() * 10) + 1;
	if(altLuck == 9 || altLuck == 10){
		altLuck = altLuck + Math.floor(Math.random() * 10) + 1;
	}
	if(altLuck < luck){
		return altLuck;
	}
	else{
		return luck;
	}
}

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
