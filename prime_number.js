//var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
//var primeString = '';

/*for (i = 0; i < 100; i++) {
	for (j = 0; j < prime.length; j++) {
		if (i === (prime[j])) {
			primeString = primeString + i + ', ';
		}
	}
}

alert(primeString)*/

/*var i = 0;
var j = 0;

while (i < 100) {
	while (j < prime.length) {
		if (i === prime[j]) {
			primeString = primeString + i + ', ';
			j = 0;
			break;
		}
		j++;
	}
	j = 0;
	i++;
}

alert(primeString);*/

function isPrime(num) {
	if (num === 1) {
		return false;
	}

	var i = 2;
	while (i < num) {
		if (num % i === 0) {
			return false;
		}
		i++;
	}

	return true;
}

var i = 0;
while (i <= 100) {
	if (isPrime(i)) {
		console.log(i);
	}
	i++;
}
