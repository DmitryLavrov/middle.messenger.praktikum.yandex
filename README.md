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
#### Sprint 1

```shell
## create the file '.nvmrc'
$ node -v > .nvmrc

## client dependencies
$ npm i -D parcel
$ npm i handlebars
$ npm i -D sass ## optional (parcel includes sass out of the box)  

## server dependencies
$ npm i express
```

#### Sprint 2
```shell
npm i -D typescript
npm i -D eslint
npm i -D eslint-config-airbnb
npm i -D @typescript-eslint/parser
npm i -D @typescript-eslint/eslint-plugin
npm i -D stylelint
npm i -D stylelint-config-standard
npm i -D stylelint-config-standard-scss
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

## Eslint check
$ npm run eslint

## Eslint fix
$ npm run eslint-fix

## Stylelint check
$ npm run stylelint

## Stylelint fix
$ npm run stylelint-fix
```

## Deployment
https://dmi-chat.netlify.app/
