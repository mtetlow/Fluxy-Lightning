public with sharing class flAccountEditorCtrl {
	public flAccountEditorCtrl() {
		
	}

  @AuraEnabled
  public static List<Account> getMyAccounts(){
    List<Account> myAccounts = [select AccountNumber, AccountSource, AnnualRevenue, CreatedById, CreatedDate, Description, Fax, Id, Industry, IsDeleted, Jigsaw, JigsawCompanyId, LastActivityDate, LastModifiedById, LastModifiedDate, LastReferencedDate, LastViewedDate, MasterRecordId, Name, NumberOfEmployees, OwnerId, Ownership, ParentId, Phone, PhotoUrl, Rating, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (select AccountId, AssistantName, AssistantPhone, Birthdate, CreatedById, CreatedDate, Department, Description, Email, EmailBouncedDate, EmailBouncedReason, Fax, FirstName, HomePhone, Id, IsDeleted, IsEmailBounced, Jigsaw, JigsawContactId, LastActivityDate, LastCURequestDate, LastCUUpdateDate, LastModifiedById, LastModifiedDate, LastName, LastReferencedDate, LastViewedDate, LeadSource, MasterRecordId, MobilePhone, Name, OtherPhone, OwnerId, Phone, PhotoUrl, ReportsToId, Salutation, SystemModstamp, Title from Contacts) from Account WHERE OwnerId=:UserInfo.getUserId()];
    return myAccounts;
  }

  @AuraEnabled
  public static List<Account> addContactReturnMyAccounts(Id accountId, String firstName, String lastName){
    Contact contactToInsert = new Contact(FirstName=firstName, LastName=lastName, AccountId=accountId);
    insert contactToInsert;
    return flAccountEditorCtrl.getMyAccounts();
  }

  @AuraEnabled
  public static List<Account> deleteContactReturnMyAccounts(Id contactId){
    Contact contactToDelete = new Contact(Id=contactId);
    delete contactToDelete;
    return flAccountEditorCtrl.getMyAccounts();
  }
}