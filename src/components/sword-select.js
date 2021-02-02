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
    }

    handleSelectChange(e) {
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    render() {
        return (
            <div>
                {Object.entries(listOfWeapons)
                    .map(([key, value]) =>
                        <div key={key}>
                            <p className="literal">
                                {key}
                                <br/>
                                {value.ability.toString()}
                            </p>
                        </div>
                    )
                }
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