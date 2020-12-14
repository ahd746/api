const Article = require('../models/article');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);

    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const user = await User.findById(req.user._id);

    const newArticle = await Article.create({
      author: user.name,
      title,
      body
    });

    res.status(200).json({ message: "Article was created successfully", article: newArticle });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, title, body, date } = req.body;
    const updatedArticle = await Article.findOneAndUpdate({ _id }, {
      title,
      body,
      date: new Date(date)
    });

    res.status(200).json({ message: "Article was updated successfully", article: updatedArticle });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    await Article.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({ message: "Article was deleted successfully" });
  } catch (error) {
    next(error);
  }
};