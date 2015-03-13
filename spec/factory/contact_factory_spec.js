describe("Contact factory", function() {
    var Contact;
    beforeEach(function() {
        module("Contact");
        inject(getFactory);
    });

    function getFactory(_Contact_) {
        Contact = _Contact_;
    }

    it("should create contact object correctly", function() {
        var contact = new Contact();
        expect(contact.email).toEqual("");
        expect(contact.subject).toEqual("");
        expect(contact.message).toEqual("");
    });

    it("should create json object for api correctly", function() {
        var contact = new Contact();
        contact.email = "test@example.com";
        contact.subject = "my title";
        contact.message = "my message";

        expect(contact.getAddJson()).toEqual({
            Email: contact.email,
            Title: contact.subject,
            Content: contact.message
        });
    });
});