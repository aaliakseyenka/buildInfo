define(['views/Viewport', 'jquery', 'underscore', 'backbone'], function (Viewport) {
	return Backbone.Router.extend({

		defaultRoute: 'builds',

		routes: {
			'': 'dispatch',
			'index/:viewId': 'dispatch'
		},

		initialize: function (options) {
			this.createViewport();
		},

		/**
		* @method createViewport Removes login view and sets viewport
		*/
		createViewport: function () {
			if (!this.viewport) {
				this.viewport = new Viewport({el : $(document.body)});
			}
		},

		dispatch: function (viewId) {
			viewId = viewId || this.defaultRoute;
			this.viewport.setView(viewId);
		},

		/*
		* @method destroyView Serves for destroying views
		*/
		destroyView: function (view) {
			if (view) {
				view.remove();
			}
		}
	});
});
