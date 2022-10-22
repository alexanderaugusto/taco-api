const express = require('express');
const { join } = require('path');
const cors = require('cors');

const categoryRoutes = require('../routes/category');
const foodRoutes = require('../routes/food');
const documentationRoutes = require('../routes/documentation');

module.exports = function app() {
  const expressApp = express();

  expressApp.use(cors());
  expressApp.use(express.static(join(__dirname, '../../docs/')));
  categoryRoutes(expressApp);
  foodRoutes(expressApp);
  documentationRoutes(expressApp);

  return expressApp;
};
