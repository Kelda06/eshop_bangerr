function updateTotal() {
    var productPrice = parseInt(document.getElementById('productPrice').textContent);
    var shippingPrice = parseInt(document.getElementById('shippingMethod').value);
    var total = productPrice + shippingPrice;

    document.getElementById('subtotal').textContent = productPrice;
    document.getElementById('total').textContent = total;
}