import React from "react"

const Enchants = () => {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {;
        console.log(event.target.value);
    }
    return (
        <div>
            <div onChange={this.onChangeValue}>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
        </div>
    )
}

export default Enchants