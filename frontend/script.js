async function fetchBooks() {
  const author = document.getElementById('author').value;
  const bookName = document.getElementById('bookName').value;
  const issuedDate = document.getElementById('issuedDate').value;
  const genre = document.getElementById('genre').value;
  const pages = document.getElementById('pages').value;

  const query = new URLSearchParams({ author, bookName, issuedDate, genre, pages });
  const response = await fetch(`http://localhost:3000/api/books?${query.toString()}`);
  const books = await response.json();

  const results = document.getElementById('results');
  results.innerHTML = '';

  books.forEach(book => {
    const item = document.createElement('li');
    item.textContent = `${book.bookName} by ${book.author} (${book.genre}, ${book.pages} pages)`;
    results.appendChild(item);
  });
}