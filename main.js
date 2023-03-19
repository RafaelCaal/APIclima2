const {app, BrowserWindow} = require('electron');

let ventana;

function createWindow(){
    ventana = new BrowserWindow({
        width: 500,
        height: 600
    });
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)