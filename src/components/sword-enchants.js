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
        console.log(this.state.gender);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="radio" name="gender" value="Male" onChange={this.handleInputChange}/> Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleInputChange}/> Female
                    <input type="radio" name="gender" value="Other" onChange={this.handleInputChange}/> Other
                </div>

                <div>
                    Selected option is : {this.state.gender}
                </div>
            </div>

            
        )
    }
    
}

export default Enchants