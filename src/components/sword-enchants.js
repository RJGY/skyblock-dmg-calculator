import React from "react"
import PropTypes from 'prop-types';

class Enchants extends React.Component {
    constructor() {
        super()
  
        this.state = {
            "Sharpness": 0,
            "First Strike": 0,
            "Giant Killer": 0,
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        }); 
        this.forceUpdate()
        this.props.onInputChange(this.state); //This is where you call the function.
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" name="Sharpness" onChange={this.handleInputChange}/> Sharpness
                    <br/>
                    <input type="number" name="First Strike" onChange={this.handleInputChange}/> First Strike
                    <br/>
                    <input type="number" name="Giant Killer" onChange={this.handleInputChange}/> Giant Killer
                    <br/>
                </div>

                <div>
                    Selected option is: {this.state.gender}
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