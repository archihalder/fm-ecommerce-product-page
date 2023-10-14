var numOfItems = document.querySelectorAll(".number-of-items");
let value = parseInt(numOfItems[0].innerHTML);

var itemNumberContainer = document.querySelector(".item-number");
var cartItems = document.querySelector(".cart-items");
var cartLogo = document.querySelector(".cart-logo");
var isCartOpen = false;

var empty = document.querySelector(".empty");
var nonEmpty = document.querySelector(".not-empty");

function clicked() {
  isCartOpen = !isCartOpen;
  updateVisibility();
}

/* 
change what is in cart based on the number of items in the cart
if it is 0, the cart is empty
otherwise, display the number of products in the cart
*/
function cartStatus() {
  if (isCartOpen) {
    if (value === 0) {
      empty.style.display = "initial";
      nonEmpty.style.display = "none";
    } else {
      empty.style.display = "none";
      nonEmpty.style.display = "initial";
    }
  }
}

/*
change the visibility of the number of items selected (the number on top of the cart)
and if the cart-logo is clicked, show the cart
*/
function updateVisibility() {
  if (value > 0) {
    itemNumberContainer.style.visibility = "visible";
    if (isCartOpen) {
      cartItems.style.visibility = "visible";
    } else {
      cartItems.style.visibility = "hidden";
    }
  } else {
    if (isCartOpen) {
      itemNumberContainer.style.visibility = "visible";
      cartItems.style.visibility = "visible";
    } else {
      itemNumberContainer.style.visibility = "hidden";
      cartItems.style.visibility = "hidden";
    }
  }
  cartStatus();
}

cartLogo.addEventListener("click", clicked);

// initial visibility settings based on the value
if (value === 0) {
  itemNumberContainer.style.visibility = "hidden";
  cartItems.style.visibility = "hidden";
  cartStatus();
}

var plus = document.querySelector(".increase");
var minus = document.querySelector(".decrease");

// increase the value if clicked on plus sign
function increase() {
  if (value < 10) {
    value++;
    updateValue();
  }
}

// decrease the value if clicked on minus sign
function decrease() {
  if (value > 0) {
    value--;
    updateValue();
  }
}

// update the values in cart
function updateValue() {
  var totalProduct = (value * 125.0).toFixed(2);
  var t = value.toString();
  totalValue.innerHTML = totalProduct.toString();
  numOfItems.forEach((i) => {
    i.innerHTML = t;
  });
  updateVisibility();
}

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);

// delete button functionality
var deleteBtn = document.querySelector(".delete-icon");

function resetCart() {
  value = 0;
  updateValue();
}

deleteBtn.addEventListener("click", resetCart);

// total value in the cart
var totalValue = document.querySelector(".total-value");
