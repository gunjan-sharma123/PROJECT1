sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "shop/project1/model/models",
     "sap/ui/model/Filter",
     "sap/ui/model/FilterOperator"
], (Controller,models,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("shop.project1.controller.View1", {
        onInit() {
            //its best practice to call the router inside oninit
            this.Router = this.getOwnerComponent().getRouter();
        },
        onNext : function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idView2");
        },
        onNavNext: function(){
            this.onNext();
        },
        onDeleteItems: function(){
           var oList = this.getView().byId("idLST");
          var aSelectedItems = oList.getSelectedItems();
          aSelectedItems.forEach(item => {
            oList.removeItem(item);
          });
        },
        onFruitSelect: function(oEvent){
              var oSelectedItem = oEvent.getParameter("listItem")
            //step1- get the router object
             this.Router
            //step2- trigger the route
             this.Router.navTo("second",
                {
                    fruitId: oSelectedItem.getBindingContextPath().split("/")[2]
                }
             );
        },
        onSearch: function(oEvent){
            //step1:- what is the user type in search field
           var sSearch = oEvent.getParameter("query");
            //step2:- construct the filter object with operand and operator
            var oFilter =  new Filter ("name" , FilterOperator.Contains ,sSearch);
            var oFilter2 =  new Filter ("type" , FilterOperator.Contains ,sSearch);
            var aFilter = [oFilter,oFilter2];
            var oMaster = new Filter ({
                filters : aFilter,
                and:false
            });
            //step3:- get the list object
            var oList = this.getView().byId("idLST");
            //step4:- inject the filter to the list
            oList.getBinding ("items").filter(oMaster);
        }
    });
});