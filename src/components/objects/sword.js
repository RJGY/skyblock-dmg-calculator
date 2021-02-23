import React from "react"

class Sword extends React.Component {
    constructor(damage, strength, critChance, critDamage, intelligence, ability, rarity) {
        super();
        this.damage = damage;
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.intelligence = intelligence;
        this.ability = ability;
        this.rarity = rarity
    }

    toString() {
        let abilityString = this.ability === null ? `` : this.ability.toString();
        return `Sword:\n\tDamage: ${this.damage}\n\tStrength: ${this.strength}\n\tCritical Chance: ${this.critChance}\n\tCritical Damage: ${this.critDamage}\n\tIntelligence: ${this.intelligence}\n\tAbility: ${abilityString}\n\tRarity: ${this.rarity}`;
    }
}

export default Sword