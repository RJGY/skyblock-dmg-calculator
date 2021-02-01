import React from "react"

class Ability extends React.Component {
    constructor(name, description, cooldown, manaCost) {
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.manaCost = manaCost;
    }
}

export default Ability