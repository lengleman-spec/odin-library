let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  // Ensures no book has the same id - even if they share the same name
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + author + ", " + pages + ", " + read;
  };
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  // Pushing contents of book to myLibrary array
  myLibrary.push(book);
}

// Function to display library array to the cards
function displayBooksOnPage() {
  const books = document.querySelector(".books");
  // Clear previous books so they don't duplicate:
  booksContainer.innerHTML = "";
  // Loop over library array to display cards
}
