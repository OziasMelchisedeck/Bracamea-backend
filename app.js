const express = require('express');
const mongoose  = require('mongoose');
require("dotenv").config();
const Article = require('../bracamea-backend/models/articles.model');
const articleRouter = require('./routers/articles.router');
const path = require('path');
const dataPath = path.join(__dirname, 'data.json'); // si data.json est dans le même dossier que app.js
const data = require(dataPath);


const app = express();
app.use(express.json())


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  //connexion a la base de données en ligne

mongoose.connect(process.env.MONGO_URI)
  .then(() =>{ 
    console.log("MongoDB connecté ✔️");
        //  Article.deleteMany().then().catch()
    })
  .catch(err => console.error("Erreur MongoDB ❌", err));


// Autoriser le dossier public
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/articles', articleRouter);

  module.exports = app;