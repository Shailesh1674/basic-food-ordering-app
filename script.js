const defaultFoodData = [
    // PIZZAS
    { id: 1, name: "Margherita Pizza", price: 349, category: "pizza", image: "img/food/p1.jpg", description: "Classic pizza with tomato sauce and base mozzarella." },
    { id: 2, name: "Pepperoni Pizza", price: 499, category: "pizza", image: "img/category/pizza.jpg", description: "Topped with spicy pepperoni and stringy cheese." },
    { id: 3, name: "BBQ Chicken Pizza", price: 549, category: "pizza", image: "img/food/p1.jpg", description: "Tangy BBQ sauce, chicken, red onions, cilantro." },
    { id: 4, name: "Veg Extravaganza", price: 449, category: "pizza", image: "img/category/pizza.jpg", description: "Loaded with black olives, capsicum, mushroom, onion." },
    { id: 5, name: "Mushroom Pizza", price: 399, category: "pizza", image: "img/category/pizza.jpg", description: "Earthy mushrooms and sweet caramelized onions." },
    { id: 6, name: "Hawaiian Pizza", price: 429, category: "pizza", image: "img/food/p1.jpg", description: "Sweet pineapple, smoked ham, and mozzarella." },
    { id: 7, name: "Spicy Paneer Pizza", price: 479, category: "pizza", image: "img/category/pizza.jpg", description: "Indian style spicy paneer tikka chunks with peppers." },
    { id: 8, name: "Meat Lovers Pizza", price: 599, category: "pizza", image: "img/food/p1.jpg", description: "Loaded with chicken, pepperoni, ham, and bacon." },
    { id: 9, name: "Four Cheese Pizza", price: 499, category: "pizza", image: "img/category/pizza.jpg", description: "Gouda, mozzarella, cheddar, and parmesan blend." },
    { id: 10, name: "Mexican Green Wave", price: 399, category: "pizza", image: "img/food/p1.jpg", description: "Jalapenos, crispy capsicum, tomatoes, and sweet corn." },

    // BURGERS
    { id: 11, name: "Cheeseburger", price: 199, category: "burger", image: "img/food/b1.jpg", description: "Juicy beef burger with cheese, lettuce, and tomato." },
    { id: 12, name: "Chicken Burger", price: 249, category: "burger", image: "img/category/burger.jpg", description: "Grilled chicken breast with special mayo sauce." },
    { id: 13, name: "Double Cheese Burger", price: 299, category: "burger", image: "img/food/b1.jpg", description: "Double beef patty with extra melting vintage cheese." },
    { id: 14, name: "Paneer Tikka Burger", price: 179, category: "burger", image: "img/category/burger.jpg", description: "Spicy Indian paneer patty with mint mayo and onions." },
    { id: 15, name: "Fish Burger", price: 259, category: "burger", image: "img/category/burger.jpg", description: "Crispy fish fillet with tangy tartar sauce." },
    { id: 16, name: "Crispy Veg Burger", price: 149, category: "burger", image: "img/food/b1.jpg", description: "Crunchy potato and peas patty with creamy sauce." },
    { id: 17, name: "Spicy Chicken Burger", price: 269, category: "burger", image: "img/category/burger.jpg", description: "Fried chicken coated in spicy buffalo sauce." },
    { id: 18, name: "Mushroom Swiss Burger", price: 319, category: "burger", image: "img/food/b1.jpg", description: "Beef patty with sautéed mushrooms and swiss cheese." },
    { id: 19, name: "BBQ Bacon Burger", price: 349, category: "burger", image: "img/category/burger.jpg", description: "Layered with crispy bacon, BBQ sauce, and onion rings." },
    { id: 20, name: "Vegan Black Bean Burger", price: 229, category: "burger", image: "img/food/b1.jpg", description: "Healthy black bean patty with fresh avocado smash." },

    // PASTAS
    { id: 21, name: "Penne Arrabbiata", price: 279, category: "pasta", image: "img/food/p1.jpg", description: "Spicy tomato sauce with garlic and fresh parsley." },
    { id: 22, name: "Fettuccine Alfredo", price: 349, category: "pasta", image: "img/category/pizza.jpg", description: "Creamy white parmesan sauce with butter and black pepper." },
    { id: 23, name: "Chicken Pesto Pasta", price: 399, category: "pasta", image: "img/food/p1.jpg", description: "Fresh basil pesto sauce with grilled chicken strips." },
    { id: 24, name: "Spaghetti Bolognese", price: 429, category: "pasta", image: "img/category/pizza.jpg", description: "Classic hearty Italian meat sauce over spaghetti." },
    { id: 25, name: "Mac & Cheese", price: 249, category: "pasta", image: "img/food/p1.jpg", description: "Rich and gooey baked macaroni and cheddar cheese." },
    { id: 26, name: "Seafood Linguine", price: 549, category: "pasta", image: "img/category/pizza.jpg", description: "Linguine tossed with shrimp, mussels, and calamari." },
    { id: 27, name: "Vegetable Lasagna", price: 389, category: "pasta", image: "img/food/p1.jpg", description: "Layers of pasta with ricotta, spinach, and marinara." },
    { id: 28, name: "Meat Lasagna", price: 449, category: "pasta", image: "img/category/pizza.jpg", description: "Traditional lasagna with ground beef and melting cheese." },
    { id: 29, name: "Mushroom Ravioli", price: 369, category: "pasta", image: "img/food/p1.jpg", description: "Ravioli stuffed with wild mushrooms in a butter sage sauce." },
    { id: 30, name: "Truffle Pasta", price: 599, category: "pasta", image: "img/category/pizza.jpg", description: "Luxurious pasta tossed in rich truffle cream and parmesan." },

    // DRINKS
    { id: 31, name: "Coca Cola", price: 49, category: "beverage", image: "img/food/p1.jpg", description: "Chilled Coca Cola Can 330ml." },
    { id: 32, name: "Mango Shake", price: 129, category: "beverage", image: "img/food/b1.jpg", description: "Thick and creamy mango milkshake." },
    { id: 33, name: "Cold Coffee", price: 149, category: "beverage", image: "img/category/burger.jpg", description: "Classic cold coffee blended with vanilla ice cream." },
    { id: 34, name: "Lemon Iced Tea", price: 99, category: "beverage", image: "img/food/p1.jpg", description: "Refreshing lemon iced tea infused with fresh mint leaves." },
    { id: 35, name: "Oreo Milkshake", price: 169, category: "beverage", image: "img/food/b1.jpg", description: "Rich chocolate and crushed oreo blended shake." },
    { id: 36, name: "Fresh Orange Juice", price: 119, category: "beverage", image: "img/category/burger.jpg", description: "Freshly squeezed Valencia oranges." },
    { id: 37, name: "Strawberry Smoothie", price: 159, category: "beverage", image: "img/food/b1.jpg", description: "Healthy smoothie made with fresh strawberries and yogurt." },
    { id: 38, name: "Mint Mojito", price: 139, category: "beverage", image: "img/category/burger.jpg", description: "Virgin mojito with crushed ice, lime, and mint." },
    { id: 39, name: "Watermelon Slush", price: 109, category: "beverage", image: "img/food/b1.jpg", description: "Icy chilled watermelon slushy perfect for summer." },
    { id: 40, name: "Cappuccino", price: 129, category: "beverage", image: "img/category/burger.jpg", description: "Hot frothy cappuccino coffee brewed fresh." },

    // SWEETS & DESSERTS
    { id: 41, name: "Chocolate Brownie", price: 199, category: "sweet", image: "img/category/pizza.jpg", description: "Warm fudgy brownie served with vanilla ice cream." },
    { id: 42, name: "Tiramisu", price: 249, category: "sweet", image: "img/food/p1.jpg", description: "Classic Italian dessert with coffee-soaked ladyfingers." },
    { id: 43, name: "New York Cheesecake", price: 299, category: "sweet", image: "img/category/pizza.jpg", description: "Rich and creamy classic baked cheesecake slice." },
    { id: 44, name: "Gulab Jamun", price: 99, category: "sweet", image: "img/food/p1.jpg", description: "Two pieces of soft Indian sweet balls in sugar syrup." },
    { id: 45, name: "Ice Cream Sundae", price: 179, category: "sweet", image: "img/category/pizza.jpg", description: "Three scoops of ice cream topped with nuts and hot fudge." },
    { id: 46, name: "Red Velvet Cupcake", price: 129, category: "sweet", image: "img/food/p1.jpg", description: "Moist red velvet cake with cream cheese frosting." },
    { id: 47, name: "Choco Lava Cake", price: 159, category: "sweet", image: "img/category/pizza.jpg", description: "Warm chocolate cake with an erupting gooey molten center." },
    { id: 48, name: "Rasmalai", price: 149, category: "sweet", image: "img/food/p1.jpg", description: "Soft paneer discs soaked in thickened, sweetened milk." },
    { id: 49, name: "Apple Pie", price: 219, category: "sweet", image: "img/category/pizza.jpg", description: "Warm slice of traditional apple pie with cinnamon." },
    { id: 50, name: "Waffles with Nutella", price: 249, category: "sweet", image: "img/food/p1.jpg", description: "Crispy Belgian waffles heavily drizzled with Nutella." }
];

