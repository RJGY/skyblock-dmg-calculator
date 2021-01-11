import React from "react"
import Enchants from "./sword-enchants"

let swordEnchants = {
    Sharpness: 0,
    FirstStrike: 0,
    GiantKiller: 0,
};

class Calculator extends React.Component {
    constructor() {
        super()
        
        this.getSwordEnchants = this.getSwordEnchants.bind(this)
    }

    getSwordEnchants(enchants) {
        swordEnchants = enchants;
        console.log(swordEnchants);
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
                    </label>

                    <label>
                        From enchants, {Object.entries(swordEnchants)
                            .map(([key, value]) => 
                            <div key={key}>{key}: {value}</div>)}
                    </label>
                </form>
            </div>
        )
    }
}

export default Calculator