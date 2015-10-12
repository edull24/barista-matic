(function(_, ingredientData, api) {

	'use strict';

	var get = function(id) {

		return ingredientData[id];

	};

	var getAll = function() {

		return ingredientData;

	};

	var getAllSorted = function() {

		return _.sortBy(getAll(), function(ingredient) {

			return ingredient.name.toUpperCase();

		});

	};

	var getCost = function(id, qty) {

		return get(id).unitCost * qty;

	};

	var getAvailableQty = function(id) {

		return get(id).qty;

	};

	var consume = function(id, qty) {

		get(id).qty -= qty;

	};

	var restock = function(id) {

		get(id).qty = 10;

	};

	api.get = get;
	api.getAll = getAll;
	api.getAllSorted = getAllSorted;
	api.getCost = getCost;
	api.getAvailableQty = getAvailableQty;
	api.consume = consume;
	api.restock = restock;

})(window._, window.baristaMatic.data.ingredients, window.baristaMatic.ingredientHelpers = window.baristaMatic.ingredientHelpers || {});
