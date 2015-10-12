(function($, globalDom, drinkHelpers, api) {

	'use strict';

	var dom;

	var processOrder = function() {

		var $item = $(this);
		var id = parseInt($item.attr('data-id'), 10);
		var drink = drinkHelpers.get(id);

		if (drinkHelpers.isAvailable(drink)) {

			globalDom.document.triggerHandler({
				type: 'drink_ordered',
				ingredients: drink.ingredients
			});

		}

	};

	var updateAvailability = function() {

		drinkHelpers.getAll().forEach(function(drink) {

			dom.drinksList
				.find('[data-id="' + drink.id + '"]')
					.toggleClass('drinks__list-item--is-unavailable', !drinkHelpers.isAvailable(drink));

		});

	};

	var setupDom = function() {

		dom = {};

		dom.drinksList = globalDom.body.find('.drinks__list');

	};

	var cacheDrinksListItems = function() {

		dom.drinksListItems = dom.drinksList.find('.drinks__list-item');

	};

	var addEventHandlers = function() {

		globalDom.document.on('inventory_updated', updateAvailability);

		dom.drinksList.on('click', '.drinks__list-item', processOrder);

	};

	var template = function(data) {

		var t = '';

		data.forEach(function(drink, i) {

			t += '<li class="drinks__list-item" data-id="' + drink.id + '" data-menu-number="' + (i + 1) + '">' +
					'<div class="drinks__list-item-content">' +
						'<div class="drinks__list-item-content-item">' +
							'<div class="drinks__list-item-name">' + drink.name + '</div>' +
						'</div>' +
						'<div class="drinks__list-item-content-item">' +
							'<div class="drinks__list-item-price">' + drinkHelpers.getCost(drink) + '</div>' +
						'</div>' +
					'</div>' +
				'</li>';

		});

		return t;

	};

	var injectTemplate = function() {

		dom.drinksList.html(template(drinkHelpers.getAllSorted()));

	};

	var init = function() {

		setupDom();
		injectTemplate();
		cacheDrinksListItems();
		addEventHandlers();

	};

	$(init);

})(window.jQuery, window.baristaMatic.globalDom, window.baristaMatic.drinkHelpers, window.baristaMatic.drinks = window.baristaMatic.drinks || {});
