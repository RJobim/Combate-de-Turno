//Heros
const Assassin = require("./entities/heros/Assassin");
const Cleric = require("./entities/heros/Cleric");
const Mage = require("./entities/heros/Mage");
const Warrior = require("./entities/heros/Warrior");

//Enemys
const Goblin = require("./entities/enemys/Goblin");
const Orc = require("./entities/enemys/Orc");
const Troll = require("./entities/enemys/Troll");


const assassino = new Assassin('Jobim', 100, 30, 10)
const guerreiro = new Warrior('Rebbelato', 100, 15, 20, 20)
const mago = new Mage('Mentes', 100, 5, 5, 25)
const clerigo = new Cleric('Ansioso', 100, 0, 10, 10)

const goblin = new Goblin('Goblin')
const orc = new Orc('Orc')
const troll = new Troll('Troll')


console.table({
    assassino,
    guerreiro,
    mago,
    clerigo,
})

console.table({
    goblin,
    orc,
    troll
})
