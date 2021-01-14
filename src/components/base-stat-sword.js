import React from "react"
import PropTypes from 'prop-types';

class Stats extends React.Component {
    constructor() {
        super()
  
        this.state = {
            "Strength": 0,
            "Critical Chance": 0,
            "Critical Damage": 0,
            "Bonus Attack Speed": 0,
            "Ferocity": 0,
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
                {Object.entries(this.state)
                    .map(([key, value]) => 
                        <div key={key}>
                            <input type="number" name={key} onChange={this.handleInputChange} defaultValue={value} min={value}/> {key}
                        </div>
                    )
                }
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