define([
	'text!templates/builds-tpl.html',
	'helpers/utils', 
	'models/build', 
	'collections/builds', 
	'models/contracts/contracts',
	'jquery', 
	'underscore', 
	'backbone'], function (BuildsTpl, Utils, Build, Builds, Contracts) {
	return Backbone.View.extend({

		initialize: function (options) {
			_.extend(this, options);
			this._builds = new Builds();
			this.getData();
		},

		getData: function () {
			var me = this;
			this._builds.fetch({
				success: function (data, response) {
					me.render(data);
				},
				error: function (error, response) {
					//handle errors
				}
			});
		},

		render: function (data) {
			this.el.html(_.template(BuildsTpl)({
			 	builds: data,
			  	utils: Utils,
			  	contracts: Contracts
		  	}));
		}
	});
});