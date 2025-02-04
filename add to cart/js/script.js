document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  loadCart();
});

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addProduct();
});

function addProduct() {
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productType = document.getElementById("productType").value;
  const productImage = document.getElementById("productImage").value;

  const product = {
    name: productName,
    price: productPrice,
    type: productType,
    image: productImage,
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  loadProducts();
  document.getElementById("productForm").reset();
}

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="mb-3">
            <h5>${product.name}</h5>
            <p>Price: $${product.price}</p>
            <p>Type: ${product.type}</p>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${index})">Add to Cart</button>
            <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Delete</button>
        `;
    productList.appendChild(productCard);
  });
}

function addToCart(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItem = cart.find((item) => item.name === product.name);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  let totalPrice = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" class="mr-3">
            <h5>${item.name}</h5>
            <p>Price: $${item.price}</p>
            <p>Quantity: <input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></p>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        `;
    cartContainer.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function proceedToPayment() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Minimum one quantity must be added to proceed to payment.");
  } else {
    alert("Your order has been successfully placed!");
    localStorage.removeItem("cart");
    loadCart();
  }
}

function editProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productType").value = product.type;
  document.getElementById("productImage").value = product.image;

  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}
