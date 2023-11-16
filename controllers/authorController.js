const Author = require("../models/author");
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

// List all authors
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find({}).sort({ family_name: 1 }).exec();

  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// Display details for specific author
exports.author_detail = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});

// Display Author create form on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("NYI: Author create GET");
});

// Handle Author create on POST
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Author create POST");
});

// Display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NYI Author delete GET");
});

// Handle Author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Author delete POST");
});

// Display Author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NYI: Author update GET");
});

// Handle Author update on POST
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Author update POST");
});
