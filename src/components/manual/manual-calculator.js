import React from "react";
import Enchants from "./sword-enchants";
import BaseStats from "./base-stat-sword";
import SwordSelect from "./sword-select";
import Sword from "../objects/sword";
import SwordReforge from "../objects/sword-reforge";

let currentSword = {
    "Wooden Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,"","Common")
}

let swordReforge = {
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null),
}

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
        this.getSwordStats = this.getSwordStats.bind(this);
        this.getSwordSelect = this.getSwordSelect.bind(this);
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

    getSwordSelect(newData) {
        currentSword = newData.currentSword;
        swordReforge = newData.swordReforge;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="base-stats">
                        <h1>Base Stats</h1>
                        <BaseStats onInputChange={this.getSwordStats}/>
                    </label>
                    <br/><hr/>
                    <label htmlFor="base-stats-manual">
                        From base stats in manual:
                        {Object.entries(characterStats)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="sword-enchants">
                        <h1>Sword Enchants</h1>
                        <Enchants onInputChange={this.getSwordEnchants}/>
                    </label>
                    <br/><hr/>
                    <label htmlFor="base-sword-enchants-manual">
                        Base Damage Enchants in manual:
                        {Object.entries(baseSwordDamageEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="strike-enchants-manual">
                        Strike Enchants in manual:
                        {Object.entries(strikeEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="high-health-enchants-manual">
                        High Health Enchants in manual:
                        {Object.entries(highHealthEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="healing-enchants-manual">
                        Healing Enchants in manual:
                        {Object.entries(healingEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="low-health-enchants-manual">
                        Low Health Enchants in manual:
                        {Object.entries(lowHealthEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="thunder-enchants-manual">
                        Thunder Enchants in manual:
                        {Object.entries(thunderEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="ultimate-enchants-manual">
                        Ultimate Enchants in manual:
                        {Object.entries(ultimateEnchantment)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="other-enchants-manual">
                        All other enchants in manual, 
                        {Object.entries(mutuallyInclusiveEnchants)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)
                        }
                    </label>
                    <br/><hr/>
                    <label htmlFor="sword-select">
                        <SwordSelect onInputChange={this.getSwordSelect}/>
                    </label>

                    <br/><hr/>

                    <label htmlFor="sword-select-manual">
                        Sword in Manual: 
                        {Object.entries(currentSword)
                            .map(([key, value]) => 
                                <div key={value}>{key}{value.toString()}</div>)
                        }

                        <br/>

                        Sword Reforge in Manual:
                        {Object.entries(swordReforge)
                            .map(([key, value]) =>
                                <div key={value}>{key}</div>
                            )
                        }
                    </label>
                </form>
            </div>
        )
    }
}

export default Calculator