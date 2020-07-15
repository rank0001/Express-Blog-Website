const Article = require("./../model/article");

//for getting the list of articles created
exports.getIndex = async (req, res, next) => {
	const articles = await Article.find().sort({
		createdAt: "desc",
	});

	res.render("articles/index", { articles: articles });
};
