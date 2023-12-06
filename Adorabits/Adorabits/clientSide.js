/* this code is specifically to ensure that the DOM is loaded (1)
   and this code also only calls the related functions neeeded for the page(2)*/
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (document.URL.includes("cartview.html")) {
      // Code for cartview.html
      ready();
      goBack();
    } else if (document.URL.includes("plushies.html")) {
      // Code for plushies.html
      plushiestore();
      goBack()
    }
  });
} else {
  // Document is already loaded, handle accordingly
  if (document.URL.includes("cartview.html")) {
    // Code for cartview.html
    ready();
    goBack()
  } else if (document.URL.includes("plushies.html")) {
    // Code for plushies.html
    plushiestore();
    goBack()
  }
}


//go Back function prevents user from losing saved cart items


function goBack() {
  const checkout = document.getElementsByClassName("cart-button")[0] 
  checkout.addEventListener("click", (event) => {
    //is supposed to prevent the default of clearing local storage when page is switched
    event.preventDefault();
    window.localStorage.setItem("sequence", JSON.stringify(sequence));
    window.location.href = "cartview.html";
  });
}




//this code is for the shopping cart functionality

function ready() {

  const userData = JSON.parse(localStorage.getItem("sequence"));
  
  console.log(userData)

  if (userData.includes("Duck")) {
    console.log("TEST");
    let imageSrc = "Images/duck.png";
    let title = "OG Yellow Duck"; 
    let price = "$10";
    cartRowContents(imageSrc, title, price);
  }

  if (userData.includes("BananaDuck")) {
    let imageSrc = "Images/Banana Duck.jpg";
    let title = "Banana Duck"; 
    let price = "$15";
    cartRowContents(imageSrc, title, price);
  }

  if (userData.includes("BlackCat")) {
    let imageSrc = "Images/Black Cat.jpg";
    let title = "Black Cat"; 
    let price = "$15";
    cartRowContents(imageSrc, title, price)
  }

  if (userData.includes("BabyPenguin")) {
    let imageSrc = "Images/Baby Penguin.jpg";
    let title = "Baby Penguin"; 
    let price = "$10";
    cartRowContents(imageSrc, title, price)
  }

  if (userData.includes("CreamyAvocado")) {
    let imageSrc = "Images/Creamy Avocado.png";
    let title = "Creamy Avocado"; 
    let price = "$15";
    cartRowContents(imageSrc, title, price)
  }

  if (userData.includes("OctopusThing")) {
    let imageSrc = "Images/Octopus Thing.jpg";
    let title = "Octopus Thing"; 
    let price = "$20";
    cartRowContents(imageSrc, title, price)
  }

  //for DEBUGGING

  /*let imageSrc = "Images/Octopus Thing.jpg"; 
  let title = "Octopus Thing"; 
  let price = "$20";
  cartRowContents(imageSrc, title, price) */ 

  var removeItemFromCart = document.getElementsByClassName("remove-item-from-cart")
  for (var i = 0; i < removeItemFromCart.length; i++) {
    var button = removeItemFromCart[i]
    button.addEventListener("click", removeItem) 
  }

  var cart_quantity = document.getElementsByClassName("cart-quantity-input")
  for (var i = 0; i < removeItemFromCart.length; i++) {
    var input = cart_quantity[i]
    input.addEventListener("change", quantityChanged) 
  }

  let payment = document.getElementsByClassName("checkout")[0]
  payment.addEventListener("click", finishPayment)
  
}

