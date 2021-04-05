// Sword Reforge.

import React from "react"

// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, Rarity, Reforge Ability
class Reforge extends React.Component {
    constructor(strength, damage, critChance, critDamage, attackSpeed, ferocity, intelligence, rarity, reforgeAbility) {
        super();
        this.strength = strength;
        this.damage = damage;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.attackSpeed = attackSpeed;
        this.ferocity = ferocity;
        this.intelligence = intelligence;
        this.rarity = rarity;
        this.reforgeAbility = reforgeAbility;
    }

    constructor(objectString) {
        super();
        reforge = JSON.parse(objectString);
        this.strength = reforge.strength;
        this.damage = reforge.damage;
        this.critChance = reforge.critChance;
        this.critDamage = reforge.critDamage;
        this.attackSpeed = reforge.attackSpeed;
        this.ferocity = reforge.ferocity;
        this.intelligence = reforge.intelligence;
        this.rarity = reforge.rarity;
        this.reforgeAbility = reforge.reforgeAbility;
    }

    toString() {
        return `{ "strength" : "${this.strength}", "damage" : "${this.damage}", "critChance" : "${this.critChance}", "critDamage" : "${this.critDamage}", "attackSpeed" : "${this.attackSpeed}", "ferocity" : "${this.ferocity}", "intelligence" : "${this.intelligence}", "rarity" : "${this.rarity}", "reforgeAbility" : "${this.reforgeAbility}",}`;
    }
}

export default Reforge