import React from "react"
import Enchants from "./sword-enchants"
import BaseStats from "./base-stat-sword"


let baseSwordDamageEnchantment = {
    "Bane of Arthopods": 0,
    "Sharpness": 0,
    "Smite": 0,
}

let strikeEnchantment = {
    "First Strike": 0,
    "Triple-Strike": 0,
}

let highHealthEnchantment = {
    "Giant Killer": 0,
    "Titan Killer": 0,
}

let healingEnchantment = {
    "Life Steal": 0,
    "Syphon": 0,
}

let lowHealthEnchantment = {
    "Execute": 0,
    "Prosecute": 0,
}

let thunderEnchantment = {
    "Thunderbolt": 0,
    "Thunderlord": 0,
}

let mutuallyInclusiveEnchants = {
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
}

let ultimateEnchantment = {
    "Chimera": 0,
    "Combo": 0,
    "One For All": 0,
    "Soul Eater": 0,
    "Swarm": 0,
    "Ultimate Jerry": 0,
    "Ultimate Wise": 0,
}


let characterStats = {
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
        baseSwordDamageEnchantment = enchants.baseSwordDamageEnchantment;
        strikeEnchantment = enchants.strikeEnchantment;
        highHealthEnchantment = enchants.highHealthEnchantment;
        healingEnchantment = enchants.healingEnchantment;
        lowHealthEnchantment = enchants.lowHealthEnchantment;
        thunderEnchantment = enchants.thunderEnchantment;
        mutuallyInclusiveEnchants = enchants.mutuallyInclusiveEnchants;
        ultimateEnchantment = enchants.ultimateEnchantment;
        this.forceUpdate();
    }

    getSwordStats(stats) {
        characterStats = stats;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        <h1>Base Stats</h1>
                        <BaseStats onInputChange={this.getSwordStats}/>
                    </label>
                        <br/><hr/>
                    <label>
                        <h1>Sword Enchants</h1>
                        <Enchants onInputChange={this.getSwordEnchants}/>
                    </label>
                    <br/><hr/>
                    <label>
                        From base stats in manual, 
                        {Object.entries(characterStats)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                        <br/><hr/>
                    <label>
                        From base enchants in manual, 
                        {Object.entries(baseSwordDamageEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <label>
                        All other enchants in manual, 
                        {Object.entries(mutuallyInclusiveEnchants)
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