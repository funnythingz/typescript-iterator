/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/iterator.ts" />

module TEST {

    chai.should();

    class Name {
        constructor(public value: string) {}
    }

    describe("Iterator", () => {

        it("create instance", () => {

            var iterator: Iterator<any> = new Iterator<any>();

            iterator.should.be.instanceof(Iterator);

        });

        describe("use next() & hasNext()", () => {

            var names: Name[] = [new Name('hoge'), new Name('ahya'), new Name('hage')];

            var iterator: Iterator<Name> = new Iterator<Name>(names);

            it("when start count", () => {

                iterator.hasNext().should.be.true;

            });

            it("when iteration of object", () => {

                while(iterator.hasNext()) {
                    iterator.next().should.be.instanceof(Name);
                }

            });

            it("when completed count", () => {

                iterator.hasNext().should.be.false;

            });

        });

    });

}
