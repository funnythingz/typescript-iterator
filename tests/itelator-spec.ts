/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/iterator.ts" />

module HACKLE {

    chai.should();

    describe("Iterator", function() {

        it("create instance of Iterator", function() {
            var iterator: PATTERN.Iterator = new PATTERN.Iterator();
            iterator.should.be.instanceof(PATTERN.Iterator);
        });


        describe("Iterator", function() {

            var iterator: PATTERN.Iterator = new PATTERN.Iterator(10);

            it("when start count", function() {
                iterator.hasNext().should.be.true;
            });

            it("when completed count", function() {
                while(iterator.hasNext()) {
                    iterator.toNext();
                }
                iterator.hasNext().should.be.false;
            });
        });

    });

}
