var numOfItems = document.querySelectorAll(".number-of-items");
let value = parseInt(numOfItems[0].innerHTML);

var itemNumberContainer = document.querySelector(".item-number");
var cartItems = document.querySelector(".cart-items");
var cartLogo = document.querySelector(".cart-logo");
var isCartOpen = false;

function clicked() {
  isCartOpen = !isCartOpen;
  updateVisibility();
}

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
}
cartLogo.addEventListener("click", clicked);

// Initial visibility settings based on the value
if (value === 0) {
  itemNumberContainer.style.visibility = "hidden";
  cartItems.style.visibility = "hidden";
} else {
  itemNumberContainer.style.visibility = "visible";
  cartItems.style.visibility = "visible";
}

var plus = document.querySelector(".increase");
var minus = document.querySelector(".decrease");

function increase() {
  if (value < 10) {
    value++;
    updateValue();
  }
}

function decrease() {
  if (value > 0) {
    value--;
    updateValue();
  }
}

function updateValue() {
  var t = value.toString();
  numOfItems.forEach((i) => {
    i.innerHTML = t;
  });
  updateVisibility();
}

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
