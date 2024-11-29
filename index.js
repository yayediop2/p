import { createBookCard } from "./card.js";
import { createBookInfoModal } from "./modal.js";

// Check authentication before rendering books
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
});

async function fetchBooks() {
    try {
        const response = await fetch('books.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
}

// Add event listeners after creating book cards
export async function setupBookCardListeners() {
    const books = await fetchBooks();
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const book = books[index];
            const modal = createBookInfoModal(book);
            document.body.appendChild(modal);
        });
    });
}

async function renderBooks() {
    const bookGrid = document.getElementById('bookGrid');
    const searchInput = document.getElementById('searchInput');
    const logoutBtn = document.getElementById('logout-btn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Add logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    const books = await fetchBooks();

    function displayBooks(filteredBooks) {
        bookGrid.innerHTML = filteredBooks.length
            ? filteredBooks.map(createBookCard).join('')
            : '<p class="col-span-full text-center text-gray-500">No books found</p>';
        setupBookCardListeners();
    }

    displayBooks(books);

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            (book.genre && book.genre.toLowerCase().includes(searchTerm))
        );
        displayBooks(filteredBooks);
    });
}

renderBooks();