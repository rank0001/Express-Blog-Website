const express = require("express");

const app = express();

const articleRouter = require("./routes/articles");

const indexRouter = require("./routes/index");

const aboutRouter = require("./routes/about");

const contactRouter = require("./routes/contact");

const path = require("path");

const mongoose = require("mongoose");

const methodOverride = require("method-override");

//database connection

mongoose.connect("mongodb://localhost/Blog", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

//index page
app.use("/", indexRouter);

//articles route
app.use("/articles", articleRouter);

//about page
app.use("/about", aboutRouter);

//contact page

app.use("/contact", contactRouter);

app.listen(5000);
