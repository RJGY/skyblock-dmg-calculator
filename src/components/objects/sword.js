import React from "react";

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
        this.rarity = rarity;
    }

    static convertFromString(objectString) {
        let sword = JSON.parse(objectString);
        return new Sword(sword.damage, sword.strength, sword.critChance, sword.critDamage, sword.intelligence, sword.moveSpeed, sword.defense,
            sword.attackSpeed, sword.ferocity, sword.ability, sword.passive, sword.rarity);
    }

    toString() {
        let abilityString = this.ability == null ? `{}` : `${this.ability.toString()}`;
        let passiveString = this.passive == null ? `{}` : `${this.passive.toString()}`;
        return `{ "damage" : "${this.damage}", "strength" : "${this.strength}", "critChance" : "${this.critChance}", "critDamage" : "${this.critDamage}", "intelligence" : "${this.intelligence}", "moveSpeed" : "${this.moveSpeed}", "defense" : "${this.defense}", "attackSpeed" : "${this.attackSpeed}", "ferocity" : "${this.ferocity}", "ability" : ${abilityString.toString()}, "passive" : "${passiveString.toString()}", "rarity" : "${this.rarity}"}`;
    }
}

export default Sword