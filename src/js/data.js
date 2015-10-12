(function(api) {

	'use strict';

	api.ingredients = [
		{
			id: 0,
			name: "Coffee",
			unitCost: .75,
			qty: 10
		},
		{
			id: 1,
			name: "Decaf Coffee",
			unitCost: .75,
			qty: 10
		},
		{
			id: 2,
			name: "Sugar",
			unitCost: .25,
			qty: 10
		},
		{
			id: 3,
			name: "Cream",
			unitCost: .25,
			qty: 10
		},
		{
			id: 4,
			name: "Steamed Milk",
			unitCost: .35,
			qty: 10
		},
		{
			id: 5,
			name: "Foamed Milk",
			unitCost: .35,
			qty: 10
		},
		{
			id: 6,
			name: "Espresso",
			unitCost: 1.1,
			qty: 10
		},
		{
			id: 7,
			name: "Cocoa",
			unitCost: .9,
			qty: 10
		},
		{
			id: 8,
			name: "Whipped Cream",
			unitCost: 1,
			qty: 10
		}
	];

	api.drinks = [
		{
			id: 0,
			name: "Coffee",
			ingredients: [
				{
					id: 0,
					qty: 3
				},
				{
					id: 2,
					qty: 1
				},
				{
					id: 3,
					qty: 1
				}
			]
		},
		{
			id: 1,
			name: "Decaf Coffee",
			ingredients: [
				{
					id: 1,
					qty: 3
				},
				{
					id: 2,
					qty: 1
				},
				{
					id: 3,
					qty: 1
				}
			]
		},
		{
			id: 2,
			name: "Caffe Latte",
			ingredients: [
				{
					id: 6,
					qty: 2
				},
				{
					id: 4,
					qty: 1
				}
			]
		},
		{
			id: 3,
			name: "Caffe Americano",
			ingredients: [
				{
					id: 6,
					qty: 3
				}
			]
		},
		{
			id: 4,
			name: "Caffe Mocha",
			ingredients: [
				{
					id: 6,
					qty: 1
				},
				{
					id: 7,
					qty: 1
				},
				{
					id: 4,
					qty: 1
				},
				{
					id: 8,
					qty: 1
				}
			]
		},
		{
			id: 5,
			name: "Cappuccino",
			ingredients: [
				{
					id: 6,
					qty: 2
				},
				{
					id: 4,
					qty: 1
				},
				{
					id: 5,
					qty: 1
				}
			]
		}
	];

})(window.baristaMatic.data = window.baristaMatic.data || {});
