// Your code here
const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	constructor() {
		super();
	}

	squared() {
		this.total = Math.pow(this.total, 2);
		return this.total;
	}

	modulo(num) {
		this.total %= num;
		return this.total;
	}

	setTotal(newTotal) {
		this.total = newTotal;
		return this.total;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}