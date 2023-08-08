const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const server=http.createServer(app)

async function startsServer() {    
     console.log('Starting server');
     server.listen(PORT,() => {
          console.log('listening on '+PORT);
          console.log();
     });
}

startsServer();

