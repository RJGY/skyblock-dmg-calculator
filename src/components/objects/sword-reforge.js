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

    toString() {
        return `Sword Reforge: \n\tStrength: ${this.strength}\n\tDamage: ${this.damage}\n\tCritical Chance: ${this.critChance}\n\tCritical Damage: ${this.critDamage}\n\tAttack Speed: ${this.attackSpeed}\n\tFerocity: ${this.ferocity}\n\tIntelligence: ${this.intelligence}\n\tRarity: ${this.rarity}\n\tReforge Ability: ${this.reforgeAbility}\n`;
    }
}

export default Reforge