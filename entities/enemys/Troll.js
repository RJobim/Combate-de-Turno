const Goblin = require("./Goblin");

class Troll extends Goblin{
    constructor(name, life, attack, defense){
        super(name, life, attack, defense)
        this.race = 'Troll'
    }

    calculateHealth(){
        return this.level * 30 
    }
tt
    calculateAttack(){
        return this.level * 9 
    }

    calculateDefense(){
        return this.level * 9
    } 
}

module.exports = Troll;