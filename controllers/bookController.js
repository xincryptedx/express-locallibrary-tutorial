const Book = require("../models/book");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("NYI: Site Home Page");
});

// Display list of all books.
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book list");
});

// Display detail page for a specific book.
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NYI: Book detail: ${req.params.id}`);
});

// Display book create form on GET.
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book create GET");
});

// Handle book create on POST.
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book create POST");
});

// Display book delete form on GET.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book delete GET");
});

// Handle book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book delete POST");
});

// Display book update form on GET.
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book update GET");
});

// Handle book update on POST.
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send("NYI: Book update POST");
});
