// For abilities on reforges.
// This allows reforge abilities to add strength, damage, and weapon damage bon
import React from "react"

// ReforgeAbility -> Strength, DamageBonus, CriticalDamageBonus, Description
class ReforgeAbility extends React.Component {
    constructor(description) {
        super();
        this.description = description;
    }

    toString() {
        return `Reforge Ability: \n\tDescription ${this.description}\n`
    }
}

export default ReforgeAbility