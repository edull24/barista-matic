(function($, globalDom) {

	'use strict';

	globalDom.window = $(window);
	globalDom.document = $(document);
	globalDom.body = $('body');

})(window.jQuery, window.baristaMatic.globalDom = window.baristaMatic.globalDom || {});
