class Pokemon{
    constructor(name,health,magic){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }
    learnAttackSkill(attackObject){
        this.skills.push(attackObject);
    }
    showStatus(){
        console.log(`The Status for ${this.name} is: Health:${this.health} and Magic left : ${this.magic}`)
    }
    attack(attackName,attackedPokemon){
      if(this.skills[attackName].magic <= this.magic){
           
            return attackedPokemon.health -= this.skills[attackName].damage ,

            this.magic -= this.skills[attackName].magic;             
      }
             
     }  
     getMagic(){
         return this.magic += 25;

     }  
}

class AttackSkill {
    constructor(name,damage, magic){
      
        this.name = name;
        this.damage = damage;
        this.magic = magic;
    }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let punch =new AttackSkill("punch", 50, 40);

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(punch);

// show status
console.log("----------------");
pikachu.showStatus();
console.log("----------------");
bulbasaur.showStatus();
console.log("----------------");

console.log("+++++++++++++++++++");
console.log(pikachu);
console.log(bulbasaur);
console.log("+++++++++++++++++++");
//attack opponent
pikachu.attack(0, bulbasaur);
// after fight

console.log("After attack*************");
console.log(bulbasaur);
console.log(pikachu);
console.log("*************");

//magic
pikachu.getMagic();
console.log(pikachu);

