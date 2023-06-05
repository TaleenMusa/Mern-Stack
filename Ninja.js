class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja's name: ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} your health increased by 10.`);
    }
}
const ninja1 = new Ninja("Taleen");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
