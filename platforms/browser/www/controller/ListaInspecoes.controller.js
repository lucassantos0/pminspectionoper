sap.ui.define([
		'jquery.sap.global',
		'controller/BaseController'
	],
	function(jQuery, BaseController) {
		"use strict";
		return BaseController.extend("controller.ListaInspecoes", {
			onInit: function() {
				this.bd = new sap.m.BusyDialog();
				this.sRotasInspecaoServiceUrl = 'http://fusionconsultoria.ddns.net:8000/sap/opu/odata/sap/ZFUS_INSPECT_PM_SRV/InspecoesSet?$format=json';
				this.oRotasInspecaoModel = new sap.ui.model.json.JSONModel();
				this.setModel(oRotasInspecaoModel,"RotasInspecao");
				this.getOwnerComponent().getRouter().getRoute("ListaInspecoes").attachMatched(this.onRouteMatched, this);
			},
			onRouteMatched: function() {
				this.oRotasInspecaoModel.loadData(this.sRotasInspecaoServiceUrl);
			},
			onSearch: function() {},

		});
	}
);