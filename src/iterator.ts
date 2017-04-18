export class Iterator<T> {

    private count: number = 0;
    private lists: Array<T>;

    constructor(lists: Array<T> = null) {
        this.lists = lists;
    }

    public hasNext(): boolean {

        if (this.count < this.lists.length) {
            return true;
        }

        return false;

    }

    public next(): T {

        var result: T;

        if (this.hasNext()) {

            result = this.lists[this.count];
            this.count += 1;

            return result;
        }

        return null;

    }

    public remove(): void {

        this.lists.splice(this.count - 1, 1);
        this.count = (this.count - 1);
    }

    public getArray(): Array<T> {

        return this.lists;
    }

    public toString(): string {

        let result: string = '';

        for (let s of this.lists) {
            
            result += String(s);
            result += ', ';
        }

        return result;
    }

    public equals(iterator: Iterator<T>): boolean {
        
        let iteratorArray: Array<T> = iterator.getArray();

        return this.lists.every(function (el, index, arr): boolean {
            
            if (iteratorArray[index] == el) {
                
                return true;
            } else {
                
                return false;
            }
        });
    }

}
