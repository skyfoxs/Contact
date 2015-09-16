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
    this.scope = $scope;

    this.initPage = function() {
        this.initForm();
        this.overlay = new Overlay();
    };

    this.initForm = function() {
        this.contact = new Contact();
    };

    this.addContact = function() {
        this.overlay.displaySending();
        self.callAddContachService(self.contact.getAddJson())
            .then(self.addContactSuccess, self.addContactError);
    };

    this.callAddContachService = function(data) {
        return ContactService.add(data);
    };

    this.addContactSuccess = function() {
        self.initForm();
        self.overlay.displaySuccess();
        self.scope.contactForm.$setPristine();
    };

    this.addContactError = function() {
        self.overlay.displayError();
    };
}