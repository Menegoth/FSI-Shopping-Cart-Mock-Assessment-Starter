//limestone
//buttons and quantity
const minusButtonLimestone = document.getElementById("quantity-down-limestone");
const plusButtonLimestone = document.getElementById("quantity-up-limestone");
const quantityLimestone = document.getElementById("quantity-limestone");
let quantityAmountLimestone = parseInt(quantityLimestone.textContent);
const removeLimestone = document.querySelector(".remove-limestone");
const cartItemLimestone = document.querySelector(".cart-item-limestone");
const totalPriceLimestone = document.getElementById("total-price-limestone");
const priceLimestone = 15;
totalPriceLimestone.textContent = quantityAmountLimestone * priceLimestone;

//+ and - button functionality
minusButtonLimestone.addEventListener("click", function(){
    if (quantityAmountLimestone > 0) {
        quantityLimestone.textContent = quantityAmountLimestone - 1;
        quantityAmountLimestone -= 1;
        totalPriceLimestone.textContent = quantityAmountLimestone * priceLimestone;
    }
})

plusButtonLimestone.addEventListener("click", function(){
    quantityLimestone.textContent = quantityAmountLimestone + 1;
    quantityAmountLimestone += 1;
    totalPriceLimestone.textContent = quantityAmountLimestone * priceLimestone;
})

//remove button functionality
removeLimestone.addEventListener("click", function(){
    cartItemLimestone.style.display = "none";
})

//bertrandite
//buttons and quantity
const minusButtonBertrandite = document.getElementById("quantity-down-bertrandite");
const plusButtonBertrandite = document.getElementById("quantity-up-bertrandite");
const quantityBertrandite = document.getElementById("quantity-bertrandite");
let quantityAmountBertrandite = parseInt(quantityBertrandite.textContent);
const removeBertrandite = document.querySelector(".remove-bertrandite");
const cartItemBertrandite = document.querySelector(".cart-item-bertrandite");
const totalPriceBertrandite = document.getElementById("total-price-bertrandite");
const priceBertrandite = 10;
totalPriceBertrandite.textContent = quantityAmountBertrandite * priceBertrandite;

//+ and - buttons
minusButtonBertrandite.addEventListener("click", function(){
    if (quantityAmountBertrandite > 0) {
        quantityBertrandite.textContent = quantityAmountBertrandite - 1;
        quantityAmountBertrandite -=1;
        totalPriceBertrandite.textContent = quantityAmountBertrandite * priceBertrandite;
    }
})

plusButtonBertrandite.addEventListener("click", function(){
    quantityBertrandite.textContent = quantityAmountBertrandite + 1;
    quantityAmountBertrandite += 1;
    totalPriceBertrandite.textContent = quantityAmountBertrandite * priceBertrandite;
})

//remove button
removeBertrandite.addEventListener("click", function(){
    cartItemBertrandite.style.display = "none";
})