describe("Contact service", function() {
    var ContactService, CONTACT_API_URL,
        $http = {
            post: function() {}
        };

    beforeEach(function() {
        module("Contact", function($provide) {
            $provide.value('$http', $http);
        });
        inject(getService);
    });

    function getService(_ContactService_, _CONTACT_API_URL_) {
        ContactService = _ContactService_;
        CONTACT_API_URL = _CONTACT_API_URL_;
    }

    describe("Add", function() {
        var saveData, expectedUrl;

        beforeEach(function() {
            saveData = {
                Email: "test@example.com",
                Title: "contact title",
                Content: "contact content"
            };
            expectedUrl = CONTACT_API_URL.ADD;
        });

        it("should call post to with correct url", function() {
            spyOn($http, "post");
            ContactService.add(saveData);
            expect($http.post).toHaveBeenCalledWith(expectedUrl, saveData);
        });
    });
});