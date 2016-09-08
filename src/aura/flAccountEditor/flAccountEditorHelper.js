({
  fetchMyAccounts : function(component, event, helper) {
    var action = component.get("c.getMyAccounts");
    action.setCallback(this, function(response){
      helper.parseMyAccountsResponse(response, component, event, helper);
    });
    $A.enqueueAction(action);
  },
  //This method applies the server response to the component
  parseMyAccountsResponse : function(response, component, event, helper){
    var state = response.getState();
    if(state === "SUCCESS"){
        var myAccounts = response.getReturnValue();
        component.set('v.accounts', myAccounts);
    }else{
        console.error(action.getError());
    }
    component.set('v.operationPending', false);
  },
  createContact : function(accountId, firstName, lastName, component, event, helper){
    //Show the loading mask
    component.set('v.operationPending', true);
    //Define and fire the server sided action
    var action = component.get("c.addContactReturnMyAccounts");
    action.setParams({
      accountId: accountId,
      firstName: firstName,
      lastName: lastName
    });

    action.setCallback(this, function(response){
      helper.parseMyAccountsResponse(response, component, event, helper);
      component.set('v.newContactExpandedAccountId',null);
      component.set('v.expandedAccountId',accountId);
    });

    $A.enqueueAction(action);  
  },
  deleteContact : function(contactId, component, event, helper){
    //Show the loading mask
    component.set('v.operationPending', true);
    //Define and fire the server sided action
    var action = component.get("c.deleteContactReturnMyAccounts");
    action.setParams({
      contactId: contactId
    });

    action.setCallback(this, function(response){
      helper.parseMyAccountsResponse(response, component, event, helper);
    });

    $A.enqueueAction(action);  
  }
})