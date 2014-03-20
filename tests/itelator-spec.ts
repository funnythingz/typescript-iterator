/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/iterator.ts" />

module TEST {

    chai.should();

    describe("Iterator", () => {

        it("create instance", () => {

            var iterator: PATTERN.Iterator = new PATTERN.Iterator();

            iterator.should.be.instanceof(PATTERN.Iterator);

        });

        describe("use hasNext() & toNext()", () => {

            var iterator: PATTERN.Iterator = new PATTERN.Iterator(10);

            it("when start count", () => {

                iterator.hasNext().should.be.true;

            });

            it("when completed count", () => {

                while(iterator.hasNext()) {
                    iterator.toNext();
                }

                iterator.hasNext().should.be.false;

            });

        });

    });

}
