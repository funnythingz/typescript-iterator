module PATTERN {

    export class Iterator {

        private count: number = 0;

        constructor(public length: number = 0) {}

        hasNext(): boolean {
            if(this.count < this.length) {
                return true;
            }
            return false;
        }

        toNext() {
            if(this.hasNext()) {
                this.count += 1;
            }
        }

    }

}
