// Sword Enchants.

import React from "react"

// SwordEnchant -> name, currentLevel, maxLevel, damagePerLevel, damageType
class SwordEnchant extends React.Component {
    constructor(name, currentLevel, maxLevel, damagePerLevel, damageType) {
        super();
        this.name = name;
        this.currentLevel = currentLevel;
        this.maxLevel = maxLevel;
        this.damagePerLevel = damagePerLevel;
        this.damageType = damageType;
    }

    static convertFromString(objectString) {
        let swordEnchant = JSON.parse(objectString);
        return new SwordEnchant(swordEnchant.name, swordEnchant.currentLevel, swordEnchant.maxLevel, swordEnchant.damagePerLevel,
            swordEnchant.damageType);
    }

    toString() {
        return `{ "name" : "${this.name}", "currentLevel" : "${this.currentLevel}", "maxLevel" : "${this.maxLevel}",
            "damagePerLevel" : "${this.damagePerLevel}", "damageType" : "${this.damageType}"}`;
    }
}

export default SwordEnchant