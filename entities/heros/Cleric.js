const Caracter = require("./Caracter");

class Cleric extends Caracter {
    constructor(name, life, attack, defense, faith){
        super(name, life, attack, defense)
        this.faith = faith
        this.classe = 'Clérigo'
    }

    attackEnemy(enemy){
        console.log(`Esse personagem não pode atacar.`)
    }

    healAlly(ally){
        const heal = this.faith + this.rollDice30()
        ally.life += heal
        console.log(`${this.name} cura ${ally.name} em ${heal} pontos de vida`)
    }

    debuffDefense(enemy){
        const debuff = this.faith + this.rollDice30()
        enemy.defense -= debuff
        console.log(`${this.name} debuffa ${enemy.name} em ${debuff} pontos de defesa`)
    }

    increasseAttack(ally){
        const attackIncrease = this.faith + this.rollDice10()
        ally.attack += attackIncrease
        console.log(`${this.name} aumenta o ataque do aliado ${ally.name} em ${attackIncrease} pontos`)
    }

    debuffAttack(enemy){
        const attackDecrease = this.faith + this.rollDice10()
        enemy.attack -= attackDecrease
        console.log(`${this.name} debuffa ${enemy.name} em ${attackDecrease} pontos de ataque`)
    }
}

module.exports = Cleric;