const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
	mainWindow = new BrowserWindow({
	  width: 1200,
	  height: 800,
	  webPreferences: {
		  nodeIntegration: true
	  }
	})
	
	mainWindow.loadFile('./index.html')
	
	mainWindow.on('closed', function () {
	  // Dereference the window object, usually you would store windows
	  // in an array if your app supports multi windows, this is the time
	  // when you should delete the corresponding element.
	  mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})