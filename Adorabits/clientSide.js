function search_bar() {

}

function filter() {

}

function shoppint_cart() {

}

function stock_level() {

}

function check_out() {

}

function payment() {

}

function order_details() {

}

function web_protection() {

}

//It doesn't work, try to click .menu-button then show the menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
