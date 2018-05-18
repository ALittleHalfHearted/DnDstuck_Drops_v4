const Discord = require('discord.js');
const client = new Discord.Client();
const UTC = new Date();
var h = (UTC.getHours() - 5 > -1) ? (UTC.getHours() - 5):(UTC.getHours() - 5 + 23);
var month = (UTC.getHours() - 5 > -1 && UTC.getDate() - 1 > 0) ? UTC.getMonth():((UTC.getMonth() - 1 > -1) ? (UTC.getMonth() - 1):11);
var date = (UTC.getHours() - 5 > -1) ? UTC.getDate():((UTC.getDate() - 1 > 0) ? (UTC.getDate() - 1):(((month) == (0|2|4|6|7|9|11)) ? 31:(((month) == (3|5|8|10)) ? 30:(((year/4).isInteger == false) ? 28:29))));
var year = (month == 11 && date == 31 && UTC.getHours() < h) ? (UTC.getFullYear() - 1):UTC.getFullYear();

const ENEMYAC = [5,10,15,20,25,30,35,35];
const UNILET = ['A','B','C','D','E','F'];
const D = new Date(year,month,date,h,UTC.getMinutes(),UTC.getSeconds(),UTC.getMilliseconds());
const EMBED = new Discord.RichEmbed()
	.setTitle("__Commands List__")
	.setDescription("use `%help [command]` to get info on a specific command")
	.setColor(65299) //#00FF13
	.setThumbnail("https://images.fineartamerica.com/images-medium-large/god-does-not-play-dice-with-the-universe-einstein-arley-blankenship.jpg")
	.addField("Enemy Drops", "`%imp`\n`%ogre`\n`%basilisk`\n`%lich`\n`%giclops`\n`%titachnid`\n`%archeron`\n`%rook`\n`%multi`\n`%custom`", true)
	.addField("Other Commands", "`%death`\n`%d10`\t`%d20`\n`%percent`\n`%tohit`\n`%damage`\n`%ping`\t`%pong`\n`%stupid`\t`%pointless`",true);


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log('Online at\n-----' + D.toString().replace('UTC','CDT').replace('+0000','-0500') + '\n-----' + UTC);
	client.user.setActivity('type %help for commands');
});


/*client.on('guildCreate', guild => {
	guild.createRole({
		name:  'BBS',
		color: '#2ECC71',
	});
	const self = guild.member(client.user);
	console.log('Joined guild ' + guild.name + ' as ' + self);
});

client.on('roleCreate', role => {
	console.log('New role: ' + role + '\n' + role.name);
	if(role.name == 'BBS'){
		self.addRole(role).catch(console.error);
	}
})*/


