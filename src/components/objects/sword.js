import React from "react"

class Sword extends React.Component {
    constructor(damage, strength, critChance, critDamage, intelligence, moveSpeed, defense, attackSpeed, ferocity, ability, passive, rarity) {
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
        this.passive = passive;
        this.rarity = rarity
    }

    toString() {
        let abilityString = this.ability == null ? `` : this.ability.toString();
        return `{ "damage" : "${this.damage}", "strength" : "${this.strength}", "critChance" : "${this.critChance}", "critDamage" : "${this.critDamage}", "intelligence" : "${this.intelligence}", "moveSpeed" : "${this.moveSpeed}", "defense" : "${this.defense}", "attackSpeed" : "${this.attackSpeed}", "ferocity" : "${this.ferocity}", "ability" : "${abilityString}", "passive" : "${this.passive}", "rarity" : "${this.rarity}"}`;
    }
}

export default Sword