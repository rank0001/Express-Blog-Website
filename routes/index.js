const express = require("express");

const router = express.Router();

const Article = require("./../model/article");

const indexController = require("./../controller/index");

router.get("/", indexController.getIndex);

module.exports = router;
