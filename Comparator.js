/**
 * Implements a Generic comparator - may be overriden given special circunstances.
 * @constructor
 */
function Comparator() {
}

/**
 *
 * @param a
 * @param b
 * @returns {int}  - value after comparsion. -1 -> a is less than b; 0 -> a equals b; 1 -> a more than b
 */
Comparator.prototype.compare = function (a, b) {
	//since this is default, we accept anything...
	return true;

}
/**
 * comparable - checks if two objects can be compared.
 * In the standard implementation this method always returns true;
 * @param a
 * @param b
 * @returns {boolean}
 */
Comparator.prototype.comparable = function (a, b) {
	return true;
}
/**
 * equals - check whether two items are equal
 * @param a
 * @param b
 */
Comparator.prototype.equals = function (a, b) {
	return a == b;
}
/**
 * lessthan - checks if a is less than b
 * @param a
 * @param b
 */
Comparator.prototype.lessthan = function (a, b) {
	return a < b;

}
/**
 * more than - checks if a is more than b
 * @param a
 * @param b
 * @returns {boolean}
 */
Comparator.prototype.morethan = function (a, b) {
	return a > b;
}

module.exports = Comparator;