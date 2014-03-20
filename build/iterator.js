var PATTERN;
(function (PATTERN) {
    var Iterator = (function () {
        function Iterator(length) {
            if (typeof length === "undefined") { length = 0; }
            this.length = length;
            this.count = 0;
        }
        Iterator.prototype.hasNext = function () {
            if (this.count < this.length) {
                return true;
            }
            return false;
        };

        Iterator.prototype.toNext = function () {
            if (this.hasNext()) {
                this.count += 1;
            }
        };
        return Iterator;
    })();
    PATTERN.Iterator = Iterator;
})(PATTERN || (PATTERN = {}));
