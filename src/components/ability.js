import React from "react"

class Ability extends React.Component {
    constructor(name, description, cooldown, manaCost) {
        super();
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.manaCost = manaCost;
    }

    toString() {
        return `Name: ${this.name}\nDescription: ${this.description}\nCooldown: ${this.cooldown}\nMana Cost: ${this.manaCost}`;
    }
}

export default Ability