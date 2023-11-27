document.addEventListener('DOMContentLoaded', function() {
 
  const productData = [
    { name: "Product 1", price: "49.99", image: "product1.jpg" },
    { name: "Product 2", price: "59.99", image: "product2.jpg" },
  
  ];

  const productListing = document.querySelector(".product-listings");

  productData.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <button class="add-to-cart" data-product-name="${product.name}" data-product-price="${product.price}">Add to Cart</button>
    `;

    productListing.appendChild(productCard);
  });

 
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productName = this.getAttribute('data-product-name');
      const productPrice = this.getAttribute('data-product-price');
      addItemToCart(productName, productPrice);
    });
  });

 
  function addItemToCart(productName, productPrice) {
    
  }
});
// JavaScript for handling order completion (simplified)
document.addEventListener('DOMContentLoaded', function() {
  const checkoutButton = document.getElementById("checkout-button");

  checkoutButton.addEventListener('click', function() {
    alert("Order completed! Thank you for shopping with DesiWear.");
  });
});
