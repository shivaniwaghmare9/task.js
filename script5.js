
// let products = [
//   { id: 1, name: "Product 1", price: 10.99 },
//   { id: 2, name: "Product 2", price: 9.99 },
//   { id: 3, name: "Product 3", price: 12.99 }
// ];

// let cart = [];

// function displayProducts() {
//   let productsHtml = "";
//   products.forEach(product => {
//     productsHtml += `
//       <div class="product">
//         <h2>${product.name}</h2>
//         <p>Price: $${product.price}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//       </div>
//     `;
//   });
//   document.getElementById("products").innerHTML = productsHtml;
// }

// function displayCart() {
//   let cartHtml = "";
//   cart.forEach(item => {
//     cartHtml += `
//       <div class="cart-item">
//         <h2>${item.name}</h2>
//         <p>Price: $${item.price}</p>
//         <p>Quantity: ${item.quantity}</p>
//         <button onclick="removeFromCart(${item.id})">Remove</button>
//         <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
//         <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
//       </div>
//     `;
//   });
//   document.getElementById("cart").innerHTML = cartHtml;
// }

// function addToCart(productId) {
//   let product = products.find(p => p.id === productId);
//   if (product) {
//     let existingItem = cart.find(item => item.id === productId);
//     if (existingItem) {
//       existingItem.quantity++;
//     } else {
//       cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
//     }
//     displayCart();
//   }
// }

// function removeFromCart(productId) {
//   cart = cart.filter(item => item.id !== productId);
//   displayCart();
// }

// function updateQuantity(productId, action) {
//   let item = cart.find(i => i.id === productId);
//   if (item) {
//     if (action === "increase") {
//       item.quantity++;
//     } else if (action === "decrease" && item.quantity > 1) {
//       item.quantity--;
//     }
//     displayCart();
//   }
// }

// displayProducts();
// displayCart();

let products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 9.99 },
  { id: 3, name: "Product 3", price: 12.99 }
];

let cart = [];

function displayProducts() {
  let productsHtml = "";
  products.forEach(product => {
    productsHtml += `
      <div class="product">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById("products").innerHTML = productsHtml;
}

function displayCart() {
  let cartHtml = "";
  cart.forEach(item => {
    cartHtml += `
      <div class="cart-item">
        <h2>${item.name}</h2>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
        <button onclick="updateQuantity(${item.id}, 'increase')">+</button>
        <button onclick="updateQuantity(${item.id}, 'decrease')">-</button>
      </div>
    `;
  });
  document.getElementById("cart").innerHTML = cartHtml;
}

function addToCart(productId) {
  let product = products.find(p => p.id === productId);
  if (product) {
    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
    displayCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
}

function updateQuantity(productId, action) {
  let item = cart.find(i => i.id === productId);
  if (item) {
    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease" && item.quantity > 1) {
      item.quantity--;
    }
    displayCart();
  }
}

displayProducts();
displayCart();


