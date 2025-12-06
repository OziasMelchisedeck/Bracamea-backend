const express = require('express');
const router = express.Router();
const articlesCtrl = require('../controllers/articles.controller');

router.get('/', articlesCtrl.getAllArticles);

module.exports = router;