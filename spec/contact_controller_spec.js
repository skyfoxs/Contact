describe("Contact controller", function() {
    var controller, $scope, ContactService, Contact;

    beforeEach(function() {
        module("Contact");
        inject(createController);
    });

    function createController($rootScope, $controller, _ContactService_, _Contact_) {
        var configs;
        $scope = $rootScope.$new();
        ContactService = _ContactService_;
        Contact = _Contact_;

        configs = {
            $scope: $scope,
            ContactService: ContactService,
            Contact: Contact
        };
        controller = $controller("ContactController", configs);
    }

    it("should init form correctly", function() {
        controller.initForm();
        expect(controller.contact.email).toEqual("");
        expect(controller.contact.subject).toEqual("");
        expect(controller.contact.message).toEqual("");
    });

    it("should call service add with correct data", function() {
        var promise = {
            then: function() {}
        };
        controller.initForm();
        spyOn(ContactService, "add").and.returnValue(promise);
        controller.addContact();
        expect(ContactService.add).toHaveBeenCalledWith(controller.contact.getAddJson());
    });

    it("should call service with correct callback", function() {
        var promise = {
            then: function() {}
        };
        controller.initForm();
        spyOn(ContactService, "add").and.returnValue(promise);
        spyOn(promise, "then");
        controller.addContact();
        expect(promise.then).toHaveBeenCalledWith(controller.addContactSuccess, controller.addContactError);
    });

    it("should call init form when add success", function() {
        spyOn(controller, "initForm");
        controller.addContactSuccess();
        expect(controller.initForm).toHaveBeenCalled();
    });
});