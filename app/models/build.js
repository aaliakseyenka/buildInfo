define(['dal/config', 'jquery', 'underscore', 'backbone'], function (ServiceConfig, Config) {
	return Backbone.Model.extend({
		/*
		* variable specifying name of the Model
		 */
		modelName: 'Build',

		idAttribute: 'buildId',

		url: ServiceConfig.buildsInfo.builds,

		defaults:{
			buildId: undefined,
			type: undefined,
			owner: undefined,
			state: 0,
			date_st: undefined,
			metrics: {},
			build: {},
			unitTests: {},
			funcTest: {}
		},

		parse: function(data, options) {
			data.date_st = new Date(data.date_st);
		    return data;
	  	}
	});
});
