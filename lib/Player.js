const Potion = require('../lib/Potion');

this.inventory = [new Potion('health'), new Potion()];
//parameter set to empty string if no name is providedcd ..

function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
  }
  
  module.exports = Player;