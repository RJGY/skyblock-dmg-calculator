import React from "react"
import PropTypes from 'prop-types';

const maxEnchants = {
    Sharpness: 5,
    FirstStrike: 4,
    GiantKiller: 5,

}

class Enchants extends React.Component {
    constructor() {
        super()
  
        this.state = {
            Sharpness: 0,
            FirstStrike: 0,
            GiantKiller: 0,
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
                    <input type="number" name="Sharpness" onChange={this.handleInputChange} defaultValue="0"/> Sharpness
                    <br/>
                    <input type="number" name="FirstStrike" onChange={this.handleInputChange} defaultValue="0"/> First Strike
                    <br/>
                    <input type="number" name="GiantKiller" onChange={this.handleInputChange} defaultValue="0"/> Giant Killer
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