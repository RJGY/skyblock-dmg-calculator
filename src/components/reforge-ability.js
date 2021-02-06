// For abilities on reforges.
// This allows reforge abilities to add strength, damage, and weapon damage bon
import React from "react"

// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, Ability
class ReforgeAbility extends React.Component {
    constructor(strength, damage, critChance, critDamage, attackSpeed, ferocity, intelligence, criticalDamageBonus, description) {
        super();
        this.strength = strength;
        this.damage = damage;
        this.criticalDamageBonus = criticalDamageBonus;
        this.description = description;
    }
}

export default ReforgeAbility