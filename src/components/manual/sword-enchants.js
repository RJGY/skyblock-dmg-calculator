import React from "react"
import PropTypes from 'prop-types'

// TODO: Add buttons to auto select enchant levels. One button for moderate levels, one for busted amounts of money
//      and one for reset. 

let selectedEnchantments = {
    baseSwordDamageEnchantment : "Sharpness",
    strikeEnchantment: "First Strike",
    highHealthEnchantment: "Giant Killer",
    healingEnchantment: "Syphon",
    lowHealthEnchantment: "Execute",
    thunderEnchantment: "Thunderlord",
    ultimateEnchantment: "Chimera",
}

let selectedMax = {
    baseSwordDamageEnchantment: 7,
    strikeEnchantment: 5,
    highHealthEnchantment: 7,
    healingEnchantment: 5,
    lowHealthEnchantment: 6,
    thunderEnchantment: 6,
    ultimateEnchantment: 5,
}

const maxBaseSwordDamageEnchantment = {
    "Bane of Arthopods": 7,
    "Sharpness": 7,
    "Smite": 7,
}
    
const maxStrikeEnchantment = {
    "First Strike": 5,
    "Triple Strike": 5,
}

const maxHighHealthEnchantment = {
    "Giant Killer": 7,
    "Titan Killer": 7,
}

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

const maxUltimateEnchantment = {
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
        super();
  
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

            ultimateEnchantment: {
                "Chimera": 0,
                "Combo": 0,
                "One For All": 0,
                "Soul Eater": 0,
                "Swarm": 0,
                "Ultimate Jerry": 0,
                "Ultimate Wise": 0,
            },
        }
        
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let inputValue = (e.target.value <= e.target.max) ? e.target.value : e.target.max;
        
        console.log(inputValue + " " + e.target.max);
        let dict = {};
        for (const [key, value] of Object.entries(this.state[e.target.name.split("-")[1]])) {
            if (key === [e.target.name.split("-")[0]]) {
                dict[key] = inputValue
            }
            else {
                dict[key] = value
            }
        }

        this.setState({
            [e.target.name.split("-")[1]] : dict
        });
        this.forceUpdate();
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
        
    }

    handleSelectChange(e) {
        // Create dict and populate it with changed values
        //      Change the value which was selected to the previous value.
        //      Change all other values to 0. 
        let dict = {};
        for (const [key] of Object.entries(this.state[e.target.value.split("-")[2]])) {
            if (key === e.target.value.split("-")[0]) {
                dict[key] = this.state[e.target.value.split("-")[2]][selectedEnchantments[e.target.value.split("-")[2]]];
            }
            else {
                dict[key] = 0;
            }
            
        }
        // Change selected enchantment to the currently selected enchantment.
        selectedEnchantments[e.target.value.split("-")[2]] = e.target.value.split("-")[0];
        selectedMax[e.target.value.split("-")[2]] = e.target.value.split("-")[1];
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
                        <select onBlur={this.handleSelectChange} defaultValue={'Sharpness-7-baseSwordDamageEnchantment'}>
                        {Object.entries(maxBaseSwordDamageEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-baseSwordDamageEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.baseSwordDamageEnchantment}-baseSwordDamageEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.baseSwordDamageEnchantment}/> 
                    </div>
                </div>

                <div>
                    Strike Enchants
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'First Strike-5-strikeEnchantment'}>
                        {Object.entries(maxStrikeEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-strikeEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.strikeEnchantment}-strikeEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.strikeEnchantment}/> 
                    </div>
                </div>

                <div>
                    High Health Enchants
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'Giant Killer-7-highHealthEnchantment'}>
                        {Object.entries(maxHighHealthEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-highHealthEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.highHealthEnchantment}-highHealthEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.highHealthEnchantment}/> 
                    </div>
                </div>

                <div>
                    Healing Enchants
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'Syphon-5-healingEnchantment'}>
                        {Object.entries(maxHealingEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-healingEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.healingEnchantment}-healingEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.healingEnchantment}/> 
                    </div>
                </div>

                <div>
                    Low Health Enchantment
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'Execute-6-lowHealthEnchantment'}>
                        {Object.entries(maxLowHealthEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-lowHealthEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.lowHealthEnchantment}-lowHealthEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.lowHealthEnchantment}/> 
                    </div>
                </div>

                <div>
                    Thunder Enchantment
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'Thunderlord-6-thunderEnchantment'}>
                        {Object.entries(maxThunderEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-thunderEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.thunderEnchantment}-thunderEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.thunderEnchantment}/> 
                    </div>
                </div>

                <div>
                    Ultimate Enchantment
                    <div>
                        <select onBlur={this.handleSelectChange} defaultValue={'Chimera-5-ultimateEnchantment'}>
                        {Object.entries(maxUltimateEnchantment)
                            .map(([key, value]) => 
                                <option value={`${key}-${value}-ultimateEnchantment`} key={key}>{key}</option>
                            )
                        }
                        </select>
                        <input type="number" name={`${selectedEnchantments.ultimateEnchantment}-ultimateEnchantment`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={selectedMax.ultimateEnchantment}/> 
                    </div>
                </div>

                <div>
                    Other Enchants
                    {Object.entries(maxMutuallyInclusiveEnchants)
                        .map(([key, value]) => 
                        <div key={key}>
                            <input type="number" name={`${key}-mutuallyInclusiveEnchants`} onBlur={this.handleInputChange} defaultValue="0" min="0" max={value}/> {key}
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }
    
}

Enchants.propTypes = {
    onInputChange: PropTypes.func,
}
  
Enchants.defaultProps = {
    onInputChange: null,
}

export default Enchants