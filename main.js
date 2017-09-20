"use strict";

const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const pkg = require('./package.json');

let win;

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname, {
    electron: require(path.normalize(path.join(__dirname, './node_modules/electron')))
  });
}

const width = 1440;
const height = 900;

// Tope level menu
const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'undo'},
      {role: 'redo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

function createWindow() {

  // const { screen } = require('electron');
  // const size = screen.getPrimaryDisplay().workAreaSize;

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  const iconSrc = 'icons/logo';

  const iconExtension = () => {

    const plat = process.platform;
    let extension = '.png';

    if (plat === 'darwin') {
      extension = '.icns';
    } else if (plat === 'win32') {
      extension = '.ico';
    }
    return extension;
  }

  // Create the browser window.
  const options = {
    width,
    height,
    title: pkg.name,
    icon: path.join(__dirname, iconSrc + iconExtension())
  };

  // Initialize the window to our specified dimensions
  win = new BrowserWindow(options);

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    // and load the index.html of the app.
    win.loadURL('file://' + __dirname + '/index.html');
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