// Initialize food data
let foodData = JSON.parse(localStorage.getItem('foodData'));
// Force update if user has old data with less than 50 items
if (!foodData || foodData.length < 50) {
    foodData = defaultFoodData;
    localStorage.setItem('foodData', JSON.stringify(foodData));
}

// Cart array
let cart = [];

// DOM Elements
const cartLink = document.getElementById('cartLink');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const featuredFoods = document.getElementById('featuredFoods');
const checkoutBtn = document.getElementById('checkoutBtn');

// User Auth
let users = JSON.parse(localStorage.getItem('users')) || [{name: 'Admin', email: 'admin@foodie.com', password: 'admin123', isAdmin: true}];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
// Save default admin if first time
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Check Theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    loadCartFromLocalStorage();
    if(featuredFoods) displayFeaturedFoods();
    updateCartUI();
    updateNavigation();
    
    // Event Listeners
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }
    if (closeCart) closeCart.addEventListener('click', closeCartModal);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (cartModal && event.target === cartModal) {
            closeCartModal();
        }
    });

    // Handle Authentication Forms
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            
            if (users.find(u => u.email === email)) {
                alert('Email already registered!');
                return;
            }
            
            const newUser = { name, email, password, isAdmin: false };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration Successful! Please login.');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert('Login Successful!');
                window.location.href = user.isAdmin ? 'admin.html' : 'index.html';
            } else {
                alert('Invalid Email or Password!');
            }
        });
    }
});

