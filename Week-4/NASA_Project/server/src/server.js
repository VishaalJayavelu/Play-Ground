const http = require('http');
const app = require('./app');

const {loadPlanetData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const server=http.createServer(app)

async function startsServer() {
     await loadPlanetData();
     
     server.listen(PORT,() => {
          console.log('listening on '+PORT);
     });
}

startsServer();

