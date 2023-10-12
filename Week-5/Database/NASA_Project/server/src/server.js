const http = require('http');
const {mongoConnect} = require('./services/mongo');
const app = require('./app');

const {loadPlanetData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const server=http.createServer(app)


async function startsServer() {
     await mongoConnect()
     await loadPlanetData();
     
     server.listen(PORT,() => {
          console.log('listening on '+PORT);
     });
}

startsServer();

