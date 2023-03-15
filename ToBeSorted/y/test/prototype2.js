function Gamer(name, level, character, value) {
  this.name = name;
  this.level = level;
  this.character = character;
  this.value = value;

  this.upLevel = function (value) {
    this.level += value;

    console.log(this.level);
  };

  // way2
  // Wuqi.call(this);

  // way3
  // Wuqi.call(this);
}

function Wuqi() {
  this.wuqiName = 'longlinjian';
}

// way1
// Gamer.prototype = new Wuqi();

// wang3
Gamer.prototype = new Wuqi();
Gamer.prototype.constructor = Wuqi;

const gamer1 = new Gamer('leemo', 70, 'ck', '80779');
const gamer2 = new Gamer('bb54', 69, 'ws', '00976');

gamer1.upLevel(100);

console.log(gamer1.wuqiName);
console.log(gamer2.wuqiName);

gamer1.wuqiName = 'bawangqiang';

console.log(gamer1.wuqiName);
console.log(gamer2.wuqiName);
