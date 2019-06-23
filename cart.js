function countBasketPrice(basket) {
	var sum = 0;
	for (var i = 0; i < basket.length; i++) {
		sum += basket[i][1] * basket[i][2];
	}
	return sum;
}

var cart = [ ['Apples', 120, 3], ['Bananas', 90, 2], ['Avocado', 150, 4] ];

alert('Стоимость товаров в корзине: ' + countBasketPrice(cart));