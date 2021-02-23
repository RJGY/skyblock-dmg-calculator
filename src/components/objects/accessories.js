// Sword Reforge.

import React from "react"

// Accessory -> Strength, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, moveSpeed
class Accessory extends React.Component {
    constructor(strength, damage, critChance, critDamage, attackSpeed, ferocity, intelligence, rarity, moveSpeed) {
        super();
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.attackSpeed = attackSpeed;
        this.ferocity = ferocity;
        this.intelligence = intelligence;
        this.rarity = rarity;
        this.moveSpeed = moveSpeed;
    }

    toString() {
        return `Accessory:\n\tStrength: ${this.strength}\n\tCritical Chance: ${this.critChance}\n\tCritical Damage: ${this.critDamage}\n\tIntelligence: ${this.intelligence}\n\tRarity: ${this.rarity}\n\tMove Speed: ${this.moveSpeed}`;
    }
}

export default Accessory