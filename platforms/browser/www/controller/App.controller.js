sap.ui.define([
	'controller/BaseController',
	'sap/ui/model/json/JSONModel',
    'sap/m/BusyDialog'
	], function(BaseController, JSONModel, BusyDialog) {
		"use strict";

		return BaseController.extend("controller.App", {
			onInit: function() {
				this.getView().addStyleClass(sap.ui.Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy");
			}
		});
});