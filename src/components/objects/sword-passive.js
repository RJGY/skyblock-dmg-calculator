// Sword Passive.

import React from "react"

// Passive -> Description, Damage, DamageType
class SwordPassive extends React.Component {
    constructor(description, damageObject) {
        super();
        this.description = description;
        this.damageObject = damageObject;
    }

    static convertFromString(objectString) {
        let swordPassive = JSON.parse(objectString);
        return new SwordPassive(swordPassive.description, swordPassive.damageObject);
    }

    toString() {
        let damageObjectString = this.damageObject == null ? "{}" : `${this.damageObject.toString()}`;
        return `{ "description" : "${this.description}", "damageObject" : "${damageObjectString}" }`;
    }
}

export default SwordPassive