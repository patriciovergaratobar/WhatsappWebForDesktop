# WhatsappWebForDesktop
Whatsapp Web for desktop developed with ElectronJS

To build this application, you must have the following in the development environment:
- NodeJS > 7.0v

## Build the application

To build this application

```sh

$ cd WhatsappWebForDesktop

$ npm install

#Instalar Electron
$ npm install electron-packager --save-dev

$ npm install electron-packager -g

$ npm install --save-dev electron

# In Linux x64
$ electron-packager . --overwrite --asar=true --platform=linux --arch=x64

# In Linux ia32
$ electron-packager . --overwrite --asar=true --platform=linux --arch=ia32

# In Windows ia32 or x64
$ electron-packager . --overwrite --asar=true --platform=win32 --arch=<ia32 | x64 | all>

# In OSX 
$ electron-packager . --overwrite --asar=true --platform=darwin --arch=<ia32 | x64 | all>

# For all platforms
$ electron-packager . --overwrite --asar=true --platform=all --arch=all

# If you want to leave code in binary (asar=false)
$ electron-packager . --overwrite --asar=false --platform=all --arch=all

```
The reference for build of the application in  [electron-packager](https://github.com/electron-userland/electron-packager).
