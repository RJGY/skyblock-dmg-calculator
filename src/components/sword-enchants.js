import React from "react"

class Enchants extends React.Component {
    constructor() {
        super()
  
        this.state = {
            gender: 'None',
        }
        
       }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <div onChange={this.handleInputChange}>
                    <input type="radio" name="gender" value="Male"/> Male
                    <input type="radio" name="gender" value="Female"/> Female
                    <input type="radio" name="gender" value="Other"/> Other
                </div>

                <div>
                    Selected option is : {this.state.gender}
                </div>
            </div>

            
        )
    }
    
}

export default Enchants