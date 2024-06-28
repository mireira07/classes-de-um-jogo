class heroi {
    constructor(name , age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    
    attack () {
        let typeAttack = ""
        if (this.type === "mago") {
            typeAttack = "magia"
        } else if (this.type === "guerreiro") {
            typeAttack = "espada"
        } else if (this.type === "monge") {
            typeAttack = "artes marciais"
        } else if (this.type === "ninja") {
            typeAttack = "shukiren"
        }
             return typeAttack }
}
let hero = new heroi ("miguel ","23 ","ninja");
let typeOfAttack = hero.attack ();

let hero1 = new heroi ("ariel ","20 ","monge");
let typeOfAttack1 = hero1.attack ();

console.log(`o ${hero.type} atacou usando ${typeOfAttack}`);
console.log(`o ${hero1.type} atacou usando ${typeOfAttack1}`);