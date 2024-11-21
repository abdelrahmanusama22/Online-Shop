let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price, specs = "No specifications provided") {
    cart.push({ product, price, specs });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart.`);
    console.log("Cart:", cart);
}

function deleteFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item removed from the cart.');
    showCart();
}

function showCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('cart');
    if (!cartSection) return; // Exit if the cart section does not exist

    let output = `
        <h2 style="font-size: 2rem; color: #333; text-align: center; margin-bottom: 20px;">Your Cart</h2>
        <ul style="list-style-type: none; padding: 0; margin: 0;">`;

    cartItems.forEach((item, index) => {
        output += `
            <li style="background-color: #fff; padding: 10px; margin-bottom: 15px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); font-size: 1.1rem;">
                <span style="flex-grow: 1;">${item.product} - $${item.price} - ${item.specs}</span>
                <button onclick="deleteFromCart(${index})" 
                        style="background-color: #dc3545; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; transition: background-color 0.3s ease;">
                    Remove
                </button>
            </li>`;
    });

    output += '</ul>';

    if (cartItems.length === 0) {
        output += "<p style='font-size: 1.2rem; color: #555; text-align: center;'>Your cart is currently empty.</p>";
    }

    cartSection.innerHTML = output;
}

// Ensure cart display on load for cart.html
document.addEventListener("DOMContentLoaded", showCart);