function updateNavigation() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    // Remove existing login/register links if we are injecting them dynamically to avoid duplicates
    const links = navLinks.querySelectorAll('li');
    links.forEach(li => {
        if (li.textContent.includes('Login') || li.textContent.includes('Register') || li.textContent.includes('Logout') || li.textContent.includes('Admin')) {
            if (!li.querySelector('.active')) {
                // Keep the active ones if we're on those exact pages, but actually let's just clean up dynamically added ones
                // Since register.html has hardcoded links, this basic removal is safest
            }
        }
    });

    // We will just append before the Cart link. Let's find the cart li.
    const cartLi = Array.from(navLinks.children).find(li => li.innerHTML.includes('cartLink'));
    
    if (currentUser) {
        if (currentUser.isAdmin) {
            const adminLi = document.createElement('li');
            adminLi.innerHTML = '<a href="admin.html">Admin</a>';
            if (cartLi) navLinks.insertBefore(adminLi, cartLi);
        }
        
        const logoutLi = document.createElement('li');
        logoutLi.innerHTML = '<a href="#" id="logoutBtn">Logout (' + currentUser.name + ')</a>';
        if (cartLi) navLinks.insertBefore(logoutLi, cartLi);
        else navLinks.appendChild(logoutLi);
        
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    } else {
        // If not on auth pages, add Login link
        if (!document.querySelector('.auth-page')) {
            const loginLi = document.createElement('li');
            loginLi.innerHTML = '<a href="login.html">Login</a>';
            if (cartLi) navLinks.insertBefore(loginLi, cartLi);
        }
    }
}

