var utils      = require('../index');
var Comparator = utils.comparator;
var shellsort  = utils.sort.shell;
var should     = require('chai').should();
describe("Sort", function () {
	describe("Shell", function () {
		it('Should sort integer array', function () {
			var arr        = [3, 2, 5, 1];
			var comparator = new Comparator();
			shellsort(arr, comparator);
			for (var i = 1; i < arr.length; i++) {
				arr[i].should.be.above(arr[i - 1]);
			}
			console.dir(arr);
		});
		it('Should sort float array', function () {
			var arr        = [.5, .2, .3, .5];
			var comparator = new Comparator();
			shellsort(arr, comparator);
			for (var i = 1; i < arr.length; i++) {
				arr[i].should.be.not.below(arr[i - 1]);
			}
			console.dir(arr);
		});
		it('Should sort char array', function () {
			var arr        = ['z', 'y', 'c', 's'];
			var comparator = new Comparator();
			shellsort(arr, comparator);
			for (var i = 1; i < arr.length; i++) {
				arr[i].should.be.not.below(arr[i - 1]);
			}
			console.dir(arr);
		});
		it('Should sort string array', function () {
			var arr        = ['aa', 'az', 'ad', 'ac'];
			var comparator = new Comparator();
			shellsort(arr, comparator, 1);
			for (var i = 1; i < arr.length; i++) {
				arr[i].should.be.not.below(arr[i - 1]);
			}
			console.dir(arr);
		});
		it('Should sort string array inverted', function () {
			var arr        = ['aa', 'az', 'ad', 'ac'];
			var comparator = new Comparator();
			shellsort(arr, comparator, -1);
			for (var i = 1; i < arr.length; i++) {
				arr[i].should.be.not.above(arr[i - 1]);
			}
			console.dir(arr);
		})
	})
});
describe('DataStructure', function () {
	describe('linkedlist', function () {
		it('Should run basic testing', function () {
			var a = new utils.datastructure.linkedlist();
			a.add('a');
			a.add('b');
			a.add('c');

			a.size.should.equal(3);
			a.head.item.should.equal('a');
			a.head.next.item.should.equal('b');
			a.head.next.next.item.should.equal('c');

			a.remove('b');
			a.head.next.item.should.equal('c');
			a.exists('c').should.equal(true);
			a.exists('z').should.equal(false);


			console.dir(a);
		});
	});
});