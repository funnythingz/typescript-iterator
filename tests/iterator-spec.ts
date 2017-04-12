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

            var names: Array<Name> = [new Name('hoge'), new Name('ahya'), new Name('hage')];

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
            
            describe("use equals()", () =>{
                let arrayEnd: number[] = [10, 12, 14, 16, 18, 20];
                let arrayEndFalse: number[] = [10, 12, 15, 16, 18, 20];
                
                let iterator:Iterator<number> = new Iterator<number>(arrayEnd);
                let iteratorTrue:Iterator<number> = new Iterator<number>(arrayEnd);
                let iteratorFalse:Iterator<number> = new Iterator<number>(arrayEndFalse);
                
                it("when both are equals", () => {

                iterator.equals(iteratorTrue).should.be.true;

                });
                
                it("when both are not equals", () => {

                iterator.equals(iteratorFalse).should.be.false;

                });
            });
            
            describe("use remove()", () =>{

                let iterator: Iterator<number> = new Iterator<number>([10,11,12,13,14,15,16,17,18,19,20]);
                let iteratorPostSplice: Iterator<number> = new Iterator<number>([[10, 12, 14, 16, 18, 20]);

                while (iterator.hasNext()) {

                    let value = iterator.next();

                    if (value % 2 !== 0) {
                        iterator.remove();
                    }
                }
                
                it("when elements have been splice", () => {

                iterator.equals(iteratorPostSplice).should.be.true;

                });
            });

        });

    });

}
