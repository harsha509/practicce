

// oop

// class
// object
// inheritance
// polymorphism = poly = many | morphism = behaviours
// abstraction



class Animal {
    // constructor is called when obj is created
    constructor(animalName) {
        this.animalName = animalName;
    }

    sleep() {
        console.log(this.animalName+" is sleeping");
    }
}



class Bird extends Animal {

    constructor(name) {
        super(name);
        this.birdName = name;
    }

    fly() {
        console.log(this.birdName+" is flying");
    }

}

































let Tiger = new Animal("Tiger");

Tiger.sleep();


let sparrow = new Bird("Sparrow");
sparrow.sleep();


sparrow.fly();