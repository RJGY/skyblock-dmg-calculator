import React from "react"
import PropTypes from 'prop-types';
import Sword from "./sword";
import SwordAbility from "./ability";
import SwordReforge from "./sword-reforge";

// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// SwordAbility -> name, description, cooldown, manacost
// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, rarity, Reforge Ability
const listOfSwordAbilities = {
    "Aspect of the Jerry Ability" : new SwordAbility("Parley", "Channel your inner Jerry", 5, 0)
}

const listOfWeapons = {
    "Aspect of the Jerry" : new Sword(1,0,0,0,0, listOfAbilities["Aspect of the Jerry Ability"])
}

const listOfReforges = {
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null)
}

class SwordSelect extends React.Component {
    constructor() {
        super();
  
        this.state = {
            currentSword: {
                "Aspect of the Jerry" : new Sword(1,0,0,0,0, new Ability("Parley", "Channel your inner Jerry", 5, 0))
            },
            
            swordReforge: {
                "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null)
            }
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);

        Object.entries(listOfWeapons)
            .map(([key, value]) =>
            console.log(`Key: ${key}\nValue:${value}`)
        )
    }

    handleSelectChange(e) {
        this.setState({
            [e.target.key] : e.target.value
        })
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    render() {
        return (
            <div>
                <select onChange={this.handleSelectChange}>
                    {Object.entries(listOfWeapons)
                        .map(([key, value]) =>
                            <option value={`${value}`} key={key}>{key}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}

SwordSelect.propTypes = {
    onInputChange: PropTypes.func,
}
  
SwordSelect.defaultProps = {
    onInputChange: null,
}

export default SwordSelect;