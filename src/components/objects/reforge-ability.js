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

    static convertFromString(objectString) {
        let reforgeAbility = JSON.parse(objectString);
        return new ReforgeAbility(reforgeAbility.description, reforgeAbility.damage, reforgeAbility.damageType);
    }

    toString() {
        return `{ "description" : "${this.description}", "damage" : "${this.damage}", "damageType" : "${this.damageType}" }`;
    }
}

export default ReforgeAbility