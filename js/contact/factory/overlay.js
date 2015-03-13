angular.module("Contact").factory("Overlay", function() {
    "use strict";

    function Overlay() {
        this.sending = false;
        this.success = false;
        this.error = false;

        this.isVisible = function() {
            return this.sending || this.success || this.error;
        };

        this.hide = function() {
            this.sending = this.success = this.error = false;
        };

        this.displaySending = function() {
            this.sending = true;
        };

        this.displaySuccess = function() {
            this.toggleDisplay('success');
        };

        this.displayError = function() {
            this.toggleDisplay('error');
        };

        this.toggleDisplay = function(display) {
            this[display] = true;
            this.sending = false;
        };
    }

    return Overlay;
});