# Angular 4+ Electron Starter

Build desktop apps using Angular4+ and Electron.

On the top off: 

 - Angular 4+ 
 - Electron 1.7.5+
 - REDUX - NgRx 4.x +
 - Semantic UI
 
Base repository: https://github.com/AngularClass/angular-starter

## Development

```bash
# angular 
# http://localhost:3000
npm run start

# electron
npm run electron:dev
```

### Test production build

```bash
npm run electron:prod
```

### Package

```bash
# linux
npm run electron:linux

#windows
npm run electron:windows

#mac
npm run electron:mac
```

### ToDo

- Implement Windows installer
- Implements MacOS signing ( https://github.com/electron-userland/electron-osx-sign/wiki/1.-Getting-Started )

### HowTo

- Add custom NodeJS library?

Create reference to it in: ./config/webpack.common.js ( line 395 )

### API

 - https://electron.atom.io/docs/api/