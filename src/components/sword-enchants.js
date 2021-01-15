import React from "react"
import PropTypes from 'prop-types';

// TODO: Add more enchants.
// TODO: Add limit to enchants.

const maxBaseEnchants = {
    baseSwordDamageEnchantment = {
        "Bane of Arthopods": 7,
        "Sharpness": 7,
        "Smite": 7,
    },
    
    strikeEnchantment = {
        "First Strike": 5,
        "Triple-Strike": 5,
    },

    highHealthEnchantment = {
        "Giant Killer": 7,
        "Titan Killer": 7,
    },

    healingEnchantment = {
        "Life Steal": 5,
        "Syphon": 5,
    },

    lowHealthEnchantment = {
        "Execute": 6,
        "Prosecute": 6,
    },

    thunderEnchantment = {
        "Thunderbolt": 6,
        "Thunderlord": 6,
    },

    mutuallyInclusiveEnchants = {
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
    },
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
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
        this.forceUpdate();
        const timer = setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
        
    }

    render() {
        return (
            <div>
                <div>
                    Base Enchants
                    {Object.entries(maxBaseEnchants.mutuallyInclusiveEnchants)
                        .map(([key, value]) => 
                        <div key={key}>
                            <input type="number" name={key} onChange={this.handleInputChange} defaultValue="0" min="0" max={value}/> {key}
                        </div>
                        )
                    }
                </div>
                <div>
                    Ultimate Enchants
                    {Object.entries(maxUltimateEnchants)
                        .map(([key, value]) => 
                        <div key={key}>
                            <input type="number" name={key} onChange={this.handleInputChange} defaultValue="0" min="0" max={value}/> {key}
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