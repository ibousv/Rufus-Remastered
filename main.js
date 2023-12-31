/*=========Interface=========*/
const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Creation de la fenêtre --objet
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // charger un fichier html
  win.loadFile('index.html');


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
