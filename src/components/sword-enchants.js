import React from "react"
import PropTypes from 'prop-types';

// TODO: make selected enchant dictionary for name & number.

const maxBaseSwordDamageEnchantment = {
    "Bane of Arthopods": 7,
    "Sharpness": 7,
    "Smite": 7,
}

let selectedBaseSwordDamageEnchantment = "Sharpness";
let maxSelectedBase = 7;
    
const maxStrikeEnchantment = {
    "First Strike": 5,
    "Triple Strike": 5,
}

let selectedStrikeEnchantment = "First Strike";
let maxSelectedStrike = 5;

const maxHighHealthEnchantment = {
    "Giant Killer": 7,
    "Titan Killer": 7,
}

let selectedHighHealthEnchantment = "Syphon";
let maxSelectedHighHealth = 5;

const maxHealingEnchantment = {
    "Life Steal": 5,
    "Syphon": 5,
}

const maxLowHealthEnchantment = {
    "Execute": 6,
    "Prosecute": 6,
}

const maxThunderEnchantment = {
    "Thunderbolt": 6,
    "Thunderlord": 6,
}

const maxMutuallyInclusiveEnchants = {
    "Cleave": 6,
    "Critical": 7,
    "Cubism": 6,
    "Dragon Hunter": 5,
    "Ender Slayer": 7,
    "Experience": 4,
    "Fire Aspect": 2,
    "Impaling": 3,
    "Knockback": 2,
    "Lethality": 6,
    "Looting": 5,
    "Luck": 7,
    "Scavenger": 5,
    "Telekinesis": 1,
    "Vampirism": 6,
    "Venemous": 6,
    "Vicious": 5,
}

const maxUltimateEnchants = {
    "Chimera": 5,
    "Combo": 5,
    "One For All": 1,
    "Soul Eater": 5,
    "Swarm": 5,
    "Ultimate Jerry": 5,
    "Ultimate Wise": 5,
}

class Enchants extends React.Component {
    constructor() {
        super()
  
        this.state = {
            baseSwordDamageEnchantment: {
                "Bane of Arthopods": 0,
                "Sharpness": 0,
                "Smite": 0,
            },

            strikeEnchantment: {
                "First Strike": 0,
                "Triple Strike": 0,
            },

            highHealthEnchantment: {
                "Giant Killer": 0,
                "Titan Killer": 0,
            },

            healingEnchantment: {
                "Life Steal": 0,
                "Syphon": 0,
            },

            lowHealthEnchantment: {
                "Execute": 0,
                "Prosecute": 0,
            },

            thunderEnchantment: {
                "Thunderbolt": 0,
                "Thunderlord": 0,
            },

            mutuallyInclusiveEnchants: {
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

            ultimateEnchants: {
                "Chimera": 0,
                "Combo": 0,
                "One For All": 0,
                "Soul Eater": 0,
                "Swarm": 0,
                "Ultimate Jerry": 0,
                "Ultimate Wise": 0,
            },
        }
        
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let dict = {};
        for (const [key, value] of Object.entries(this.state[e.target.name.split("-")[1]])) {
            if (key == [e.target.name.split("-")[0]]) {
                dict[key] = e.target.value
            }
            else {
                dict[key] = value
            }
        }
        console.log(dict);
        this.setState({
            [e.target.name.split("-")[1]] : dict
        });
        this.forceUpdate();
        setTimeout(() => {
            console.log(this.state);
            this.props.onInputChange(this.state);
        }, 50);
        
    }

    handleSelectChange(e) {
        
        let dict = {};
        for (const [key, value] of Object.entries(this.state[e.target.value.split("-")[2]])) {
            if (key == e.target.value.split("-")[0]) {
                dict[key] = this.state[e.target.value.split("-")[2]][selectedBaseSwordDamageEnchantment];
            }
            else {
                dict[key] = 0;
            }
            
        }
        console.log(dict);
        selectedBaseSwordDamageEnchantment = e.target.value.split("-")[0];
        maxSelectedBase = e.target.value.split("-")[1];
        this.setState({
            [e.target.value.split("-")[2]] : dict
        });
        this.forceUpdate();
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
        
    }

    render() {
        return (
            <div>
                <div>
                    Base Enchants
                    <div>
                        <select onChange={this.handleSelectChange} defaultValue={'Sharpness-7-baseSwordDamageEnchantment'}>
                        {Object.entries(maxBaseSwordDamageEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}` + "-" + `${value}` + "-" + "baseSwordDamageEnchantment"} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedBaseSwordDamageEnchantment}` + "-" + "baseSwordDamageEnchantment"} onChange={this.handleInputChange} defaultValue="0" min="0" max={maxSelectedBase}/> 
                    </div>
                </div>

                <div>
                    Strike Enchants
                    <div>
                        <select onChange={this.handleSelectChange} defaultValue={'First Strike-5-strikeEnchantment'}>
                        {Object.entries(maxStrikeEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}` + "-" + `${value}` + "-" + "strikeEnchantment"} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedStrikeEnchantment}` + "-" + "strikeEnchantment"} onChange={this.handleInputChange} defaultValue="0" min="0" max={maxSelectedStrike}/> 
                    </div>
                </div>

                <div>
                    Strike Enchants
                    <div>
                        <select onChange={this.handleSelectChange} defaultValue={'Giant Killer-7-highHealth'}>
                        {Object.entries(maxHighHealthEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}` + "-" + `${value}` + "-" + "highHealth"} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedHighHealthEnchantment}` + "-" + "highHealth"} onChange={this.handleInputChange} defaultValue="0" min="0" max={maxSelectedHighHealth}/> 
                    </div>
                </div>
            </div>
        )
    }
    
}

/*
                <div>
                    Ultimate Enchants
                    {Object.entries(maxUltimateEnchants)
                        .map(([key, value]) => 
                        <div key={key}>
                            <input type="number" name={`${key}` + "-" + "ultimateEnchants"} onChange={this.handleInputChange} defaultValue="0" min="0" max={value}/> {key}
                        </div>
                        )
                    }
                </div>
*/

Enchants.propTypes = {
    onInputChange: PropTypes.func,
}
  
Enchants.defaultProps = {
    onInputChange: null,
}

export default Enchants