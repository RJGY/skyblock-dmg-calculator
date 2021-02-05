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
        return `\n\t\tName: ${this.name}\n\t\tDescription: ${this.description}\n\t\tCooldown: ${this.cooldown}\n\t\tMana Cost: ${this.manaCost}`;
    }
}

export default Ability