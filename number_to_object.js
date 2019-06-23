var number = +prompt('Введите трехзначное число')
var digitObject = { hundreds: '', tens: '', units: '' }

function numberToObject(number) {

	if (number > 999) {
		return digitObject;
	}
    var digits = [];

    for (i = 0; i < 3; i++) {
        digits.unshift((number % (Math.pow(10, i + 1)) - number % (Math.pow(10, i))) / Math.pow(10, i))
    }

    digitObject.hundreds = digits[0];
    digitObject.tens = digits[1];
    digitObject.units = digits[2];

    return digitObject;
}

if (number > 999) {
	console.log('Введенное число содержит больше 3 знаков')
	console.log(numberToObject(number));
}
else {
	console.log(numberToObject(number));	
}
