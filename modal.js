// Create modal for full book description
export function createBookInfoModal(book) {
    // Create modal container
    const modal = document.createElement('div');
    modal.id = 'book-info-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4';
    
    // Modal content
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button id="close-modal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div class="flex flex-col md:flex-row gap-6">
                <div class="w-full md:w-1/3 flex-shrink-0">
                    <img 
                        src="${book.coverImage}" 
                        alt="${book.title}" 
                        class="w-full h-auto rounded-xl object-cover"
                    />
                </div>
                
                <div class="w-full">
                    <h2 class="text-2xl font-bold text-library-blue mb-4">${book.title}</h2>
                    <p class="text-gray-500 mb-4">Genre: ${book.genre || 'No Genre'}</p>
                    <p class="text-gray-700 leading-relaxed">${book.description}</p>
                    
                    <div class="mt-4 flex items-center">
                        <span class="px-3 py-1 text-sm font-medium rounded-full ${book.available ? 'bg-accent-green text-white' : 'bg-red-500 text-white'}">
                            ${book.available ? 'Disponible' : 'Non disponible'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add close functionality
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#close-modal')) {
            document.body.removeChild(modal);
        }
    });

    return modal;
}