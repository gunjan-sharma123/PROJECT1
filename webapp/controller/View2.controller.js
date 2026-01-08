sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "shop/project1/model/models"
], (Controller,models) => {
    "use strict";

    return Controller.extend("shop.project1.controller.View2", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("second").attachPatternMatched(this.herculis, this);

        },
        herculis: function(oEvent){
            debugger;
            var fruitId = oEvent.getParameter("arguments").fruitId;
            var sPath = '/fruits/' + fruitId;
            this.getView().bindElement(sPath);
        },
        onBack: function(){
              var oAppCon = this.getView().getParent();
            oAppCon.to("idView1");
        }
    });
});