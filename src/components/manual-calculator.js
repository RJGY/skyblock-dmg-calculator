import React from "react"
import Enchants from "./sword-enchants"
import BaseStats from "./base-stat-sword"

let swordEnchants = {
    baseEnchants = {
        baseSwordDamageEnchantment = {
            "Bane of Arthopods": 0,
            "Sharpness": 0,
            "Smite": 0,
        },

        strikeEnchantment = {
            "First Strike": 0,
            "Triple-Strike": 0,
        },

        highHealthEnchantment = {
            "Giant Killer": 0,
            "Titan Killer": 0,
        },

        healingEnchantment = {
            "Life Steal": 0,
            "Syphon": 0,
        },

        lowHealthEnchantment = {
            "Execute": 0,
            "Prosecute": 0,
        },

        thunderEnchantment = {
            "Thunderbolt": 0,
            "Thunderlord": 0,
        },

        mutuallyInclusiveEnchants = {
            "Cleave": 0,
            "Critical": 0,
            "Cubism": 0,
            "Dragon Hunter": 0,
            "Ender Slayer": 0,
            "Experience": 0,
            "Fire Aspect": 0,
            "Impaling": 0,
            "Knockback": 0,
            "Lethality": 0,
            "Looting": 0,
            "Luck": 0,
            "Scavenger": 0,
            "Telekinesis": 0,
            "Vampirism": 0,
            "Venemous": 0,
            "Vicious": 0,
        },
    },
    
    ultimateEnchants = {
        "Chimera": 0,
        "Combo": 0,
        "One For All": 0,
        "Soul Eater": 0,
        "Swarm": 0,
        "Ultimate Jerry": 0,
        "Ultimate Wise": 0,
    }
};

let swordStats = {
    "Strength": 0,
    "Critical Chance": 0,
    "Critical Damage": 0,
    "Bonus Attack Speed": 0,
    "Ferocity": 0,
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