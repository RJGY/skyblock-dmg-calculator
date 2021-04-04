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

    constructor(objectString) {
        super();
        swordEnchant = JSON.parse(objectString);
        this.name = swordEnchant.name;
        this.currentLevel = swordEnchant.currentLevel;
        this.maxLevel = swordEnchant.maxLevel;
        this.damagePerLevel = swordEnchant.damagePerLevel;
        this.damageType = swordEnchant.damageType;
    }

    toString() {
        return `{ "name" : "${this.name}", "currentLevel" : "${this.currentLevel}", "maxLevel" : "${this.maxLevel}", "damagePerLevel" : "${this.damagePerLevel}", "damageType" : "${this.damageType}",}`;
    }
}

export default SwordEnchant