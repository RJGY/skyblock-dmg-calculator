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
        let abilityString = this.ability == null ? `` : this.ability.toString();
        return `{ "damage" : "${this.damage}", "strength" : "${this.strength}", "critChance" : "${this.critChance}", "critDamage" : "${this.critDamage}", "intelligence" : "${this.intelligence}", "ability" : "${abilityString}", "rarity" : "${this.rarity}"}`;
    }
}

export default Sword