client.on('message', message => {
	message.content = message.content.toLowerCase()
	if (message.content.substring(0,1) === '%' && message.author.bot == false) {
		var args = message.content.substring(1).split(' ');
		var cmd = args[0];
		args = args.splice(1).toString().replace(/,/g,' ');
		
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
		var multi = {num1: 0, num2: 0, num3: 0, num4: 0, num5: 0, num6: 0, num7: 0, num8: 0};
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
				message.channel.send(EMBED);
			break;
			case 'help':
				//FORMAT: message.channel.send('**```description```**\n\n**Format:** `%cmd (args)`\n\n**Examples:**\n`%cmd (args)` what it does');
				//COPY: message.channel.send('**``` ```**\n\n**Format:** `%`');
				switch(args){
					//%[enemy] [#killed]
					case 'imp': case 'imps': case 'ogre': case 'ogres': case 'basilisk': case 'basilisks': case 'lich': case 'liches': case 'giclops': case 'giclopes': case 'titachnid': case 'titachnids': case 'archeron': case 'archerons': case 'rook': case 'rooks':
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
					case 'drops':
						message.channel.send('**```Use this command to get the formula for any enemy type. (WIP)```**\n\n**Format:** `%drops [enemy]`');
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
					case 'stupid': case 'pointless':
						message.channel.send('**```Randomly generates a random amount of random unicode symbols. Random!```**');
					break;
					//normal
					default:
						message.channel.send('use `%help [command]` to get info on a specific command\n`(You can also use %embed to get this list as an embed!)`\n\n```Enemy Drops:```\n`%imp`\n`%ogre`\n`%basilisk`\n`%lich`\n`%giclops`\n`%titachnid`\n`%archeron`\n`%rook`\n`%multi`\n`%custom`\n`%drops`\n\n```Other:```\n`%death`\n`%d10`\t`%d20`\n`%percent`\n`%tohit`\n`%damage`\n`%ping`\t`%pong`\n`%stupid`\t`%pointless`');
				}
			break;
			case 'drops':
				switch(args){
					//case 'imp': case 'imps':
						
					//break;
					default:
						message.channel.send('The correct usage is: `%drops [enemy]`. Please select an enemy type as follows:\n\n```imp\nogre\nbasilisk\nlich\ngiclops\ntitachnid\narcheron\nrook\n\nmulti```');
				}
			break;
			case 'stupid': case 'pointless':
				var mlem = ['',''];
				var blep = Math.floor(Math.random() * 100) + 1;
				for(var i = 0;i < blep;i++){
					let meh = '';
					var nah = Math.floor(Math.random() * 2) + 4;
					for(var x = 0;x < nah;x++){
						var letnum = Math.floor(Math.random() * 2);
						if(letnum == 1){
							let letter = Math.floor(Math.random() * 5);
							meh = meh + UNILET[letter];
						}
						else{
							meh = meh.toString() + Math.floor(Math.random() * 10);
						}
					}
					console.log('\\u' + meh);
					mlem[i] = String.fromCharCode(meh);
				}
				message.channel.send(mlem.toString().replace(/,/g,''));
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
					ac = ENEMYAC[args.substring(args.indexOf('e') + 1,args.indexOf('e') + 2) - 1];
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
			case 'imp': case 'imps':
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
			case 'ogre': case 'ogres':
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
			case 'basilisk': case 'basilisks':
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
			case 'lich': case 'liches':
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
			case 'giclops': case 'giclopes':
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
			case 'titachnid': case 'titachnids':
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
			case 'archeron': case 'archerons':
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
			case 'rook': case 'rooks':
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
				if(args.indexOf('t') == -1){
					message.reply('Sorry, no input found! Please try again.');
				}
				else{
					//NEW FORMAT: 54t3 or 54 t3, separate with commas
					args = args.replace(/ /g,',');
					args = args.split(',');
					for(var i = 0; i < args.length; i++){
						console.log(args.toString())
						grist = 0
						if(args[i].indexOf('t1') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t1') == 0){
								multi.num1 += num = 1;
							}
							else{
								multi.num1 += num = args[i].slice(0,args[i].indexOf('t1'));
							}
							for(var x = 0; x < num; x++){
								grist = impGrist(grist);
								boon = impBoon(boon);
								health = impHealth(health);
							}
							build += grist * 0.8;
							t1 += grist * 0.2;
						}
						if(args[i].indexOf('t2') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t2') == 0){
								multi.num2 += num = 1;
							}
							else{
								multi.num2 += num = args[i].slice(0,args[i].indexOf('t2'));
							}
							for(var x = 0; x < num; x++){
								grist = ogreGrist(grist);
								boon = ogreBoon(boon);
								health = ogreHealth(health);
							}
							build += grist * 0.6;
							t1 += grist * 0.3;
							t2 += grist * 0.1;
						}
						if(args[i].indexOf('t3') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t3') == 0){
								multi.num3 += num = 1;
							}
							else{
								multi.num3 += num = args[i].slice(0,args[i].indexOf('t3'));
							}
							for(var x = 0; x < num; x++){
								grist = basiliskGrist(grist);
								boon = basiliskBoon(boon);
								health = basiliskHealth(health);
							}
							build += grist * 0.4; 
							t1 += grist * 0.3;
							t2 += grist * 0.2;
							t3 += grist * 0.1;
						}
						if(args[i].indexOf('t4') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t4') == 0){
								multi.num4 += num = 1;
							}
							else{
								multi.num4 += num = args[i].slice(0,args[i].indexOf('t4'));
							}
							for(var x = 0; x < num; x++){
								grist = lichGrist(grist);
								boon = lichBoon(boon);
								health = lichHealth(health);
							}
							build += grist * 0.3;
							t1 += grist * 0.2;
							t2 += grist * 0.2;
							t3 += grist * 0.2;
							t4 += grist * 0.1;
						}
						if(args[i].indexOf('t5') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t5') == 0){
								multi.num5 += num = 1;
							}
							else{
								multi.num5 += num = args[i].slice(0,args[i].indexOf('t5'));
							}
							for(var x = 0; x < num; x++){
								grist = giclopsGrist(grist);
								boon = giclopsBoon(boon);
								health = giclopsHealth(health);
							}
							build += grist * 0.25;
							t1 += grist * 0.20;
							t2 += grist * 0.15;
							t3 += grist * 0.15;
							t4 += grist * 0.1;
							t5 += grist * 0.05;
						}
						if(args[i].indexOf('t6') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t6') == 0){
								multi.num6 += num = 1;
							}
							else{
								multi.num6 += num = args[i].slice(0,args[i].indexOf('t6'));
							}
							for(var x = 0; x < num; x++){
								grist = titachnidGrist(grist);
								boon = titachnidBoon(boon);
								health = titachnidHealth(health);
							}
							build += grist * 0.2;
							t1 += grist * 0.15;
							t2 += grist * 0.15;
							t3 += grist * 0.15;
							t4 += grist * 0.15;
							t5 += grist * 0.1;
							t6 += grist * 0.1;
						}
						if(args[i].indexOf('t7') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t7') == 0){
								multi.num7 += num = 1;
							}
							else{
								multi.num7 += num = args[i].slice(0,args[i].indexOf('t7'));
							}
							for(var x = 0; x < num; x++){
								grist = archeronGrist(grist);
								boon = archeronBoon(boon);
								health = archeronHealth(health);
							}
							build += grist * 0.2
							t1 += grist * 0.15
							t2 += grist * 0.15
							t3 += grist * 0.1
							t4 += grist * 0.1
							t5 += grist * 0.1
							t6 += grist * 0.1
							t7 += grist * 0.1
						}
						if(args[i].indexOf('t8') > -1){
							if(mod <= 1){
								mod = 1;
							}
							if(args[i].indexOf('t8') == 0){
								multi.num8 += num = 1;
							}
							else{
								multi.num8 += num = args[i].slice(0,args[i].indexOf('t8'));
							}
							for(var x = 0; x < num; x++){
								boon = rookBoon(boon);
								health = rookHealth(health);
							}
						}
					}
					
					//multiplier!!
					boon *= mod
					build *= mod
					t1 *= mod
					t2 *= mod
					t3 *= mod
					t4 *= mod
					t5 *= mod
					t6 *= mod
					t7 *= mod
				
					//display
					message.reply(`\`\`\`for killing ${multi.num1} imps, ${multi.num2} ogres, ${multi.num3} basilisks, ${multi.num4} liches, ${multi.num5} giclopes, ${multi.num6} titachnids, ${multi.num7} archerons, and ${multi.num8} rooks, you have obtained:\nBoon = ` + boon + '\nBG = ' + build.toFixed(0) +
						      '\nT1 = ' + t1.toFixed(0) + '\nT2 = ' + t2.toFixed(0) + '\nT3 = ' + t3.toFixed(0) + '\nT4 = ' + t4.toFixed(0) +
						      '\nT5 = ' + t5.toFixed(0) + '\nT6 = ' + t6.toFixed(0) + '\nT7 = ' + t7.toFixed(0) + '\nHealth Gel = ' + health + '```');
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


client.login(process.env.BOT_TOKEN);
