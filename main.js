const electron = require('electron');
const { app, BrowserWindow } = electron;

let windowApp;

app.on('ready', () => {

    //This is the configurations of the window of the application.
    windowApp = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#ededed',
        devTools: false,
        contextIsolation: false,
        autoHideMenuBar: true,
        fullscreen: false,
        webPreferences: {
            defaultFontSize: 12,
            defaultMonospaceFontSize: 13,
            zoomFactor: 0.98
        }
    });

    windowApp.setTitle('WhatsApp');
    //Here indicated the url of the web site.
    windowApp.loadURL('https://web.whatsapp.com/');

    windowApp.on('closed', () => {
        windowApp = null;
    });
});