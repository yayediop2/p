import { truncateText } from "./utils.js";

export function createBookCard(book) {
    const availabilityClass = book.available
        ? 'bg-accent-green text-white'
        : 'bg-red-500 text-white';

    return `
<div class="book-card relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl overflow-hidden transition hover:shadow-2xl hover:scale-105 cursor-pointer">
    <div class="relative flex justify-center items-center mx-4 mt-4 overflow-hidden bg-white rounded-xl h-96">
        <img 
            src="${book.coverImage}" 
            alt="${book.title}" 
            class="object-cover w-auto h-full rounded-xl"
        />
    </div>
    <div class="p-6">
        <div class="flex items-center justify-between mb-2">
            <p class="block font-sans text-base font-medium leading-relaxed text-library-blue">
                ${book.title}
            </p>
            <p class="block font-sans text-sm font-medium leading-relaxed text-gray-500">
                ${book.genre || 'No Genre'}
            </p>
        </div>
        <p class="book-description block font-sans text-sm font-normal leading-normal text-gray-700 opacity-75 max-h-16 overflow-hidden">
            ${truncateText(book.description, 60)}
        </p>
    </div>
    <div class="flex justify-between items-center p-6 pt-0">
        <span class="px-3 py-1 text-sm font-medium rounded-full ${availabilityClass}">
            ${book.available ? 'Disponible' : 'Non disponible'}
        </span>
    </div>
</div>
`;
}
