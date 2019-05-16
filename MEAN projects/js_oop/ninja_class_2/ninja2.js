function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function() {
        console.log(this.name);
        return this;
    }
    this.showStats = function() {
        show_speed = speed;
        show_strength = strength;
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + speed +
            ', Strength: ' + strength);
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
        return this;
    }
    this.strength = function() {
        return strength
    }
}
Ninja.prototype.punch = function (attackedNinja) {
    if (this instanceof Ninja && attackedNinja instanceof Ninja) {
        attackedNinja.health -= 5;
        console.log(attackedNinja.name + ' was punched by ' + this.name + ' and lost 5 Health!');
        return this;
    }
}
Ninja.prototype.kick = function (attackedNinja) {
    if (this instanceof Ninja && attackedNinja instanceof Ninja) {
        var power = 15 * this.strength();
        attackedNinja.health -= power;
        console.log(attackedNinja.name + ' was kicked by ' + this.name + ' and lost ' + power +
            ' Health!');
        return this;
    }
}
let redNinja = new Ninja('Chris');
let blueNinja = new Ninja('Bob');
redNinja.punch(blueNinja);
redNinja.kick(blueNinja);