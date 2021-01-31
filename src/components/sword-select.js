import React from "react"
import PropTypes from 'prop-types';
import Sword from "./sword";
import Ability from "./ability";
// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// Ability -> name, description, cooldowm, manacost
const listOfWeapons = {
    "Aspect of the Jerry" : new Sword(1,0,0,0,0, new Ability("Parley", "Channel your inner Jerry", 5, 0))
}


class SwordSelect extends React.Component {

    handleSelectChange(e) {
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    render() {
        <div>
            {Object.entries(listOfWeapons)
                .map(([key, value]) =>
                    <div key={key}>
                        {value}
                    </div>
                )
            }
        </div>
    }
}

SwordSelect.propTypes = {
    onInputChange: PropTypes.func,
}
  
SwordSelect.defaultProps = {
    onInputChange: null,
}

export default SwordSelect;