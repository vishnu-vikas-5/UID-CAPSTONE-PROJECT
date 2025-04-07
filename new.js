const { app, BrowserWindow } = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('index.html');
}
app.whenReady().then(createWindow);

var toggleitm=document.querySelector(".navbar-toggle-itm");
function menu(){
    toggleitm.style.left="0";
}
function menuclose(){
    toggleitm.style.left="-60%";
}