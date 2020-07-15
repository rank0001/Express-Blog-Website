const express = require("express");

const router = express.Router();

const Article = require("./../model/article");

const articleController = require("./../controller/articles");

//for getting a new article
router.get("/new", articleController.getNewArticle);

//for posting an article
router.post("/", articleController.postNewArticle);

//for showing an article
router.get("/:slug", articleController.getArticle);

//for editing an article
router.get("/edit/:slug", articleController.getEditArticle);

//for updating an article
router.put("/:id", articleController.putArticle);

//for deleting an article
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
