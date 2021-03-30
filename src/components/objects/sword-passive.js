// Sword Passive.

import React from "react"

// Passive -> Description
class SwordPassive extends React.Component {
    constructor(description) {
        super();
        this.description = description;
    }

    toString() {
        return `Sword Passive: \n\tDescription: ${this.description}`;
    }
}

export default SwordPassive