function cartRowContents(imageSrc, title, price) {
  var cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  var cartRowContents = `
  <div class="cart-column cart-item">
        <img class="cart-item-image" src="${imageSrc}" alt="null">
        <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" min="1" value="1" name="test">
        <button class="remove-item-from-cart" type="button">Remove</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  updateCartTotal();

}

function removeItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target
  if (input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function finishPayment() {
  alert("Thank you for your purchase your order has been placed")
  let clearCart = document.getElementsByClassName("cart-items")[0]
  while (clearCart.hasChildNodes()) {
    clearCart.removeChild(clearCart.firstChild)
  }
  updateCartTotal();
  localStorage.clear();
}

function updateCartTotal() {
  var cartRowsContainer = document.getElementsByClassName("cart-items")[0]
  var cartRows = cartRowsContainer.getElementsByClassName("cart-row")
  var total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName("cart-price")[0]
    var quanitityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    var price = parseInt(priceElement.innerHTML.replace("$", ""))
    var quantity = quanitityElement.value
    total = total + (price * quantity);
    console.log(total)
  }
  document.getElementById("total").innerHTML = "$" + total;
}


function plushiestore() {

  //maintains local storage through both pages

  var sequence = JSON.parse(localStorage.getItem("sequence"));
  if (sequence === null || "null") {
    sequence = [];
  } else {
    sequence = JSON.parse(localStorage.getItem("sequence"));
  }

console.log(sequence)

  
  let productDuck = document.getElementById("product-Duck")
  productDuck.addEventListener("click", () => {
    alert("product Duck added to cart")
    sequence.push("Duck")
    console.log(sequence)
  });

  let productBananaDuck = document.getElementById("productBananaDuck")
  productBananaDuck.addEventListener("click", () => {
    alert("product BananaDuck added to cart")
    sequence.push("BananaDuck")
    console.log(sequence)
  });

  let productBlackCat = document.getElementById("productBlackCat")
  productBlackCat.addEventListener("click", () => {
    alert("product BlackCat added to cart")
    sequence.push("BlackCat")
    console.log(sequence)

  })

  let productBabyPenguin = document.getElementById("productBabyPenguin")
  productBabyPenguin.addEventListener("click", () => {
    alert("product BabyPenguin added to cart")
    sequence.push("BabyPenguin")
    console.log(sequence)

  })

  let productCreamyAvocado = document.getElementById("productCreamyAvocado")
  productCreamyAvocado.addEventListener("click", () => {
    alert("product CreamyAvocado added to cart")
    sequence.push("CreamyAvocado")
    console.log(sequence)
  })

  let productOctopusThing = document.getElementById("productOctopusThing")
  productOctopusThing.addEventListener("click", () => {
    alert("product OctopusThing added to cart")
    sequence.push("OctopusThing")
    console.log(sequence)

  })

  /*this code is to pass data from plushies.html to the cartview.html Cart page
this is done using local storage which is cleared after the transaction is complet*/

  //Converts array of selected items into a JSON string then stores that in local storage 
  const checkout = document.getElementsByClassName("cart-button")[0] 
  checkout.addEventListener("click", (event) => {
    //is supposed to prevent the default of clearing local storage when page is switched
    event.preventDefault();
    window.localStorage.setItem("sequence", JSON.stringify(sequence));
    window.location.href = "cartview.html";

  })
}

const plushies = [                // This is just a array of Data for testing
  { name: "OG Yellow Duck" },
  { name: "Banana Duck" },
  { name: "Black Cat" },
  { name: "BabyPenguin" },
  { name: "Creamy Avocado" },
  { name: "Octopus Thing" },
  { name: "ENHYPEN (엔하이픈)" },
  { name: "TOMORROW X TOGETHER (투모로우바이투게더)" },
]


function search_bar() {
    const userInput = document.querySelector(".search-box");
    const searchResults = document.getElementById("search-results");
   // const searchResults1 = document.getElementById("search-results-1");
    const searchTerm = userInput.value.toLowerCase();
  
    searchResults.innerHTML = "";


    const results = plushies.filter(group => group.name.toLowerCase().includes(searchTerm));
    
      results.forEach(result => {
          const resultItem = document.getElementById("search-results");
          resultItem.textContent = result.name;
          searchResults.appendChild(resultItem);
    });

} 

//Event listeners Related to Search Bar eg eyeglass 

//when dropdown menu is clicked


const redirectPlushiesPage = document.getElementById("search-results");
redirectPlushiesPage.addEventListener("click", () =>  window.location.href = "plushies.html");

const eyeglass = document.getElementsByClassName("search-button")[0];
eyeglass.addEventListener("click", () => window.location.href = "plushies.html");

const returnBunnyLogo = document.getElementById("menu-logo")
returnBunnyLogo.addEventListener("click", () => window.location.href = "Home.html")

const searchResults = document.getElementById("search-results");
const searchbox = document.getElementsByClassName("search-box")[0];
searchbox.addEventListener("keyup", (event) => {
  //event.preventDefault();
  if(event.keyCode === 13 && searchResults.innerHTML.length > 0) {
    window.location.href = "plushies.html";
    }
});

//About us and Plushies Redirect / Event listeners home page

const aboutUsHome = document.getElementById("about-us-home") ;
aboutUsHome.addEventListener("click", () => window.location.href = "about.html");
const plushiesHome = document.getElementById("plushies-home");
plushiesHome.addEventListener("click", () => window.location.href = "plushies.html")














  

//back to top
function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}


