var Comparator = require('./comparator');

/**
 * Implements shellsort method
 * @param itemsarr - array to be sorted
 * @param comparator - Comparator to be used, in case is null, default comparator will be used
 * @param dir - Tell whether is should be sorted upward(1), or downward(-1)
 */
function shellsort(itemsarr, comparator, dir) {
	var h      = 1;
	var n      = itemsarr.length;
	dir        = dir || 1;
	comparator = comparator || new Comparator();

	while (h < n) {
		h = h * 3 + 1;
	}

	h = Math.floor(n / 3);
	var c, j;

	while (h > 0) {
		for (var i = h; i < n; i++) {
			c = itemsarr[i];
			j = i;
			while (j >= h && dir > 0 ? comparator.morethan(itemsarr[j - h], c) : comparator.lessthan(itemsarr[j - h], c)) {
				itemsarr[j] = itemsarr[j - h];
				j           = j - h;
			}
			itemsarr[j] = c;
		}
		h = Math.floor(h / 2);
	}

}

module.exports = shellsort;