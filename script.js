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

Book.prototype.toggleRead = function () {
  if (this.read === "Read") {
    this.read = "Not Read";
  } else {
    this.read = "Read";
  }
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  // Pushing contents of book to myLibrary array
  myLibrary.push(book);
}

// Function to display library array to the cards
function displayBooksOnPage() {
  const books = document.querySelector(".books");
  // Clear previous books so they don't duplicate:
  books.innerHTML = "";
  // Loop over library array to display cards
  myLibrary.forEach(function (book) {
    // Creates a new empty card
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `<h3>${book.title}</h3>
  <p>Author:${book.author}</p>
  <p>Pages:${book.pages}</p>
  <p>Status:${book.read}</p>
  <button class="toggle-btn" data-id="${book.id}">Toggle Read</button>
  <button class="remove-btn" data-id="${book.id}">Remove</button>`;

    books.appendChild(card);
  });
}

const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", function () {
  bookForm.style.display = "block";
});

bookForm.addEventListener("submit", function (event) {
  // Prevent submit input from trying to send it to the server (default)
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked ? "Read" : "Not Read";

  addBookToLibrary(title, author, pages, read);
  displayBooksOnPage();

  bookForm.reset();
  bookForm.style.display = "none";
});

document.querySelector(".books").addEventListener("click", function (event) {
  const id = event.target.dataset.id;

  if (event.target.classList.contains("remove-btn")) {
    myLibrary = myLibrary.filter((book) => book.id !== id);
    displayBooksOnPage();
  }

  if (event.target.classList.contains("toggle-btn")) {
    const book = myLibrary.find((book) => book.id === id);
    book.toggleRead();
    displayBooksOnPage();
  }
});

addBookToLibrary("The Hobbit", "Tolkien", 295, "Not Read");
addBookToLibrary("Dungeon Crawler Carl", "Somebody", 450, "Read");
addBookToLibrary("Dungeon Crawler Carl", "Somebody", 450, "Read");

displayBooksOnPage();
