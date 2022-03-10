const db = require('./db')
const Boba = db.Boba;
const path = require('path');
const express = require("express");
const app = express();

app.use('/dist', express.static(path.join(__dirname,'dist')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'index.html')));

app.post('/api/bobas', async (req,res,next) => {
    try{
        res.status(201).send(await Boba.generateRandom());
    }
    catch(e){
        next(e)
    }
});

app.get("/api/bobas", async (req, res, next) => {
  try {
    res.send(await Boba.findAll());
  } catch (e) {
    next(e);
  }
});


// curl localhost:3000/api/bobas -X POST (not working);

module.exports = app;