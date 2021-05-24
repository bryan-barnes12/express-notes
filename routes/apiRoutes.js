const express = require('express');
const notes = require('../db/db.json');
const uniqid = require('uniqid');
const path = require('path');

module.exports = (app) => {
  app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

  app.post('/api/notes', (req, res) => {
      req.body.id = uniqid();
      notes.push(req.body);
      res.json(notes);
  });

  app.delete('/api/notes/:note', (req, res) => {
    const chosen = req.params.note;
    const tempNotes = notes.filter(element => element.id !== chosen);
    notes.length = 0;
    for (let i = 0; i < tempNotes.length; i++) {
      notes.push(tempNotes[i]);
    }

    console.log(`Note id ${chosen} has been deleted.`);
    return res.json(false);
  });
};

