 class Caracter {
    constructor(name, life, attack, defense){
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }

    attackEnemy(enemy){
        const damage = this.attack - enemy.defense
        enemy.life -= damage
        console.log(`${this.name} atacou ${enemy.name} causando ${damage} de dano`)
    }


    rollDice20(){
        return Math.floor(Math.random() * 20) + 1;
    }

    rollDice6(){
        return Math.floor(Math.random() * 6) + 1;
    }

    rollDice10(){
        return Math.floor(Math.random() * 10) + 1;
    }

    rollDice30(){
        return Math.floor(Math.random() * 30) + 1;
    }
}

module.exports = Caracter;
