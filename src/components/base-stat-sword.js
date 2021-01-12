import React from "react"
import PropTypes from 'prop-types';

class Stats extends React.Component {
    constructor() {
        super()
  
        this.state = {
            Strength: 0,
            CriticalChance: 0,
            CriticalDamage: 0,
            AttackSpeed: 0,
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
                    <input type="number" name="Strength" onChange={this.handleInputChange} defaultValue="0" min="0"/> Strength
                    <br/>
                    <input type="number" name="CriticalChance" onChange={this.handleInputChange} defaultValue="0" min="0"/> Critical Chance
                    <br/>
                    <input type="number" name="CriticalDamage" onChange={this.handleInputChange} defaultValue="0" min="0"/> Critical Damage
                    <br/>
                    <input type="number" name="AttackSpeed" onChange={this.handleInputChange} defaultValue="0" min="0"/> AttackSpeed
                </div>
            </div>
        )
    }
    
}

Stats.propTypes = {
    onInputChange: PropTypes.func,
}
  
Stats.defaultProps = {
    onInputChange: null,
}

export default Stats