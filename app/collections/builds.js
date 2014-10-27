define(['dal/config', 'models/build', 'jquery', 'underscore', 'backbone'], function (ServiceConfig, Build) {
	return Backbone.Collection.extend({
		model: Build,

		url: ServiceConfig.buildsInfo.builds
	});
});
