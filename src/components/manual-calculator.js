import React from "react"
import Enchants from "./sword-enchants"
import BaseStats from "./base-stat-sword"

let swordEnchants = {
    Sharpness: 0,
    FirstStrike: 0,
    GiantKiller: 0,
};

let swordStats = {
    Strength: 0,
    CriticalChance: 0,
    CriticalDamage: 0,
    AttackSpeed: 0,
}

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.getSwordEnchants = this.getSwordEnchants.bind(this)
    }

    getSwordEnchants(enchants) {
        swordEnchants = enchants;
        this.forceUpdate();
    }

    getSwordStats(stats) {
        swordEnchants = stats;
        console.log(swordEnchants);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <BaseStats onInputChange={this.getSwordStats}/>
                    </label>

                    <label>
                        <Enchants onInputChange={this.getSwordEnchants}/>
                    </label>

                    <label>
                        From enchants in manual, 
                        {Object.entries(swordEnchants)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                </form>
            </div>
        )
    }
}

export default Calculator