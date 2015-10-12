(function($, globalDom, ingredientHelpers, api) {

	'use strict';

	var dom;

	var updateDisplayQty = function(id) {

		dom.ingredientsListItems
			.filter('[data-id="' + id + '"]')
				.find('.ingredients__list-item-qty')
					.text(ingredientHelpers.getAvailableQty(id));

	};

	var processOrder = function(drinkIngredients) {

		drinkIngredients.forEach(function(ingredient) {

			ingredientHelpers.consume(ingredient.id, ingredient.qty);

			updateDisplayQty(ingredient.id);

		});

		globalDom.document.triggerHandler({
			type: 'inventory_updated'
		});

	};

	var restock = function() {

		ingredientHelpers.getAll().forEach(function(ingredient) {

			ingredientHelpers.restock(ingredient.id);

			updateDisplayQty(ingredient.id);

		});

		globalDom.document.triggerHandler({
			type: 'inventory_updated'
		});

	};

	var setupDom = function() {

		dom = {};

		dom.ingredients = globalDom.body.find('.ingredients');
		dom.restockBtn = dom.ingredients.find('.ingredients__restock-btn');
		dom.ingredientsList = dom.ingredients.find('.ingredients__list');

	};

	var cacheIngredientsListItems = function() {

		dom.ingredientsListItems = dom.ingredientsList.find('.ingredients__list-item');

	};

	var addEventHandlers = function() {

		globalDom.document.on('drink_ordered', function(e) {

			processOrder(e.ingredients);

		});

		dom.restockBtn.on('click', restock);

	};

	var template = function(data) {

		var t = '';

		data.forEach(function(ingredient) {

			t += '<li class="ingredients__list-item" data-id="' + ingredient.id + '">' +
					'<div class="ingredients__list-item-name">' + ingredient.name + '</div>' +
					'<div class="ingredients__list-item-qty">' + ingredient.qty + '</div>' +
				'</li>';

		});

		return t;

	};

	var injectTemplate = function() {

		dom.ingredientsList.html(template(ingredientHelpers.getAllSorted()));

	};

	var init = function() {

		setupDom();
		injectTemplate();
		cacheIngredientsListItems();
		addEventHandlers();

	};

	$(init);

})(window.jQuery, window.baristaMatic.globalDom, window.baristaMatic.ingredientHelpers, window.baristaMatic.ingredients = window.baristaMatic.ingredients || {});
