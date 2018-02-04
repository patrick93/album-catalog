const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./src/infrastructure/route');
const { collectionController } = require('./src/controllers/collectionController');
const { collectionService } = require('./src/services/collectionService');
const { repository } = require('./src/repository/repository');

const repo = repository({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'albums_collection'
});
const service = collectionService(repo);
const controller = collectionController(service);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));
app.use('/api', router(controller));
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(8080);
console.log('App listening on port 8080');
