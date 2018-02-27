const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with `!`
	if (message.substring(0, 1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1);
		switch(cmd) {
			// !ping
			case 'ping':
				bot.sendMessage({
					to: channelID,
					message: 'Pong!'
				});
			break;
			// !pong
			case 'pong':
				bot.sendMessage({
					to: channelID,
					message: 'Ping!'
				});
			break;
			// !drops
			case 'drops':
				var command = message.substring(7)
				switch(command){
					//![enemy] [#killed]
					case 'imp': case 'ogre': case 'basilisk': case 'lich': case 'giclops': case 'lich': case 'giclops': case 'titachnid': case 'archeron': case 'rook':
						bot.sendMessage({
							to: channelID,
							message: '**```Use this command to get drops from any number of a single type of enemy. Automatically divides grist ' +
							'and applies multipliers.```**\n\n**Format:** `![enemy name] [# killed]`\n\n**examples:**\n`!ogre 45` gets drops from 45 ' +
							'ogres\n`!rook 22` gets drops from 22 rooks.'
						})
					break;
					//!multi t[#] [#killed] t[#] [# killed](Repeat as necessary)
					case 'multi':
						bot.sendMessage({
							to: channelID,
							message: '**```Use this command to get drops from any number of any amount of enemy types. Automatically divides ' +
							'grist and applies multipliers.```**\n```Tier #s\nt1 = imp\nt2 = ogre\nt3 = basilisk\nt4 = lich\nt5 = giclops\nt6 ' +
							'= titachnid\nt7 = archeron\ntx = rook/D.A.```\n\n**Format:** `!multi t[tier #] [#killed] t[tier #] [# killed](Repeat as ' +
							'necessary)`\n\n**examples:**\n`!multi t3 54 tx 3` gets drops from 54 basilisks and 3 rooks\n`!multi t6 20 t2 8` gets drops ' +
							'from 20 titachnids and 8 ogres.'
						})
					break;
					//!custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
					case 'custom':
						bot.sendMessage({
							to: channelID,
							message: '**```Use this command to get drops from any number of any enemy that doesn\'t have a command. ' +
							'Automatically divides grist and applies multipliers according to the tier.```**\n\n**Format:** `!custom [# ' +
							'killed] t[Tier (1-7 (WIP: 8/UNDEFINED: 9))] [# of boon dice]d[dice value] [# of grist dice]d[dice ' +
							'value]`\n\n**examples:**\n`!multi 14 2 200d400 88d94` rolls 200d400 for boon and 88d94 for grist, then multiplies ' +
							'and breaks down as if it were an ogre.'
						})
					break;
					case 'death':
						bot.sendMessage({
							to: channelID,
							message: 'Rolls death saves until a result is determined and informs you of your fate.'
						})
					break;
					//normal
					default:
						bot.sendMessage({
							to: channelID,
							message: '',
							embed: {
  								"color": 3066993,
  								"fields": [{
      									"name": "use `!drops [command]` to get info on a specific command",
      									"value": "```To get drops:```\n`!imp`\n`!ogre`\n`!basilisk`\n`!lich`\n`!giclops`\n`!titachnid`\n`!archer" +
										"on`\n`!rook`\n`!multi`\n`!custom`\n\n```Other:```\n`!death`"
    								}]
							}
						});
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
					bot.sendMessage({
						to: channelID,
						message: 'Congratulations, you survived! Well, barely. You\'re not in the clear yet. But you\'re alive!'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'We at the Committe for Living Peoples regret to inform you that you are no longer allowed to attend our meetings.' +
						'We hope your experiences in the dream bubbles will be compensation enough until your papers have been processed.'
					})
				}
			break;
			case 'imp':
				var x = message.substring(5)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				var grist = 0
				var boon = 0
				var health = 0
				for(var i = 0; i < x; i++){
					grist = grist + Math.floor(Math.random() * 100) + 1;
					boon = boon + Math.floor(Math.random() * 10) + 1;
					for(var c = 0; c < 2; c++){
						health = health + Math.floor(Math.random() * 2) + 1;
					}
				}
				var build = grist * 0.8
				var t1 = grist * 0.2
				bot.sendMessage({
					to: channelID,
					message: '```For killing ' + x + ' imps, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
					'\nT1 = ' + t1.toFixed(0) + '\nHealth Gel = ' + health + '```'
				})
			break;
			case 'ogre':
				var x = message.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				var grist = 0
				var boon = 0
				var health = 0
				for(var i = 0; i < x; i++){
					for(var z = 0; z < 2; z++){
						grist = grist + Math.floor(Math.random() * 100) + 1;
					}
					boon = (boon + Math.floor(Math.random() * 50) + 1);
					for(var c = 0; c < 2; c++){
						health = health + Math.floor(Math.random() * 4) + 1;
					}
					health = health + 1
				}
				var build = (grist * 2) * 0.6
				var t1 = (grist * 2) * 0.3
				var t2 = (grist * 2) * 0.1
				bot.sendMessage({
					to: channelID,
					message: '```For killing ' + x + ' ogres, you have obtained:\nBoon = ' + (boon * 2) + '\nBG = ' + build.toFixed(0) +
					'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nHealth Gel = ' + health + '```'
				})
			break;
			case 'basilisk':
				var x = message.substring(10)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//5d100
						for(var z = 0; z < 5; z++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
						}
						//1d100
						boon = (boon + Math.floor(Math.random() * 100) + 1);
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 6) + 1;
						}
						health = health + 1
					}
					//x4
					//40% T0 30% T1 20% T2 10% T3
					var build = (grist * 4) * 0.4; 
					var t1 = (grist * 4) * 0.3
					var t2 = (grist * 4) * 0.2
					var t3 = (grist * 4) * 0.1
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' basilisks, you have obtained:\nBoon = ' + (boon * 4) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'lich':
				var x = message.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//10d100
						for(var z = 0; z < 10; z++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
						}
						//2d100
						for(var y = 0; y < 2; y++){
							boon = boon + Math.floor(Math.random() * 100) + 1;
						}
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 9) + 1;
						}
					}
					//x8
					//30% T0 20% T1 20% T2 20% T3 10% T4
					var build = (grist * 8) * 0.3
					var t1 = (grist * 8) * 0.2
					var t2 = (grist * 8) * 0.2
					var t3 = (grist * 8) * 0.2
					var t4 = (grist * 8) * 0.1
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' liches, you have obtained:\nBoon = ' + (boon * 8) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'giclops':
				var x = message.substring(9)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//15d100
						for(var z = 0; z < 15; z++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
						}
						//4d100
						for(var y = 0; y < 4; y++){
							boon = boon + Math.floor(Math.random() * 100) + 1;
						}
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 11) + 1;
						}
					}
					//x16
					//25% T0 20% T1 15% T2 15% T3 10% T4 5% T5
					var build = (grist * 16) * 0.25
					var t1 = (grist * 16) * 0.20
					var t2 = (grist * 16) * 0.15
					var t3 = (grist * 16) * 0.15
					var t4 = (grist * 16) * 0.1
					var t5 = (grist * 16) * 0.05
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' giclopes, you have obtained:\nBoon = ' + (boon * 16) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'titachnid':
				var x = message.substring(11)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//25d100
						for(var z = 0; z < 25; z++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
						}
						//10d100
						for(var y = 0; y < 10; y++){
							boon = boon + Math.floor(Math.random() * 100) + 1;
						}
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 13) + 1;
						}
						health = health + 1
					}
					//x32
					//20% T0 20% T1 15% T2 15% T3 15% T4 15% T5 15% T6
					var build = (grist * 32) * 0.2
					var t1 = (grist * 32) * 0.2
					var t2 = (grist * 32) * 0.15
					var t3 = (grist * 32) * 0.15
					var t4 = (grist * 32) * 0.15
					var t5 = (grist * 32) * 0.15
					var t6 = (grist * 32) * 0.15
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' titachnids, you have obtained:\nBoon = ' + (boon * 32) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'archeron':
				var x = message.substring(10)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//40d100
						for(var z = 0; z < 40; z++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
						}
						//20d100
						for(var y = 0; y < 20; y++){
							boon = boon + Math.floor(Math.random() * 100) + 1;
						}
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 16) + 1;
						}
					}
					//x64
					//20% T0 15% T1 15% T2 10% T3 10% T4 10% T5 10% T6 10% T7
					var build = (grist * 64) * 0.2
					var t1 = (grist * 64) * 0.15
					var t2 = (grist * 64) * 0.15
					var t3 = (grist * 64) * 0.1
					var t4 = (grist * 64) * 0.1
					var t5 = (grist * 64) * 0.1
					var t6 = (grist * 64) * 0.1
					var t7 = (grist * 64) * 0.1
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' archerons, you have obtained:\nBoon = ' + (boon * 64) + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'rook':
				var x = message.substring(6)
				if(x == 0 || isNaN(x) == true) {
					x = 1
				}
				if(x < 100){
					var grist = 0
					var boon = 0
					var health = 0
					for(var i = 0; i < x; i++){
						//50d100
						for(var z = 0; z < 50; z++){
							boon = boon + Math.floor(Math.random() * 100) + 1;
						}
						for(var c = 0; c < 2; c++){
							health = health + Math.floor(Math.random() * 18) + 1;
						}
					}
					//x128
					bot.sendMessage({
						to: channelID,
						message: '```For killing ' + x + ' rooks and/or D.A.s, you have obtained:\nBoon = ' + (boon * 128) + '\nHealth Gel = ' + health + '```'
					})
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: 'Try and slow down a bit ~~ya cheeky dickwaffle~~, my code can only handle so much!'
					})
				}
			break;
			case 'multi':
				//ex: !multi t7 99 t6 99 t5 99 t4 99 t3 99 t2 99 t1 99
				//housekeeping
				var grist = 0
				var boon = 0
				var health = 0
				var build = 0
				var t1 = 0
				var t2 = 0
				var t3 = 0
				var t4 = 0
				var t5 = 0
				var t6 = 0
				var t7 = 0
				var t8 = 0
				var t9 = 0
				
				var imps = 0
				var ogres = 0
				var basilisks = 0
				var liches = 0
				var giclopes = 0
				var titachnids = 0
				var archerons = 0
				var rooks = 0
				
				//get numbers
				if(message.indexOf('t1') != -1){
					imps = message.substring(message.indexOf('t1') + 2,message.indexOf('t1') + 4)
					var highest = 1
					var mod = 1
				}
				if(message.indexOf('t2') != -1){
					ogres = message.substring(message.indexOf('t2') + 2,message.indexOf('t2') + 4)
					var highest = 2
					var mod = 2
				}
				if(message.indexOf('t3') != -1){
					basilisks = message.substring(message.indexOf('t3') + 2,message.indexOf('t3') + 4)
					var highest = 3
					var mod = 4
				}
				if(message.indexOf('t4') != -1){
					liches = message.substring(message.indexOf('t4') + 2,message.indexOf('t4') + 4)
					var highest = 4
					var mod = 8
				}
				if(message.indexOf('t5') != -1){
					giclopes = message.substring(message.indexOf('t5') + 2,message.indexOf('t5') + 4)
					var highest = 5
					var mod = 16
				}
				if(message.indexOf('t6') != -1){
					titachnids = message.substring(message.indexOf('t6') + 2,message.indexOf('t6') + 4)
					var highest = 6
					var mod = 32
				}
				if(message.indexOf('t7') != -1){
					archerons = message.substring(message.indexOf('t7') + 2,message.indexOf('t7') + 4)
					var highest = 7
					var mod = 64
				}
				if(message.indexOf('tx') != -1){
					rooks = message.substring(message.indexOf('tx') + 2,message.indexOf('tx') + 4)
					var highest = 8
					var mod = 128
				}
				
				//don't run if there's no input
				if(message.indexOf('tx') == -1 && message.indexOf('t7') == -1 && message.indexOf('t6') == -1 && message.indexOf('t5') == -1 &&
				message.indexOf('t4') == -1 && message.indexOf('t3') == -1 && message.indexOf('t2') == -1 && message.indexOf('t1') == -1){
					bot.sendMessage({
						to: channelID,
						message: 'why don\'t you have input ~~you little shit~~'
					})
				}
				else{
					//imp drops
					if(imps > 0){
						for(var i = 0; i < imps; i++){
							grist = grist + Math.floor(Math.random() * 100) + 1;
							boon = boon + Math.floor(Math.random() * 10) + 1;
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 2) + 1;
							}
						}
						build = build + (grist * 0.8)
						t1 = t1 + (grist * 0.2)
						grist = 0
						
					}
				
					//ogre drops
					if(ogres > 0){
						for(var i = 0; i < ogres; i++){
							for(var z = 0; z < 2; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							boon = (boon + Math.floor(Math.random() * 50) + 1);
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 4) + 1;
							}
							health = health + 1
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
							for(var z = 0; z < 5; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							//1d100
							boon = (boon + Math.floor(Math.random() * 100) + 1);
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 6) + 1;
							}
							health = health + 1
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
							for(var z = 0; z < 10; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							//2d100
							for(var y = 0; y < 2; y++){
								boon = boon + Math.floor(Math.random() * 100) + 1;
							}
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 9) + 1;
							}
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
							for(var z = 0; z < 15; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							//4d100
							for(var y = 0; y < 4; y++){
								boon = boon + Math.floor(Math.random() * 100) + 1;
							}
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 11) + 1;
							}
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
							for(var z = 0; z < 25; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							//10d100
							for(var y = 0; y < 10; y++){
								boon = boon + Math.floor(Math.random() * 100) + 1;
							}
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 13) + 1;
							}
							health = health + 1
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
							for(var z = 0; z < 40; z++){
								grist = grist + Math.floor(Math.random() * 100) + 1;
							}
							//20d100
							for(var y = 0; y < 20; y++){
								boon = boon + Math.floor(Math.random() * 100) + 1;
							}
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 16) + 1;
							}
						}
						build = build + (grist * 0.2)
						t1 = t1 + (grist * 0.15)
						t2 = t2 + (grist * 0.15)
						t3 = t3 + (grist * 0.1)
						t4 = t4 + (grist * 0.1)
						t5 = t5 + (grist * 0.1)
						t6 = t6 + (grist * 0.1)
						t7 = t7 + (grist * 0.1)
					}
					
					//rook drops
					if(rooks > 0){
						for(var i = 0; i < rooks; i++){
							//50d100
							for(var z = 0; z < 50; z++){
								boon = boon + Math.floor(Math.random() * 100) + 1;
							}
							for(var c = 0; c < 2; c++){
								health = health + Math.floor(Math.random() * 18) + 1;
							}
						}
					}
				
					//multiplier!!
					var boon = boon * mod
					var build = build * mod
					var t1 = t1 * mod
					var t2 = t2 * mod
					var t3 = t3 * mod
					var t4 = t4 * mod
					var t5 = t5 * mod
					var t6 = t6 * mod
					var t7 = t7 * mod
				
					//display
					bot.sendMessage({
						to: channelID,
						message: '```for killing whatever you killed, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
							'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
							'\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '```'
					})
				}
			break;
			case 'custom':
				//!custom [# killed] [Tier] [# of boon dice]d[dice value] [# of grist dice]d[dice value]
				//!custom 20 9 100d100 100d100
				var num = message.substring(8,10)
				var tier = message.substring(message.indexOf('t',9) + 1,message.indexOf('t',9) + 2)
				var boonDieVal = message.substring(message.indexOf('d') + 1, message.indexOf(' ',message.indexOf('d')))
				var boonDieNum = message.substring(13,message.indexOf('d'))
				var gristDieVal = message.substring(message.lastIndexOf('d') + 1)
				var gristDieNum = message.substring(message.lastIndexOf(' ') + 1,message.lastIndexOf('d'))
				
				if(num > 40 || tier > 9 || boonDieVal > 100 || boonDieNum > 1000 || gristDieVal > 100 || gristDieNum > 1000){
					bot.sendMessage({
						to: channelID,
						message: 'You need to keep this within reason... The most I will work with is:\n`20 t9 1000d100 1000d100`'
					})
				}
				else if(num == 0 || tier == 0 || boonDieVal == 0 || boonDieNum == 0 || gristDieVal == 0 || gristDieNum == 0){
					bot.sendMessage({
						to: channelID,
						message: 'Please for the love of god fill everything in.'
					})
				}
				else if(tier > 8){
					bot.sendMessage({
						to: channelID,
						message: 'Your tier is undefined. Please wait until my creator has figured this out.'
					})
				}
				else{
					var grist = 0
					var boon = 0
					var t1 = 0
					var t2 = 0
					var t3 = 0
					var t4 = 0
					var t5 = 0
					var t6 = 0
					var t7 = 0
					var t8 = 0
					var t9 = 0
					
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
					
					bot.sendMessage({
						to: channelID,
						message: '```for killing ' + num + ' enemies of tier ' + tier + ', dropping a total of' + boonDieNum + 'd' + boonDieVal + ' ' +
						'boon and ' + gristDieNum + 'd' + gristDieVal + ' grist per enemy, you have obtained:\nBoon = ' + boon + '\nBG = ' + build.toFixed(0) +
						'\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) + '\nT5 = ' +
						t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nT8 = ' + t8.toFixed(0) + '\nT9 = ' + t9.toFixed(0) + '```'
					})
				}
			break;
			default:
				bot.sendMessage({
					to: channelID,
					message: 'Use an actual command ~~ya gosh darned cunt~~'
				})
		}
	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
