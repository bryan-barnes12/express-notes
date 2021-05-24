const express = require('express');
const path = require('path');

module.exports = (app) => {
  const router = express.Router();

  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.use(router);
};
