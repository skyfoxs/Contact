var params = [
    "$scope",
    "ContactService",
    "Contact",
    ContactController
];

angular.module("Contact").controller("ContactController", params);

function ContactController($scope, ContactService, Contact) {
    "use strict";
    var self = this;

    this.initForm = function() {
        this.contact = new Contact();
    };

    this.addContact = function() {
        ContactService.add(self.contact.getAddJson())
            .then(self.addContactSuccess, self.addContactError);
    };

    this.addContactSuccess = function() {
        self.initForm();
    };

    this.addContactError = function() {};
}