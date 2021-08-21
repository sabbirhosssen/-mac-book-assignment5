/*----------- Memory ------------cost */
const memoryCost = document.getElementById('memory-cost');
document.getElementById('memory-btn1').addEventListener("click", function () {
    memoryCost.innerText = "00";

    totalPrice();
    grandPrice();
})
document.getElementById('memory-btn2').addEventListener("click", function () {
    memoryCost.innerText = "180";

    totalPrice();
    grandPrice();
})

/*------------- Storage cost ------------*/
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-btn1').addEventListener("click", function () {
    storageCost.innerText = "00";

    totalPrice();
    grandPrice();
})
document.getElementById('storage-btn2').addEventListener("click", function () {
    storageCost.innerText = "100";

    totalPrice();
    grandPrice();
})
document.getElementById('storage-btn3').addEventListener("click", function () {
    storageCost.innerText = "180";

    totalPrice();
    grandPrice();

})
/*---------------Delivery Charge -------------*/
const deliveryCost = document.getElementById('delivery-cost');
document.getElementById('delivery-btn1').addEventListener("click", function () {
    deliveryCost.innerText = "00";

    totalPrice();
    grandPrice();
})
document.getElementById('delivery-btn2').addEventListener("click", function () {
    deliveryCost.innerText = "20";

    totalPrice();
    grandPrice();
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

/*-------------------------- Discount Pomo Code ----------------------------*/

function pomoCode() {
    const inputValue = document.getElementById('input-pomo-code').value;
    if (inputValue.toLowerCase().includes("stevekaku")) {
        let totalMasterCost = document.getElementById('total-cost').innerText;

        totalMasterCost = parseFloat(totalMasterCost) - ((parseFloat(totalMasterCost)) * 0.20)
        document.getElementById('master-total').innerText = totalMasterCost;
        document.getElementById("pomo-btn").style.visibility = "hidden";

    }
    else {

        alert('Error, invalid code ')
    }
    document.getElementById('input-pomo-code').value = '';
}
/*------------------- Grand Total Price ----------------------------*/
const masterTotal = document.getElementById('master-total');
function grandPrice() {
    const bestPrice = 1299;
    const memoryPrice = parseFloat(memoryCost.innerText);
    const storagePrice = parseFloat(storageCost.innerText);
    const deliveryPrice = parseFloat(deliveryCost.innerText);
    const totalCostPrice = memoryPrice + storagePrice + deliveryPrice + bestPrice;
    masterTotal.innerText = totalCostPrice;
}
