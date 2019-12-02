const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
	win = new BrowserWindow({ width: 300, height: 625, frame: false, webPreferences: { nodeIntegration: true } });

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'app.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', () => {
		win = null;
		app.quit();
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});