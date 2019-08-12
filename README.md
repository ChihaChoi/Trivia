# Real Time Trivia App

This trivia game uses React for the front-end and node.js for the server. Using Socket.io, all the devices connected to the server see the same questions and answers in real time and can compete against each other using the real time score tracker.

[The latest stable version is hosted here on heroku.](https://chiviha.herokuapp.com/ "live heroku app")
Due to heroku's free hosting, the server may take a few seconds to load up after being inactive for 30 minutes.

Otherwise, you can choose to deploy the latest commit on your own local server:

## Installation:

\*installation requires node.js to be installed

From the terminal, navigate into the directory then type the following commands:

```
npm install
npm run build
```

## To run:

To initiate the server, run the following command from your console:

```
npm start
```

You can open the app by entering your IPv4 address into your browser followed by ":3000" e.g.

```
192.168.0.1:3000
```

To find your IPv4 address, type into your console 'ipconfig'

## To Do

### General

- Compress avatar before uploading
- only one person can login to the same name at once (currently multiple users can log onto the same name to contribute score)
- ~~add timer to waiting screen~~
- ~~fix timers~~
- ~~add category name to question page~~
- pull max number (50) of questions from api and store in server rather than once every question

### Styling

- score screen
- ~~results screen~~
- ~~buttons on question page~~
- transition animations
- ~~timer animation~~

### Optional Features

- player connection status on score screen
- vote on next category
