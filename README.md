# Real Time Trivia App

This trivia game uses React for the front-end and node.js for the server. Using Socket.io, all the devices connected to the server see the same questions and answers in real time and can compete against each other using the real time score tracker.

## Installation:
*installation requires node.js to be installed


From the terminal, cd into the directory then type the following commands:
#### Server:
```
cd server
npm install
```
In another
#### Client:
```
cd client
npm install
```

## To run:
#### Server:
In a terminal, navigate to the server terminal and enter the command: 
```
node triviaServer.js
```
#### Client
in a separate terminal, navigate to the client folder and enter the command:
```
npm start
```

## Running the app on your local network
If you want to run the server on your local network rather than just your PC, then you will need to change your the ipv4Address variable (in line 6 of client/src/socket.js) to a string variable equal to your IPv4 Address.
e.g.
```javascript
var ipv4Address = '10.226.211.208'
```
to find your IPv4 address, simply run 'ipconfig' in your terminal.

Doing this means that you can test this app using your phone provided they are on the same network.

To connect to the client using your mobile device, type your IPv4 Address into your address bar followed by ':3000' (unless your default react port is different)


## To Do
### General
  * Compress avatar before uploading
  * only one person can login to the same name at once (currently multiple users can log onto the same name to contribute score)
  * add timer to waiting screen
  * fix timers
  * ~~add category name to question page~~
  * pull max number (50) of questions from api and store in server rather than once every question

### Styling
  * score screen
  * results screen
  * buttons on question page
  * transition animations
  * timer animation

### Optional Features
  * player connection status on score screen
  * vote on next category