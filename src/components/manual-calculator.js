import React from "react"
import Enchants from "./sword-enchants"
import BaseStats from "./base-stat-sword"

let swordEnchants = {
    "Sharpness": 0,
    "First Strike": 0,
    "Giant Killer": 0,
};

let swordStats = {
    "Strength": 0,
    "Critical Chance": 0,
    "Critical Damage": 0,
    "Attack Speed": 0,
}

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.getSwordEnchants = this.getSwordEnchants.bind(this);
        this.getSwordStats = this.getSwordStats.bind(this)
    }

    getSwordEnchants(enchants) {
        swordEnchants = enchants;
        this.forceUpdate();
    }

    getSwordStats(stats) {
        swordStats = stats;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Base Stats
                        <BaseStats onInputChange={this.getSwordStats}/>
                    </label>
                        <br/><hr/>
                    <label>
                        Sword Enchants
                        <Enchants onInputChange={this.getSwordEnchants}/>
                    </label>
                    <br/><hr/>
                    <label>
                        From base stats in manual, 
                        {Object.entries(swordStats)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                        <br/><hr/>
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