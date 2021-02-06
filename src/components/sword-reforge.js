// Sword Reforge.

import React from "react"

// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, Ability
class Reforge extends React.Component {
    constructor(strength, damage, critChance, critDamage, attackSpeed, ferocity, intelligence, weaponDamageBonus) {
        super();
        this.strength = strength;
        this.damage = damage;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.attackSpeed = attackSpeed;
        this.ferocity = ferocity;
        this.intelligence = intelligence;
    }
}

export default Reforge