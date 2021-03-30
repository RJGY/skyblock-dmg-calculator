// Sword Enchants.

import React from "react"

// Passive -> Description
class SwordEnchant extends React.Component {
    constructor(enchants) {
        super();
        this.enchants = enchants;
    }

    toString() {
        return `Sword Enchant: \n\tDescription: ${this.enchants}`;
    }
}

export default SwordEnchant