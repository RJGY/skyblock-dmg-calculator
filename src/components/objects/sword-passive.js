// Sword Passive.

import React from "react"

// Passive -> Description
class SwordPassive extends React.Component {
    constructor(description, damage, damageType) {
        super();
        this.description = description;
        this.damage = damage;
        this.damageType = damageType;
    }

    toString() {
        return `Sword Passive: \n\tDescription: ${this.description}\n\tDamage: ${this.damage}\n\tDamage Type: ${this.damageType}`;
    }
}

export default SwordPassive