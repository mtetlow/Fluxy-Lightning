({
	_navigateToRecord : function(component, event, helper) {
    //Fire the event to navigate to a specific record id, this is handled in flAccountEditor
    var contactId = component.get('v.contact.Id');
    var navigateToRecordEvent = component.getEvent('genericEvent');
    navigateToRecordEvent.setParams({
      'actionType': 'navigateToRecordId',
      'payload': {
        Id: contactId
      }
    });
    navigateToRecordEvent.fire();
  },
  _deleteContact : function(component, event, helper){
    //Fire the event to delete a contact, this is handled in flAccountEditor
    var contactId = component.get('v.contact.Id');
    var deleteContactEvent = component.getEvent('genericEvent');
    deleteContactEvent.setParams({
      'actionType': 'deleteContact',
      'payload': {
        contactId: contactId
      }
    });
    deleteContactEvent.fire();
  }
})