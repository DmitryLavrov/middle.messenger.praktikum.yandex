## Getting Started
Additional information about installing and configuring the project

### Prerequisites

```shell
nvm install lts
nvm use lts
npm i npm@latest -g
npm init -y
```

### Installation

```shell
## create the file '.nvmrc'
$ node -v > .nvmrc

## client dependencies
$ npm i -D parcel
$ npm i -D handlebars
$ npm i -D sass ## optional (parcel includes sass out of the box)  

## server dependencies
$ npm i -D express
```

## Design
Prototype in Figma   
https://www.figma.com/file/gWjpaJYGdjWYTCyyI6QFps/Y-chat?node-id=0%3A1

## Useful commands

```shell
## Run in development mode
$ npm run dev

## Build project in folder 'dist'
$ npm run build

## Run in enterprise mode
$ npm run start

## Remove temporary folders
$ npm run clear
```

## Deployment
https://dmi-chat.netlify.app/
