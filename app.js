function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calcuteTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calcuteTotal() {
    const phoneTotlal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotlal + caseTotal;
    const tex = subTotal / 10;
    const totalAmount = subTotal + tex;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tex;
    document.getElementById('total-price').innerText = totalAmount;


}
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
}
);
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    /*     const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1; */


});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    /*  const caseInput = document.getElementById('case-number');
     const caseNumber = caseInput.value;
     caseInput.value = parseInt(caseNumber) - 1; */
});