// Sword Reforge.

import React from "react"

// Accessory -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, moveSpeed
class Accessory extends React.Component {
    constructor(strength, damage, critChance, critDamage, attackSpeed, ferocity, intelligence, moveSpeed) {
        super();
        this.strength = strength;
        this.damage = damage;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.attackSpeed = attackSpeed;
        this.ferocity = ferocity;
        this.intelligence = intelligence;
        this.moveSpeed = moveSpeed;
    }
}

export default Accessory