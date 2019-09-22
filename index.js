const os = require('os');

let blue, red, green, LColor;

const info = (color, lable, contents) => {
	switch (color) {
		case blue:
			blue = '\x1b[34m';
			LColor = blue;
			break;
		case red:
			red = '\x1b[31m';
			LColor = red;
			break;
		case green:
			green = '\x1b[32m';
			LColor = green;
			break;
		default:
	}

	console.log(LColor + lable + '\x1b[0m' + '\x1b[4m' + contents + '\x1b[0m');
}

console.clear();
console.log(`${os.userInfo().username}@${os.hostname()}`);

//User Over View
console.log('-------------------');
info(blue, 'Home Directory: ', os.userInfo().homedir);
info(blue, 'Shell: ', os.userInfo().shell);
info(blue, 'Uptime: ', os.uptime());
info(blue, 'Load Average: ', os.loadavg());
console.log('-------------------');

//Computer Over View
info(red, 'Platform: ', os.platform() + ' ' + os.release());
info(red, 'CPU: ', os.cpus()[0].model);
info(red, 'Memory: ', os.totalmem());
info(red, 'Free System Memory: ', os.freemem());
console.log();

//Network Over View
info(green, 'Address: ', os.networkInterfaces().wlp2s0[0].address);
info(green, 'Mac Address: ', os.networkInterfaces().wlp2s0[1].mac);
