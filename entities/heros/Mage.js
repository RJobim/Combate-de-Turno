const Caracter = require("./Caracter");

class Mage extends Caracter {
    constructor(name, life, attack, defense, spellPower) {
        super(name, life, attack, defense);
        this.spellPower = spellPower;
        this.classe = "Mago";
    }

    attackEnemy(enemy) {
        const diceValue = this.rollDice10()
        const damage = (this.attack + this.spellPower - enemy.defense) + this.tipeOfAttack(diceValue);
        enemy.life -= damage
        console.log(`${this.name} atacou ${enemy.name} causando ${damage} de dano`)
    }

    tipeOfAttack(value) {
        if (value <= 2) {
            console.log(`${this.name} vai atacar com um feitiço de fogo que aumenta o ataque em 3`)
            return 3
        } else if (value >= 3 && value <= 5) {
            console.log(`${this.name} vai atacar com um feitiço de água que aumenta o ataque em 5`)
            return 5
        } else if (value >= 6 && value <= 7) {
            console.log(`${this.name} vai atacar com um feitiço de terra que aumenta o ataque em 7`)
            return 7
        } else {
            console.log(`${this.name} vai atacar com um feitiço de ar que aumenta o ataque em 9`)
            return 9
        }
    }
}

module.exports = Mage;