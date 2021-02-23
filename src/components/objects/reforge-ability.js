// For abilities on reforges.
// This allows reforge abilities to add strength, damage, and weapon damage bon
import React from "react"

// ReforgeAbility -> Strength, DamageBonus, CriticalDamageBonus, Description
class ReforgeAbility extends React.Component {
    constructor(strength, damageBonus, criticalDamageBonus, description) {
        super();
        this.strength = strength;
        this.damageBonus = damageBonus;
        this.criticalDamageBonus = criticalDamageBonus;
        this.description = description;
    }

    toString() {
        return `Reforge Ability: \n\tExtra Strength: ${this.strength}\n\tDamage Bonus: ${this.damageBonus}\n\tCritical Damage Bonus ${this.criticalDamageBonus}\n\tDescription ${this.description}\n`
    }
}

export default ReforgeAbility