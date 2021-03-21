import React from "react"

class Sword extends React.Component {
    constructor(damage, strength, critChance, critDamage, intelligence, moveSpeed, defense, attackSpeed, ferocity, ability, rarity) {
        super();
        this.damage = damage;
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.intelligence = intelligence;
        this.moveSpeed = moveSpeed;
        this.defense = defense;
        this.attackSpeed = attackSpeed;
        this.ferocity = ferocity;
        this.ability = ability;
        this.rarity = rarity
    }

    toString() {
        let abilityString = this.ability == null ? `` : this.ability.toString();
        return `{ "damage" : "${this.damage}", "strength" : "${this.strength}", "critChance" : "${this.critChance}", "critDamage" : "${this.critDamage}", "intelligence" : "${this.intelligence}", "ability" : "${abilityString}", "rarity" : "${this.rarity}"}`;
    }
}

export default Sword