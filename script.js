/*
Add to cart logic - 

1. increase or decrease the value by using plus or minus sign
2. after that if add to cart is pressed, update the value in cart
3. if cart is closed, only update the number
4. if the cart is open, show the items
5. delete button clears the cart, and makes all the values as 0
6. if the value is 0, and cart is not clicked, don't do anything
    otherwise, show that cart is empty
*/


var numOfItems = document.querySelector(".number-of-items");        // counter beside the add-to-cart button
var value = parseInt(numOfItems.innerHTML);

var itemNumberContainer = document.querySelector(".item-number");   // the number above the cart icon
var cartItems = document.querySelector(".cart-items");              // the items present in the cart

var cartLogo = document.querySelector(".cart-logo");                // the cart logo
cartLogo.addEventListener("click", clicked);

var isCartOpen = false;

var empty = document.querySelector(".empty");               // shows that cart is empty
var nonEmpty = document.querySelector(".not-empty");        // shows the contents of the cart

var totalValue = document.querySelector(".total-value");    // total value in the cart

// increase the value (max value = 10)
function increase() {
    if (value < 10) {
        value++;
    }
    updateValue();
}

// decrease the value (min value = 0)
function decrease() {
    if (value > 0) {
        value--;
    }
    updateValue();
}

// function to update the latest value of "number of items"
function updateValue() {
    var t = value.toString();
    numOfItems.innerHTML = t;
}

var plus = document.querySelector(".increase");     // plus symbol
var minus = document.querySelector(".decrease");    // minus symbol
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);

var addToCart = document.querySelector(".atc");     // add to cart
addToCart.addEventListener('click', updateCart);

/*
1. update the number of items in the cart based on the value of counter
2. calculate the amount of total number of items in the cart
3. cart status
4. update the number above the cart based on the number of items in the cart
*/
function updateCart() {
    var numOfItemsInCart = document.querySelectorAll(".number-of-items-in-cart");
    numOfItemsInCart.forEach((i) => {
        i.innerHTML = value.toString();
    })

    var totalProduct = (value * 125.0).toFixed(2); // getting till 2 decimal points
    totalValue.innerHTML = totalProduct.toString();

    cartStatus();

    if (value !== 0)
        itemNumberContainer.style.visibility = "visible";
    else
        itemNumberContainer.style.visibility = "hidden";
}

// initially the cart is closed
if (value === 0) {
    itemNumberContainer.style.visibility = "hidden";
    cartItems.style.visibility = "hidden";
}

// display the cart based on the number of items in the cart
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

// if the cart icon is clicked or not
function clicked() {
    isCartOpen = !isCartOpen;
    updateVisibility();
}

/* 
update the visiblilty of the cart
based on whether or not the value is 0
or the cart is clicked
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

// delete button functionality
var deleteBtn = document.querySelector(".delete-icon");
deleteBtn.addEventListener("click", () => {
    value = 0;
    updateCart();
    updateValue();
});

/* ************************************************************************** */

/* 
Thumbnail switching logic

select display image by clicking the thumbnails
also changing the border of the selected thumbnails
*/

var thumbnails = document.querySelectorAll(".thumbnail");
var displayImg = document.querySelector(".display-image");

thumbnails.forEach((i) => { // each thumbnail listens for a click
    i.addEventListener(
        "click",
        () => {
            var selectedElement = document.querySelector(".selected");  // the element with "selected" class
            var selectedImage = selectedElement.querySelector("img");   // image element inside that class

            /*
            if an element is found with "selected" class, remove that class from the element
            because now some other thumbnail is being clicked on.
            do the same thing with the image element as well
            */
            if (selectedElement) {
                selectedElement.classList.remove("selected");
                selectedImage.classList.remove("selected-image");
            }

            // add "selected" class on the thumbnail which is clicked on
            // and "selected-image" class on the image
            i.classList.add("selected");
            i.querySelector("img").classList.add("selected-image");

            var sid = i.id[1]; // getting the index of the selected thumbnail (numbering starts from 1)

            // updating the display image, based on the index of the selected thumbnail
            displayImg.innerHTML = "<img src='/images/image-product-" + sid + ".jpg' alt='product " + sid + "'/>";
        },
        false
    );
});

// initially the first selected image
thumbnails[0].classList.add("selected");
thumbnails[0].querySelector("img").classList.add("selected-image");

/* *************************************************************************************************** */

/*
Hamburger Menu Logic

click on the hamburger menu to open the side menu
click on the cross symbol to close the side menu
*/
var hbMenu = document.querySelector(".hamburger-menu");     // set of three bars of hamburger menu
var navLinks = document.querySelector(".nav-links");        // set of navbar links
hbMenu.addEventListener('click', () => {
    navLinks.style.display = "flex";
});
var closeMenu = document.querySelector(".nav-links img");   // cross symbol
closeMenu.addEventListener('click', () => {
    navLinks.style.display = "none";
});