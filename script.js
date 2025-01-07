// Product data (You can replace this with data from a database)
const productsData = {
    longan: {
        name: 'น้ำลำไย',
        description: 'น้ำลำไยสด หอมหวาน ชื่นใจ',
        price: '30 บาท',
        image: 'longan.jpg'
    },
    rambutan: {
        name: 'น้ำเงาะ',
        description: 'น้ำเงาะ หวานอมเปรี้ยว สดชื่น',
        price: '35 บาท',
        image: 'rambutan.jpg'
    },
    grape: {
        name: 'น้ำองุ่นไซมัสคัส',
        description: 'น้ำองุ่นไซมัสคัส หวานฉ่ำ อร่อย',
        price: '40 บาท',
        image: 'grape.jpg'
    }
};

// Get elements
const quickViewButtons = document.querySelectorAll('.quick-view');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const closeButton = document.querySelector('.close');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Open modal
quickViewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        const product = productsData[productName];

        modalImage.src = product.image;
        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;
        modalPrice.textContent = 'ราคา: ' + product.price;
        modal.style.display = 'block';
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add active class to current nav link
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
