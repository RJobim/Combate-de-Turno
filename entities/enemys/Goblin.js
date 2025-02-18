class Goblin {
    constructor(name){
        this.name = name;
        this.level = this.rollDice6();
        this.health = this.calculateHealth();
        this.attack = this.calculateAttack();
        this.defense = this.calculateDefense();
        this.race = 'Goblin'
    }

    rollDice6(){
        return Math.floor(Math.random() * 6) + 1;
    }

    calculateHealth(){
        return this.level * 10 
    }

    calculateAttack(){
        return this.level * 3 
    }

    calculateDefense(){
        return this.level * 3
    }
}

module.exports = Goblin;