typescript-iterator
====================

Iterator pattern of TypeScript

## Usage

```TypeScript
/// <reference path="iterator.ts" />

class Hoge {
    constructor(public value: string) {}
}

(function() {
    
    var nameList: Array<Hoge> = [new Hoge('hoge'), new Hoge('ahya'), new Hoge('hage')];
    
    var iterator: Iterator<Hoge> = new Iterator<Hoge>(nameList);
    
    while(iterator.hasNext()) {
        console.log(iterator.next()); // Hoge
    }
    
})();
```

&copy; funnythingz
