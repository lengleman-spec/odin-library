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
  books.innerHTML = "";
  // Loop over library array to display cards
  myLibrary.forEach(function (book) {
    // Creates a new empty card
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `<h3>${book.title}</h3>
  <p>Author:${book.author}</p>
  <p>Pages:${book.pages}</p>
  <p>Status:${book.read}</p>`;

    books.appendChild(card);
  });
}

const newBookBtn = document.getElementById("newBookBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", function () {
  bookForm.style.display = "block";
});

addBookToLibrary("The Hobbit", "Tolkien", 295, "Not Read");
addBookToLibrary("Dungeon Crawler Carl", "Somebody", 450, "Read");

displayBooksOnPage();
