const Caracter = require("./Caracter");

class Warrior extends Caracter {
    constructor(name, life, attack, defense, shield){
        super(name, life, attack, defense)
        this.classe = 'Guerreiro'
        this.shield = shield;
        this.mode = 'Defesa'
    }

    changeMode(){
        if(this.mode === 'Defesa'){
            this.mode = 'Ataque'
            const newDefensePts = this.defense -= this.shield
            console.log(`${this.name} passou para o modo de ataque`)
            console.log(`Os pontos de defesa voltaram para ${newDefensePts}`)
        } else {
            this.mode = 'Defesa'
            const newDefensePts = this.defense += this.shield
            console.log(`${this.name} passou para o modo de defesa`)
            console.log(`Os pontos de defesa aumentaram para ${newDefensePts}`)
        }
    }

    attackEnemy(enemy){
        if(this.mode === 'Ataque'){
            super.attackEnemy(enemy)
        } else {
            console.log('Não pode atacar em modo de defesa.')
        }
    }
}

module.exports = Warrior;