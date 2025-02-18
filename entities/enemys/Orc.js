const Goblin = require("./Goblin");

class Orc extends Goblin {
    constructor(name, life, attack, defense){
        super(name, life, attack, defense);
        this.race = 'Orc'
    }

    calculateHealth(){
        return this.level * 20 
    }

    calculateAttack(){
        return this.level * 6 
    }

    calculateDefense(){
        return this.level * 6
    }
}

module.exports = Orc;