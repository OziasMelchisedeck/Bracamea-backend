const Article = require('../models/articles.model');


exports.getAllArticles = (req, res, next) =>{
    Article.find()
    .then((Article) => {
        const articleCount = Article.length;
        res.status(200).json({Article: Article, count:articleCount})})
    .catch(error => res.status(400).json({ error:error}));
};