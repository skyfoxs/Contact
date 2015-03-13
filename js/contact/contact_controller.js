var params = [
    "$scope",
    "ContactService",
    "Contact",
    "Overlay",
    ContactController
];

angular.module("Contact").controller("ContactController", params);

function ContactController($scope, ContactService, Contact, Overlay) {
    "use strict";
    var self = this;

    this.initPage = function() {
        this.initForm();
        this.overlay = new Overlay();
    };

    this.initForm = function() {
        this.contact = new Contact();
    };

    this.addContact = function() {
        this.overlay.displaySending();
        ContactService.add(self.contact.getAddJson())
            .then(self.addContactSuccess, self.addContactError);
    };

    this.addContactSuccess = function() {
        self.initForm();
        self.overlay.displaySuccess();
    };

    this.addContactError = function() {
        self.overlay.displayError();
    };
}