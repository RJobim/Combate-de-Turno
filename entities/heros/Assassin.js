const Caracter = require("./Caracter");

class Assassin extends Caracter {
    constructor(name, life, attack, defense){
        super(name, life, attack, defense);
        this.classe = 'Assassino'
    }
    attackEnemy(enemy){
        const diceValue = this.rollDice6()
        const damage = (this.attack - enemy.defense) * diceValue
        enemy.life -= damage
        console.log(`${this.name} tirou ${diceValue} no d6`)
        console.log(`${this.name} atacou ${enemy.name} causando ${damage} de dano`)
    }
}

module.exports = Assassin;