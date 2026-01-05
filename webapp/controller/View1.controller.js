sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "shop/project1/model/models",
     "sap/ui/model/Filter",
     "sap/ui/model/FilterOperator"
], (Controller,models,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("shop.project1.controller.View1", {
        onInit() {
        },
        onSearch: function(oEvent){
            //step1:- what is the user type in search field
           var sSearch = oEvent.getParameter("query");
            //step2:- construct the filter object with operand and operator
            var oFilter =  new Filter ("name" , FilterOperator.Contains ,sSearch);
            var aFilter = [oFilter];
            //step3:- get the list object
            var oList = this.getView().byId("idLST");
            //step4:- inject the filter to the list
            oList.getBinding ("items").filter(aFilter);
        }
    });
});