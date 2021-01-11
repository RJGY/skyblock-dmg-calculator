import React from "react"
import Enchants from "./sword-enchants"

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.getSwordEnchants = this.getSwordEnchants.bind(this)
    }

    getSwordEnchants(enchants) {
        let { swordEnchants } = enchants;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Strength:
                        <input type="number"/>
                    </label>
                    <label>
                        Critical Chance:
                        <input type="number"/>
                    </label>
                    <label>
                        Critical Damage:
                        <input type="number"/>
                    </label>
                    
                    <label>
                        Attack Speed:
                        <input type="number"/>
                    </label>

                    <label>
                        <Enchants onInputChange={this.getSwordEnchants}/>
                        current sharpness: {this.swordEnchants.sharpness}
                    </label>
                </form>
            </div>
        )
    }
}

export default Calculator