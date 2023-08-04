// Sample data for menu and reviews
const menuItems = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Delicious description of Item 1.',
        price: 10,
        image: 'item1.jpg',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Delicious description of Item 2.',
        price: 15,
        image: 'item2.jpg',
    },
    // Add more menu items as needed
];

const reviews = [
    {
        id: 1,
        username: 'user1',
        comment: 'Great food and service!',
        rating: 5,
    },
    {
        id: 2,
        username: 'user2',
        comment: 'The dishes were amazing!',
        rating: 4,
    },
    // Add more reviews as needed
];

// Sample data for user account (replace with actual backend integration)
let userAccount = null;

// Function to handle user signup
function signUpUser(email, username, contact) {
    userAccount = {
        email: email,
        username: username,
        contact: contact,
    };
    alert('Account created successfully!');
    // Additional backend integration to store user details can be done here
}

// Function to display the menu
function displayMenu() {
    const menuSection = document.querySelector('.menu-section');

    menuItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
        `;
        menuSection.appendChild(menuItemDiv);
    });
}

// Function to display the reviews
function displayReviews() {
    const reviewSection = document.querySelector('.review-section');

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review-item');
        reviewDiv.innerHTML = `
            <h3>${review.username}</h3>
            <p>${review.comment}</p>
            <span>Rating: ${review.rating}/5</span>
        `;
        reviewSection.appendChild(reviewDiv);
    });
}

// Function to handle order submission
function placeOrder(itemId) {
    if (!userAccount) {
        alert('Please sign up to place an order.');
        return;
    }

    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        alert(`Order placed for ${item.name}! Total amount: $${item.price}`);
    } else {
        alert('Item not found in the menu.');
    }
}

// Event listener for sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const contact = document.getElementById('contact').value;
    signUpUser(email, username, contact);
});

// Load menu and reviews when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayMenu();
    displayReviews();
});

// Add event listeners for order buttons
const addToCartButtons = document.querySelectorAll('.menu-item button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = button.parentNode;
        const itemId = parseInt(menuItem.dataset.itemId);
        placeOrder(itemId);
    });
});
