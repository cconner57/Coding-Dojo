function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function () {
        console.log(this.name);
        return this;
    }
    this.showStats = function () {
        show_speed = speed;
        show_strength = strength;
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed + ', Strength: ' + strength);
        return this;
    }
    this.drinkSake = function () {
        this.health += 10;
        return this;
    }
}
var ninja1 = new Ninja('Chris');
ninja1.sayName();
ninja1.showStats();