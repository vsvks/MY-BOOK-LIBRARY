"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const books = [
    { id: 1, author: 'Author A', bookName: 'Book A', issuedDate: '2023-01-01', genre: 'horror', pages: 300 },
    { id: 2, author: 'Author B', bookName: 'Book B', issuedDate: '2022-06-15', genre: 'action', pages: 250 },
    { id: 3, author: 'Author A', bookName: 'Book C', issuedDate: '2024-03-10', genre: 'history', pages: 400 }
];
class BookRepository {
    getAllBooks() {
        return books;
    }
}
exports.BookRepository = BookRepository;
