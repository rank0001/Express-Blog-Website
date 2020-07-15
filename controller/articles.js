const Article = require("./../model/article");

//for handling a new article

exports.getNewArticle = (req, res, next) => {
	res.render("articles/newArticle", { article: new Article() });
};

//for editing an article
exports.getEditArticle = async (req, res) => {
	const article = await Article.findOne({ slug: req.params.slug });
	if (article == null) {
		console.log("nukk");
		res.redirect("/");
	}
	res.render("articles/editArticle", { article: article });
};

//for deleting an article

exports.deleteArticle = async (req, res) => {
	await Article.findByIdAndDelete(req.params.id);
	res.redirect("/");
};

//for showing the article which was requested

exports.getArticle = async (req, res, next) => {
	const article = await Article.findOne({ slug: req.params.slug });
	if (article == null) {
		res.redirect("/");
	}
	res.render("articles/showArticle", { article: article });
};

//for handling the edit button

exports.putArticle = async (req, res, next) => {
	let article = await Article.findById(req.params.id);
	article.title = req.body.title;
	article.description = req.body.description;
	article.markdown = req.body.markdown;
	try {
		article = await article.save();
		res.redirect(`/articles/${article.slug}`);
	} catch (e) {
		console.log(e);
		res.render(`articles/editArticle`, { articles: article });
	}
};

//for submitting an article

exports.postNewArticle = async (req, res, next) => {
	let article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown,
	});
	try {
		article = await article.save();
		res.redirect(`/articles/${article.slug}`);
	} catch (e) {
		console.log(e);
		res.render(`articles/newArticle`, { articles: article });
	}
};
