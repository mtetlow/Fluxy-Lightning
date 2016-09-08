({
  doInit : function(component, event, helper){
    helper.fetchMyAccounts(component, event, helper);
  },
  handleGenericEvent : function(component, event, helper){
    var payload = event.getParam('payload');
    switch(event.getParam('actionType')){
      case 'navigateToRecordId':
        var navigateEvent = $A.get("e.force:navigateToSObject");
        navigateEvent .setParams({
          "recordId": payload.Id
        });
        navigateEvent.fire(); 
        event.stopPropagation();
        break;
      case 'toggleAccountExpanded':
        var currentExpandedAccountId = component.get('v.expandedAccountId');
        var newValue = (currentExpandedAccountId === payload.accountId) ? null : payload.accountId;
        component.set('v.expandedAccountId', newValue);
        event.stopPropagation();
        break;
      case 'toggleAccountNewContact':
        var currentNewContactExpandedAccountId = component.get('v.newContactExpandedAccountId');
        var newValue = (currentNewContactExpandedAccountId === payload.accountId) ? null : payload.accountId;
        component.set('v.newContactExpandedAccountId', newValue);
        event.stopPropagation();
        break;
      case 'addNewContact':
        helper.createContact(payload.accountId, payload.firstName, payload.lastName, component, event, helper);
        event.stopPropagation();
        break;
      case 'deleteContact':
        helper.deleteContact(payload.contactId, component, event, helper);
        event.stopPropagation();
        break;
      default:
        break;
    }
  }
})