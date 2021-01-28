import React from "react"

class Ability extends React.Component {
    constructor(name, damage, strength, critChance, critDamage, intelligence, ability) {
        this.name = name;
        this.damage = damage;
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.intelligence = intelligence;
        this.ability = ability;
    }
}

export default Sword