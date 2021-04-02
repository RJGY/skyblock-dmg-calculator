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

    toString() {
        return `Sword Enchant: \n\tName: ${this.name}\n\tCurrent Level: ${this.currentLevel}\n\tMax Level: ${this.maxLevel}\n\tDamage Per Level: ${this.damagePerLevel}\n`;
    }
}

export default SwordEnchant