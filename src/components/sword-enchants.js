import React from "react"
import PropTypes from 'prop-types';

// TODO: Add more enchants.
// TODO: Add limit to enchants.

const maxEnchants = {
    "Sharpness": 5,
    "First Strike": 4,
    "Giant Killer": 5,
}

class Enchants extends React.Component {
    constructor() {
        super()
  
        this.state = {
            "Sharpness": 0,
            "First Strike": 0,
            "Giant Killer": 0,
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
                {Object.entries(maxEnchants)
                    .map(([key, value]) => 
                    <div key={key}>
                        <input type="number" name={key} onChange={this.handleInputChange} defaultValue="0" min="0" max={value}/> {key}
                    </div>
                    )
                }
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