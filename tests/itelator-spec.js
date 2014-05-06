var TEST;
(function (TEST) {
    chai.should();

    var Name = (function () {
        function Name(value) {
            this.value = value;
        }
        return Name;
    })();

    describe("Iterator", function () {
        it("create instance", function () {
            var iterator = new PATTERN.Iterator();

            iterator.should.be.instanceof(PATTERN.Iterator);
        });

        describe("use next() & hasNext()", function () {
            var names = [new Name('hoge'), new Name('ahya'), new Name('hage')];

            var iterator = new PATTERN.Iterator(names);

            it("when start count", function () {
                iterator.hasNext().should.be.true;
            });

            it("when iteration of object", function () {
                while (iterator.hasNext()) {
                    iterator.next().should.be.instanceof(Name);
                }
            });

            it("when completed count", function () {
                iterator.hasNext().should.be.false;
            });
        });
    });
})(TEST || (TEST = {}));
