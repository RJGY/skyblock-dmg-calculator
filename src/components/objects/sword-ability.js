import React from "react"

class Ability extends React.Component {
    constructor(name, description, cooldown, manaCost, scaling) {
        super();
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.manaCost = manaCost;
        this.scaling = scaling;
    }

    static convertFromString(objectString) {
        let swordAbility = JSON.parse(objectString);
        return new Ability(swordAbility.name, swordAbility.description, swordAbility.cooldown, swordAbility.manaCost, swordAbility.scaling);
    }

    toString() {
        return `{ "name" : "${this.name}", "description" : "${this.description}", "cooldown" : "${this.cooldown}", "manaCost" : "${this.manaCost}", "scaling" : "${this.scaling}" }`;
    }
}

export default Ability