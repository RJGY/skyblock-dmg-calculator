// For abilities on reforges.
// This allows reforge abilities to add strength, damage, and weapon damage bon
import React from "react"

// ReforgeAbility -> Strength, DamageBonus, CriticalDamageBonus, Description
class ReforgeAbility extends React.Component {
    constructor(description, damage, damageType) {
        super();
        this.description = description;
        this.damage = damage;
        this.damageType = damageType;
    }

    toString() {
        return `Reforge Ability: \n\tDescription ${this.description}\n`
    }
}

export default ReforgeAbility