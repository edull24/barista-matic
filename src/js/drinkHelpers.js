(function(_, ingredientHelpers, drinkData, api) {

	'use strict';

	var get = function(id) {

		return drinkData[id];

	};

	var getAll = function() {

		return drinkData;

	};

	var getAllSorted = function() {

		return _.sortBy(getAll(), function(drink) {

			return drink.name.toUpperCase();

		});

	};

	var getCost = function(drink) {

		var cost = 0;

		drink.ingredients.forEach(function(ingredient) {

			cost += ingredientHelpers.getCost(ingredient.id, ingredient.qty);

		});

		return '$' + cost.toFixed(2);

	};

	var isAvailable = function(drink) {

		return drink.ingredients.every(function(ingredient) {

			if (ingredientHelpers.getAvailableQty(ingredient.id) < ingredient.qty) {

				return false;

			}

			return true;

		});

	};

	api.get = get;
	api.getAll = getAll;
	api.getAllSorted = getAllSorted;
	api.getCost = getCost;
	api.isAvailable = isAvailable;

})(window._, window.baristaMatic.ingredientHelpers, window.baristaMatic.data.drinks, window.baristaMatic.drinkHelpers = window.baristaMatic.drinkHelpers || {});
