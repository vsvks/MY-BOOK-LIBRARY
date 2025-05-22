"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_repository_1 = require("../repositories/book.repository");
class BookService {
    constructor() {
        this.repo = new book_repository_1.BookRepository();
    }
    getBooks(filter) {
        return this.repo.getAllBooks().filter(book => {
            return (!filter.author || book.author.includes(filter.author)) &&
                (!filter.bookName || book.bookName.includes(filter.bookName)) &&
                (!filter.issuedDate || book.issuedDate === filter.issuedDate) &&
                (!filter.genre || book.genre.includes(filter.genre)) &&
                (!filter.pages || book.pages === Number(filter.pages));
        });
    }
}
exports.BookService = BookService;
