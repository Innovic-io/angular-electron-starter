const electronInstaller = require('electron-winstaller');

const path = require('path');
const os = require('os');

if (os.platform() !== 'win32') {
  throw Error('You are not on windows machine!');
}

const description = 'Angular desktop application.';

const title = 'Angular Admin';
const name = 'angularapp';
const authors = 'angularapp.com';
const exe = 'AngularApp.exe';
const iconUrl = 'icons/logo.ico';
const loadingGid = 'icons/loading.gif';

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './app-builds/app-win32-ia32',
  outputDirectory: './app-builds/installer64',
  description: description,
  title: title,
  name: name,
  authors: authors,
  exe: exe,
  noMsi: true,
  iconUrl: path.normalize(path.join(__dirname, iconUrl)),
  loadingGif: path.normalize(path.join(__dirname, loadingGid)),
  setupIcon: path.normalize(path.join(__dirname, iconUrl))
});

resultPromise
  .then(
    () => console.log("It worked!"),
    (e) => {
      console.log(e);
      console.log(`No dice: ${e.message}`)
    });

