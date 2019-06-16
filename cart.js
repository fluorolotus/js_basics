function countBasketPrice(basket) {
	var qty;
	var cost;
	var sum;
	for (i = 0; i <= basket.length; i++) {
		cost = basket[i][1];
		qty = basket[i][2];
		sum = sum + cost * qty;
	}
	return sum;
}

var cart = [ ['Apples', 120, 3], ['Bananas', 90, 2], ['Avocado', 150, 4] ];

alert('Стоимость товаров в корзине: ' + countBasketPrice(cart));