var params = [
    "$http",
    "CONTACT_API_URL",
    ContactService
];

angular.module("Contact").service("ContactService", params);

function ContactService($http, CONTACT_API_URL) {
    "use strict";

    this.add = function(saveData) {
        return $http.post(CONTACT_API_URL.ADD, saveData);
    };
}