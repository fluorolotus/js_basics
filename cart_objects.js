var cart = [
    ['Apples', 120, 3],
    ['Bananas', 90, 2],
    ['Avocado', 150, 4],
];

function productObject(cart) {
    var basket = [];

    for (i = 0; i < cart.length; i++) {
        var product = new Object();
        product.name = cart[i][0];
        product.cost = cart[i][1];
        product.quantity = cart[i][2];
        basket.push(product);
    }
    return basket;
}

function cartTotalSum(cart) {
	var totalSum = 0;
	for(i = 0; i < cart.length; i++) {
		totalSum += cart[i].cost * cart[i].quantity;
	}
	return totalSum;
}

console.log(cartTotalSum(productObject(cart)))



//alert('Стоимость товаров в корзине: ' + countBasketPrice(cart));