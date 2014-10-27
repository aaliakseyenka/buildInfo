require.config({
	paths: {
		jquery: '../lib/jquery/jquery',
		underscore: '../lib/underscore/underscore',
		backbone: '../lib/backbone/backbone',
		text: '../lib/require/text',
		json2: '../lib/json2',
		dateFormat: '../lib/jquery/jquery-dateFormat.min'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		dateFormat: {
			deps: ['jquery'],
			exports: 'dateFormat'
		}
	}
});



require(['jquery', 'underscore', 'backbone', 'dateFormat', 'json2', 'text', 'router/Router', 'app'], function (par1, par2, par3, par4, par5, par6, Router, app) {
	$("document").ready(function () {
		var router = new Router();
		Backbone.history.start();
	});
});
