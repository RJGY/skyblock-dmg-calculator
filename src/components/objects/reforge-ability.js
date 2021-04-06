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
        reforgeAbility = JSON.parse(objectString);
        this.description = reforgeAbility.description;
        this.damage = reforgeAbility.damage;
        this.damageType = reforgeAbility.damageType;
        return new ReforgeAbility(reforgeAbility.description, reforgeAbility.damage, reforgeAbility.damageType);
    }

    toString() {
        return `{ "description" : "${this.description}", "damage" : "${this.damage}", "damageType" : "${this.damageType}", }`;
    }
}

export default ReforgeAbility