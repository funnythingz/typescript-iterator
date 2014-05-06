var Iterator = (function () {
    function Iterator(lists) {
        if (typeof lists === "undefined") { lists = null; }
        this.lists = lists;
        this.count = 0;
    }
    Iterator.prototype.hasNext = function () {
        if (this.count < this.lists.length) {
            return true;
        }

        return false;
    };

    Iterator.prototype.next = function () {
        var result;

        if (this.hasNext()) {
            result = this.lists[this.count];
            this.count += 1;

            return result;
        }

        return null;
    };
    return Iterator;
})();
