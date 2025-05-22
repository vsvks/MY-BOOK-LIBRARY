"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_service_1 = require("../services/book.service");
const router = express_1.default.Router();
const service = new book_service_1.BookService();
router.get('/books', (req, res) => {
    const books = service.getBooks(req.query);
    res.json(books);
});
exports.default = router;
