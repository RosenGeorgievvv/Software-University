//Task: Create a function that returns an object with 2 methods (mage and fighter). This object should be able to create heroes (fighters and mages). Every hero has a state.

// · Fighters have a name, health = 100, and stamina = 100 and every fighter can fight. When he fights his stamina decreases by 1 and the following message is printed on the console:

// `${fighter's name} slashes at the foe!`

// · Mages also have state (name, health = 100 and mana = 100). Every mage can cast spells. When a spell is cast the mage's mana decreases by 1 and the following message is printed on the console:

// `${mage's name} cast ${spell}`

//Solution:

function heroes() {
    function hero(name, stamina, attack, letter) {
        return {
            name,
            letter,
            health: 100,
            [stamina]: 100,
            [attack]: function (msg = "") {
                console.log(this.letter + msg)
                this[stamina] -= 1
            },
        }
    }
    return {
        mage: n => new hero(n, "mana", `cast`, `${n} cast `),
        fighter: n => new hero(n, "stamina", `fight`, `${n} slashes at the foe!`),
    }
}