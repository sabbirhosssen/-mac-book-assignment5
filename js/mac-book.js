/*----------- Memory ------------cost */
const memoryCost = document.getElementById('memory-cost');
document.getElementById('memory-btn1').addEventListener("click", function () {
    memoryCost.innerText = "00";

    totalPrice();
})
document.getElementById('memory-btn2').addEventListener("click", function () {
    memoryCost.innerText = "180";

    totalPrice();
})

/*------------- Storage cost ------------*/
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-btn1').addEventListener("click", function () {
    storageCost.innerText = "00";

    totalPrice();
})
document.getElementById('storage-btn2').addEventListener("click", function () {
    storageCost.innerText = "100";

    totalPrice();
})
document.getElementById('storage-btn3').addEventListener("click", function () {
    storageCost.innerText = "180";

    totalPrice();

})
/*---------------Delivery Charge -------------*/
const deliveryCost = document.getElementById('delivery-cost');
document.getElementById('delivery-btn1').addEventListener("click", function () {
    deliveryCost.innerText = "00";

    totalPrice();
})
document.getElementById('delivery-btn2').addEventListener("click", function () {
    deliveryCost.innerText = "20";

    totalPrice();
})
/*-------------------Update total price --------------------*/
const totalProductCost = document.getElementById('total-cost');
function totalPrice() {
    const bestPrice = 1299;
    const memoryPrice = parseFloat(memoryCost.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);
    const totalCostPrice = memoryPrice + storagePrice + deliveryPrice + bestPrice;
    totalProductCost.innerText = totalCostPrice;

}
