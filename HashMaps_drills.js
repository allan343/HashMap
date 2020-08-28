var Map = require('./HashMap.js');
var Map2 = require('./HashMap2.js');

function unique(str) {
    var result = '';
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
  }

function Hashmapstuff(){
/*
    let lotr = new Map();
    lotr.set("Hobbit","Bilbo");
    console.log(lotr._getcapacity());
    lotr.set("Wizard","Gandalf");
    console.log(lotr._getcapacity());
    lotr.set("Human",  "Aragorn");
    console.log(lotr._getcapacity());
    lotr.set("Elf", "Legolas");
    console.log(lotr._getcapacity());
    lotr.set("Maiar", "The Necromancer");
    console.log(lotr._getcapacity());
    lotr.set("Maiar", "Sauron")
    console.log(lotr._getcapacity());
    lotr.set("RingBearer", "Gollum");
    console.log(lotr._getcapacity());
    lotr.set("LadyOfLight", "Galadriel")
    console.log(lotr._getcapacity());
    lotr.set("HalfElven", "Arwen");
    console.log(lotr._getcapacity());
    lotr.set("Hobbit","Frodo");
    console.log(lotr._getcapacity());
    lotr.set("Ent", "Treebeard")
    console.log(lotr._getcapacity());
    console.log(lotr.get("Hobbit"));
    console.log(lotr.get("Wizard"));
    console.log(lotr.get("Human"));
    console.log(lotr.get("Elf"));
    console.log(lotr.get("Maiar"));
    console.log(lotr.get("RingBearer"));
    console.log(lotr.get("LadyOfLight"));
    console.log(lotr.get("HalfElven"));
    console.log(lotr.get("Ent"));
*/
let lotr = new Map2();
lotr.set("Hobbit","Bilbo");
console.log(lotr._getcapacity());
lotr.set("Wizard","Gandalf");
console.log(lotr._getcapacity());
lotr.set("Human",  "Aragorn");
console.log(lotr._getcapacity());
lotr.set("Elf", "Legolas");
console.log(lotr._getcapacity());
lotr.set("Maiar", "The Necromancer");
console.log(lotr._getcapacity());
lotr.set("Maiar", "Sauron")
console.log(lotr._getcapacity());
lotr.set("RingBearer", "Gollum");
console.log(lotr._getcapacity());
lotr.set("LadyOfLight", "Galadriel")
console.log(lotr._getcapacity());
lotr.set("HalfElven", "Arwen");
console.log(lotr._getcapacity());
lotr.set("Hobbit","Frodo");
console.log(lotr._getcapacity());
lotr.set("Ent", "Treebeard")
console.log(lotr._getcapacity());
console.log(lotr.get("Hobbit"));
console.log(lotr.get("Wizard"));
console.log(lotr.get("Human"));
console.log(lotr.get("Elf"));
console.log(lotr.get("Maiar"));
console.log(lotr.get("RingBearer"));
console.log(lotr.get("LadyOfLight"));
console.log(lotr.get("HalfElven"));
console.log(lotr.get("Ent"));
console.log(
    unique('abcdab'),
    unique('aaabbc')
  );
}

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Map();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new Map();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

Hashmapstuff()
//WhatDoesThisDo();