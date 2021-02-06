import React from "react"
import PropTypes from 'prop-types';
import Sword from "./sword";
import Ability from "./ability";

// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// Ability -> name, description, cooldown, manacost
const listOfAbilities = {
    "Aspect of the Jerry Ability" : new Ability("Parley", "Channel your inner Jerry", 5, 0)
}

const listOfWeapons = {
    "Aspect of the Jerry" : new Sword(1,0,0,0,0, listOfAbilities["Aspect of the Jerry Ability"])
}


class SwordSelect extends React.Component {
    constructor() {
        super();
  
        this.state = {
            "Aspect of the Jerry" : new Sword(1,0,0,0,0, new Ability("Parley", "Channel your inner Jerry", 5, 0))
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