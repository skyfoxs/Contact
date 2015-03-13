angular.module("Contact").factory("Contact", function() {
    "use strict";

    function Contact() {
        this.email = "";
        this.subject = "";
        this.message = "";

        this.getAddJson = function() {
            return {
                Email: this.email,
                Title: this.subject,
                Content: this.message
            };
        };
    }

    return Contact;
});