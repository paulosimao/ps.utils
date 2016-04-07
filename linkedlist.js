/**
 * Implements a linkedlist
 * @constructor
 */

function LinkedList() {
	this.head = null;
	this.size = 0;
}

/**
 * Abstraction for list item
 * @constructor
 */
function LinkedListItem() {
	this.item     = null;
	this.previous = null;
	this.next     = null;
}


/**
 * Adds an item to list
 * @param item
 */
LinkedList.prototype.add = function (item) {
	var litem  = new LinkedListItem();
	litem.item = item;
	if (!this.head) {
		this.head = litem;
	} else {
		var i = this.head;
		while (i.next != null) {
			i = i.next;
		}
		i.next         = litem;
		litem.previous = i;
	}
	this.size++;
}
/**
 * Removes item from list
 * @param item
 */
LinkedList.prototype.remove = function (item) {
	var i = this.head;
	while (i != null) {
		var j = i.next;
		if (i.item === item) {
			i.previous.next = i.next;
			i.next.previous = i.previous;
			this.size--;
			return;
		}
		i = i.next;
	}
}
/**
 * Check whether an item exists on list
 * @param item
 */
LinkedList.prototype.exists = function (item) {
	var i = this.head;
	while (i != null) {
		var j = i.next;
		if (i.item === item) {
			return true;
		}
		i = i.next;

	}
	return false;

}
/**
 * Append item or list at the end of this list
 * @param item
 */
LinkedList.prototype.append = function (item) {
	throw  new Error('to be implemented - its close to midnight, lets get back tomorrow, ok?')
}
/**
 * Adds item(s) at the beginning of present list
 * @param item
 */
LinkedList.prototype.prepend = function (item) {
	throw  new Error('to be implemented - its close to midnight, lets get back tomorrow, ok?')
}


module.exports = LinkedList;