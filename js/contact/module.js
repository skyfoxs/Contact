var host = "http://localhost:8080";

angular.module("Contact", []);
angular.module("Contact").constant("CONTACT_API_URL", {
    ADD: host + "/contact"
});