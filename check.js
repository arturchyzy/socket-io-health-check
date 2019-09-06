const io = require('socket.io-client');
const yargs = require('yargs');

const argv = yargs
  .option('url', {
    alias: 'u',
    description: 'Url to connect to',
    type: 'string',
    required: true,
  })
  .help()
  .alias('help', 'h')
  .argv;

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



