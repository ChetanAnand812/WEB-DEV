class Animal{
    constructor(name) {
        this.name = name;
        console.log("Object is created....")
    }

    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("kodd raha hoon")
    }
}

// let a = new Animal("Bunny");
// console.log(a)
// console.log(a.eats())
// console.log(a.jumps())

class Lion extends Animal {
    constructor(name){
        super(name)    // when we override a method we dont want the method of the previous class to go in main. we can execute it using super keyword.
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)
 