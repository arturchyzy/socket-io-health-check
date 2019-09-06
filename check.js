const io = require('socket.io-client');


const argv = require('minimist')(process.argv.slice(2), {string: 'url', alias: {u: 'url'}});

console.log(`Checking connection using url ${argv.url}`);
const socket = io(`${argv.url}/chat`, { forceNew: true });

socket.on('connect', () => {
  console.log('Connection successful');
  socket.close();
  process.exit(0);
});

setTimeout(() => {
  console.log('Timeout. No connection to server');
  process.exit(1);
}, 5000);



