class Iterator<T> {

    private count: number = 0;

    constructor(private lists: T[] = null) {}

    hasNext(): boolean {

        if(this.count < this.lists.length) {
            return true;
        }

        return false;

    }

    next(): T {

        var result: T;

        if(this.hasNext()) {

            result = this.lists[this.count];
            this.count += 1;

            return result;
        }

        return null;

    }

}
