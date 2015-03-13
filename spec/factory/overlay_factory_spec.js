describe("Overlay factory", function() {
    var Overlay, overlay;
    beforeEach(function() {
        module("Contact");
        inject(getFactory);
    });

    function getFactory(_Overlay_) {
        Overlay = _Overlay_;
    }

    beforeEach(function() {
        overlay = new Overlay();
    });

    it("should init overlay state correctly", function() {
        expect(overlay.isVisible()).toEqual(false);
    });

    describe("sending", function() {
        it("should set sending when call displaySending", function() {
            overlay.displaySending();
            expect(overlay.sending).toEqual(true);
        });

        it("should display overlay when sending", function() {
            overlay.displaySending();
            expect(overlay.isVisible()).toEqual(true);
        });
    });

    describe("success", function() {
        it("should set success when displaySuccess", function() {
            overlay.displaySuccess();
            expect(overlay.success).toEqual(true);
        });

        it("should display overlay when displaySuccess", function() {
            overlay.displaySuccess();
            expect(overlay.isVisible()).toEqual(true);
        });

        it("should hide sending", function() {
            overlay.displaySending();
            overlay.displaySuccess();
            expect(overlay.sending).toEqual(false);
        });
    });

    describe("error", function() {
        it("should set error when displayError", function() {
            overlay.displayError();
            expect(overlay.error).toEqual(true);
        });

        it("should display overlay when displayError", function() {
            overlay.displayError();
            expect(overlay.isVisible()).toEqual(true);
        });

        it("should hide sending", function() {
            overlay.displaySending();
            overlay.displayError();
            expect(overlay.sending).toEqual(false);
        });
    });

    describe("hide", function() {
        it("should hide sending overlay", function() {
            overlay.displaySending();
            overlay.hide();
            expect(overlay.isVisible()).toEqual(false);
        });

        it("should hide sucess overlay", function() {
            overlay.displaySuccess();
            overlay.hide();
            expect(overlay.isVisible()).toEqual(false);
        });

        it("should hide error overlay", function() {
            overlay.displayError();
            overlay.hide();
            expect(overlay.isVisible()).toEqual(false);
        });
    });
});