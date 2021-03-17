// For abilities on reforges.
// This allows reforge abilities to add strength, damage, and weapon damage bon
import React from "react"

// ReforgeAbility -> Strength, DamageBonus, CriticalDamageBonus, Description
class ReforgeAbility extends React.Component {
    constructor(strength, damageBonus, description) {
        super();
        this.strength = strength;
        this.damageBonus = damageBonus;
        this.description = description;
    }

    toString() {
        return `Reforge Ability: \n\tExtra Strength: ${this.strength}\n\tDamage Bonus: ${this.damageBonus}\n\tDescription ${this.description}\n`
    }
}

export default ReforgeAbility