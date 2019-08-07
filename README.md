# Real Time Trivia App

This trivia game uses React for the front-end and node.js for the server. Using Socket.io, all the devices connected to the server see the same questions and answers in real time and can compete against each other using the real time score tracker.

## Installation:
*installation requires node.js to be installed

From the terminal, cd into the directory then type the following commands:
```
npm install
npm run build
```

## To run:

```
npm start
```

Then connect to the app by entering into your address bar your IPv4 address followed by ":3000" e.g.

```
192.168.0.1:3000
```

To find your IPv4 address, type into your console 'ipconfig'



## To Do
### General
  * Compress avatar before uploading
  * only one person can login to the same name at once (currently multiple users can log onto the same name to contribute score)
  * ~~add timer to waiting screen~~
  * ~~fix timers~~
  * ~~add category name to question page~~
  * pull max number (50) of questions from api and store in server rather than once every question

### Styling
  * score screen
  * ~~results screen~~
  * ~~buttons on question page~~
  * transition animations
  * ~~timer animation~~

### Optional Features
  * player connection status on score screen
  * vote on next category