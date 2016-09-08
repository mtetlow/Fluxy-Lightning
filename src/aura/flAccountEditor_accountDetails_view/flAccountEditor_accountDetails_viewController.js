({
  _navigateToRecord : function(component, event, helper) {
    //Fire the event to navigate to the account, this is handled in flAccountEditor
    var accountId = component.get('v.account.Id');
    var navigateToRecordEvent = component.getEvent('genericEvent');
    navigateToRecordEvent.setParams({
      'actionType': 'navigateToRecordId',
      'payload': {
        Id: accountId
      }
    });
    navigateToRecordEvent.fire();
  },
  _toggleAccountExpanded : function(component, event, helper){
    //Fire the event to expand the account to show contacts, this is handled in flAccountEditor
    var accountId = component.get('v.account.Id');
    var toggleAccountEvent = component.getEvent('genericEvent');
    toggleAccountEvent.setParams({
      'actionType': 'toggleAccountExpanded',
      'payload': {
        accountId: accountId
      }
    });
    toggleAccountEvent.fire();
  },
  _toggleNewContact : function(component, event, helper){
    //Fire the event to show the new contact form for the account, this is handled in flAccountEditor
    var accountId = component.get('v.account.Id');
    var toggleAccountNewContactEvent = component.getEvent('genericEvent');
    toggleAccountNewContactEvent.setParams({
      'actionType': 'toggleAccountNewContact',
      'payload': {
        accountId: accountId
      }
    });
    toggleAccountNewContactEvent.fire();
  },
  _addNewContact : function(component, event, helper){
    //Fire the event to add a contact to the account, this is handled in flAccountEditor
    var accountId = component.get('v.account.Id');
    var firstName = component.find('firstName').getElement().value;
    var lastName = component.find('lastName').getElement().value;
    var addNewContactEvent = component.getEvent('genericEvent');
    addNewContactEvent.setParams({
      'actionType': 'addNewContact',
      'payload': {
        accountId: accountId,
        firstName: firstName,
        lastName: lastName
      }
    });
    addNewContactEvent.fire();
  }
})