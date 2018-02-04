const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./src/infrastructure/route');
const { collectionController } = require('./src/controllers/collectionController');
const { collectionService } = require('./src/services/collectionService');
const { collectionRepository } = require('./src/repository/collectionRepository');
const { albumController } = require('./src/controllers/albumController');
const { albumService } = require('./src/services/albumService');
const { albumRepository } = require('./src/repository/albumRepository');

const connectionInfo = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'albums_collection'
};

const _collectionRepository = collectionRepository(connectionInfo);
const _collectionService = collectionService(_collectionRepository);
const _collectionController = collectionController(_collectionService);

const _albumRepository = albumRepository(connectionInfo);
const _albumService = albumService(_albumRepository);
const _albumController = albumController(_albumService);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));
app.use('/api', router(_collectionController, _albumController));
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(8080);
console.log('App listening on port 8080');
