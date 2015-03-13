describe("Contact controller", function() {
    var controller, $scope, ContactService, Contact, Overlay;

    beforeEach(function() {
        module("Contact");
        inject(createController);
    });

    function createController($rootScope, $controller, _ContactService_, _Contact_, _Overlay_) {
        var configs;
        $scope = $rootScope.$new();
        ContactService = _ContactService_;
        Contact = _Contact_;
        Overlay = _Overlay_;

        configs = {
            $scope: $scope,
            ContactService: ContactService,
            Contact: Contact,
            Overlay: Overlay
        };
        controller = $controller("ContactController", configs);
    }

    describe("init", function() {
        it("should call initForm when init page", function() {
            spyOn(controller, "initForm");
            controller.initPage();
            expect(controller.initForm).toHaveBeenCalled();
        });

        it("should init form correctly", function() {
            controller.initForm();
            expect(controller.contact.email).toEqual("");
            expect(controller.contact.subject).toEqual("");
            expect(controller.contact.message).toEqual("");
        });

        it("should init overlay correctly", function() {
            controller.initPage();
            expect(controller.overlay.isVisible()).toEqual(false);
        });
    });

    describe("submit", function() {
        var promise;
        beforeEach(function() {
            controller.initPage();
            promise = {
                then: function() {}
            };
        });

        it("should call service add with correct data", function() {
            spyOn(ContactService, "add").and.returnValue(promise);
            controller.addContact();
            expect(ContactService.add).toHaveBeenCalledWith(controller.contact.getAddJson());
        });

        it("should call service with correct callback", function() {
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

        it("should call displaySending when addContact", function() {
            spyOn(controller.overlay, "displaySending");
            spyOn(ContactService, "add").and.returnValue(promise);
            controller.addContact();
            expect(controller.overlay.displaySending).toHaveBeenCalled();
        });

        it("should call displaySuccess when save success", function() {
            spyOn(controller.overlay, "displaySuccess");
            controller.addContactSuccess();
            expect(controller.overlay.displaySuccess).toHaveBeenCalled();
        });

        it("should call displayError when save success", function() {
            spyOn(controller.overlay, "displayError");
            controller.addContactError();
            expect(controller.overlay.displayError).toHaveBeenCalled();
        });
    });
});