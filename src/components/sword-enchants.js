import React from "react"
import PropTypes from 'prop-types';

// TODO: Add more enchants.
// TODO: Add limit to enchants.

const maxBaseEnchants = {
    "Bane of Arthopods": 7,
    "Cleave": 6,
    "Critical": 7,
    "Cubism": 6,
    "Dragon Hunter": 5,
    "Ender Slayer": 7,
    "Execute": 6,
    "Experience": 4,
    "Fire Aspect": 2,
    "First Strike": 5,
    "Giant Killer": 7,
    "Impaling": 3,
    "Knockback": 2,
    "Lethality": 6,
    "Life Steal": 5,
    "Looting": 5,
    "Luck": 7,
    "Prosecute": 6,
    "Scavenger": 5,
    "Sharpness": 7,
    "Smite": 7,
    "Syphon": 5,
    "Telekinesis": 1,
    "Thunderbolt": 6,
    "Thunderlord": 6,
    "Titan Killer": 7,
    "Triple-Strike": 5,
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

            baseEnchants = {
                "Bane of Arthopods": 0,
                "Cleave": 0,
                "Critical": 0,
                "Cubism": 0,
                "Dragon Hunter": 0,
                "Ender Slayer": 0,
                "Execute": 0,
                "Experience": 0,
                "Fire Aspect": 0,
                "First Strike": 0,
                "Giant Killer": 0,
                "Impaling": 0,
                "Knockback": 0,
                "Lethality": 0,
                "Life Steal": 0,
                "Looting": 0,
                "Luck": 0,
                "Prosecute": 0,
                "Scavenger": 0,
                "Sharpness": 0,
                "Smite": 0,
                "Syphon": 0,
                "Telekinesis": 0,
                "Thunderbolt": 0,
                "Thunderlord": 0,
                "Titan Killer": 0,
                "Triple-Strike": 0,
                "Vampirism": 0,
                "Venemous": 0,
                "Vicious": 0,
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
                    {Object.entries(maxBaseEnchants)
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