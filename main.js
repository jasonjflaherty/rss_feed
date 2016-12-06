const electron = require('electron')
const {app, BrowserWindow} = electron
var theWindow = null;

//Quit when all the windows are closed.
app.on('window-all-closed', function(){
	if(process.platform !='darwin'){
		app.quit();
	}
});
app.on('ready', function(){
	//Create browser window.
	theWindow = new BrowserWindow({ width:800, height:600});
	//Load index.html
	theWindow.loadURL('file://' +__dirname + '/index.html');
theWindow.openDevTools() //Opens dev tools
	theWindow.on('closed', function(){
		aWindow = null;
	});
});
