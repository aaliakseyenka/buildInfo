define(['jquery', 'underscore', 'backbone'], function (Config) {
	return Backbone.Model.extend({
		/*
		* variable specifying name of the Model
		 */
		modelName: 'BuildInfo',

		idAttribute: 'id',

		//url: Config.*,

		defaults: {
			'id': undefined,
			'owner': undefined,
			'state': undefined,
			'metrics': undefined,
			'build': undefined,
			'unitTests': undefined,
			'funcTest': undefined
		}
	});
});
