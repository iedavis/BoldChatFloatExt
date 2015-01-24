/**
 * @fileoverview BoldChat Floating Invite
 * Option.
 * @author ian.davis@oracle.com
 */

define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  ['knockout','ccLogger'],

  //-------------------------------------------------------------------
  // MODULE DEFINITION
  //-------------------------------------------------------------------
  function(ko, ccLogger) {

    "use strict";

    return {

      onLoad: function(widgetModel) {

        if(widgetModel.bcAccountID() === "") ccLogger.info("BoldChat Widget needs Account ID configured.");
        if(widgetModel.bcWebsiteID() === "") ccLogger.info("BoldChat Widget needs Website ID configured.");

        if(widgetModel.bcAccountID() !== "" && widgetModel.bcWebsiteID() !== "") {
          window._bcvma = [];
          _bcvma.push(["setAccountID", widgetModel.bcAccountID()]);
          _bcvma.push(["setParameter", "WebsiteID", widgetModel.bcWebsiteID()]);
          _bcvma.push(["setParameter", "InvitationID", widgetModel.bcInvitationID()]);
          _bcvma.push(["setParameter", "VisitRef", widgetModel.user().id()]);
          _bcvma.push(["setParameter", "VisitName", widgetModel.user().firstName() + " " + widgetModel.user().lastName()]);
          _bcvma.push(["setParameter", "VisitEmail", widgetModel.user().emailAddress()]);
          _bcvma.push(["addFloat", {type: "chat", id: widgetModel.bcButtonID()}]);
          _bcvma.push(["pageViewed"]);
          
          require([document.location.protocol + '//vmss.boldchat.com/aid/' + widgetModel.bcAccountID() + '/bc.vms4/vms.js']);
        }
      }
    };
  }
);