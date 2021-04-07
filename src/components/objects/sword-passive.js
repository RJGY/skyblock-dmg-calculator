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

    static convertFromString(objectString) {
        let swordPassive = JSON.parse(objectString);
        return new SwordPassive(swordPassive.description, swordPassive.damage, swordPassive.damageType);
    }

    toString() {
        return `{ "description" : "${this.description}", "damage" : "${this.damage}", "damageType" : "${this.damageType}",}`;
    }
}

export default SwordPassive