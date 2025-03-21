// Get the elements
const hero = document.getElementById('hero');
const galleryBtn = document.getElementById('gallery-btn');
const categoriesList = document.getElementById('categories');
const photoGrid = document.getElementById('photo-grid');

// Set up diaporama
let currentSlideIndex = 0;
let slides = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    // Add more images here...
];

function updateDiaporama() {
    const slide = slides[currentSlideIndex];
    hero.style.backgroundImage = `url(${slide.src})`;
}

// Set up gallery
let currentCategory = '';

categoriesList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        currentCategory = e.target.textContent;
        updateGallery();
    }
});

function updateGallery() {
    // Filter photos by category and display in the grid
    const filteredPhotos = slides.filter((slide) => slide.alt.includes(currentCategory));
    photoGrid.innerHTML = '';
    filteredPhotos.forEach((photo) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        photoGrid.appendChild(img);
    });
}

// Set up navigation
galleryBtn.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0;
    }
    updateDiaporama();
});

updateDiaporama();

// Initialize gallery with first category and photos
categoriesList.children[0].click();