// Display featured foods
function displayFeaturedFoods() {
    featuredFoods.innerHTML = '';
    
    // Get first 3 items as featured
    const featuredItems = foodData.slice(0, 3);
    
    featuredItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">₹${food.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        featuredFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId, e.target);
        });
    });
}

// Add item to cart
function addToCart(foodId, btn) {
    const food = foodData.find(item => item.id === foodId);
    
    if (food) {
        // Check if item already in cart
        const existingItem = cart.find(item => item.id === foodId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: food.id,
                name: food.name,
                price: food.price,
                image: food.image,
                quantity: 1
            });
        }
        
        saveCartToLocalStorage();
        updateCartUI();
        
        // Show confirmation with Animation
        if (btn) {
            const card = btn.closest('.food-card');
            if (card) {
                const img = card.querySelector('img');
                const cartIcon = document.getElementById('cartLink');
                
                if (img && cartIcon) {
                    const imgClone = img.cloneNode();
                    const imgRect = img.getBoundingClientRect();
                    const cartRect = cartIcon.getBoundingClientRect();
                    
                    imgClone.classList.add('flying-img');
                    imgClone.style.setProperty('--startX', imgRect.left + 'px');
                    imgClone.style.setProperty('--startY', imgRect.top + 'px');
                    imgClone.style.setProperty('--endX', cartRect.left + 'px');
                    imgClone.style.setProperty('--endY', cartRect.top + 'px');
                    
                    document.body.appendChild(imgClone);
                    
                    setTimeout(() => {
                        imgClone.remove();
                        cartIcon.classList.add('cart-bouncing');
                        setTimeout(() => cartIcon.classList.remove('cart-bouncing'), 300);
                    }, 800);
                }
            }
        }
    }
}

// Remove item from cart
function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    saveCartToLocalStorage();
    updateCartUI();
}

// Update item quantity
function updateQuantity(foodId, change) {
    const item = cart.find(item => item.id === foodId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(foodId);
        } else {
            saveCartToLocalStorage();
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    // If no cart elements on the page, just stop here
    if (!cartItems || !cartTotal) return;

    // Update cart modal
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-price">₹${item.price.toFixed(2)} each</p>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <p class="item-total">₹${itemTotal.toFixed(2)}</p>
            <button class="remove-item" data-id="${item.id}">×</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    
    // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            removeFromCart(foodId);
        });
    });
}

// Open cart modal
function openCart() {
    cartModal.style.display = 'flex';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    if (!currentUser) {
        alert('Please login to proceed with checkout.');
        window.location.href = 'login.html';
        return;
    }

    closeCartModal();
    window.location.href = 'checkout.html';
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Menu page functions
function displayMenuFoods(category = 'all') {
    const menuFoods = document.getElementById('menuFoods');
    if (!menuFoods) return;
    
    menuFoods.innerHTML = '';
    
    const filteredFoods = category === 'all' 
        ? foodData 
        : foodData.filter(food => food.category === category);
    
    filteredFoods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">₹${food.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        menuFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId, e.target);
        });
    });
}

// Filter functionality for menu page
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and display foods
            const category = this.getAttribute('data-category');
            displayMenuFoods(category);
        });
    });
}

// Initialize menu page if on menu page
if (document.querySelector('.menu-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        displayMenuFoods();
        setupFilterButtons();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });
}

// Initialize about page if on about page
if (document.querySelector('.about-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });
}

// Initialize contact page if on contact page
if (document.querySelector('.contact-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Create contact message object
                const contactMessage = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                // Save to localStorage
                const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
                messages.push(contactMessage);
                localStorage.setItem('contactMessages', JSON.stringify(messages));
                
                // Reset form
                contactForm.reset();
                
                // Show confirmation
                alert('Thank you for your message! We will get back to you soon.');
            });
        }
    });
}