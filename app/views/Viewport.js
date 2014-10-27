define(['text!templates/viewport-tpl.html', 'views/builds/index', 'jquery', 'underscore', 'backbone'], function (ViewportTemplate, BuildsView) {
	return Backbone.View.extend({

		initialize: function (options) {
			_.extend(this, options);
			this.render();
			this._views = {
				builds: BuildsView
			};
		},

		render: function () {
			this.el.html(_.template(ViewportTemplate));
		},

		setView: function(viewId){
			if (this.currentView) {
				if (this.currentView && this.currentView.destroy) {
					this.currentView.destroy();
				}
				this.currentView.remove();
				delete this.currentView;
			}
			var view = this._views[viewId];
			if(view){
				$(".main-panel").append('<div class="content"></div>');
				//we specify boundEl to allow child views create needed markup inside this element
				this.currentView = new view({ el: $('.content') });	
			}
		},

		destroy: function () {
			if (this.currentView && this.currentView.destroy) {
				this.currentView.destroy();
			}
		}
	});
});