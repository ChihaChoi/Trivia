# Real Time Trivia App

This trivia game uses React for the front-end and node.js for the server. Using Socket.io, all the devices connected to the server see the same questions and answers in real time and can compete against eachother using the real time score tracker.

## Installation:
*installation requires node.js to be installed

#### Server:
```
cd server
npm install
```

#### Client:
```
cd client
npm install
```

## To run:
#### Server:
```
node triviaServer.js
```
#### Client
in a separate console:
```
npm start
```

## Running the app on your local network
If you want to run the server on your local network rather than just your PC, then you will need to change your the ipv4Address variable (in line 6 of client/src/socket.js) to a string variable equal to your IPv4 Address.
e.g.
```javascript
var ipv4Address = '10.226.211.208'
```
to find this, simply run 'ipconfig' in your terminal.

Doing this means that you can test this app using your phone provided they are on the same network.

To connect to the client using your mobile device, type your IPv4 Address into your address bar followed by ':3000' (unless your default react port is different for whatever reason)
