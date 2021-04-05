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

    constructor(objectString) {
        super();
        swordPassive = JSON.parse(objectString);
        this.description = swordPassive.description;
        this.damage = swordPassive.damage;
        this.damageType = swordPassive.damageType;
    }

    toString() {
        return `{ "description" : "${this.description}", "damage" : "${this.damage}", "damageType" : "${this.damageType}",}`;
    }
}

export default SwordPassive