import React from "react"
import Enchants from "./sword-enchants"

const Calculator = () => {
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
                    Attack Speed:
                    <input type="number"/>
                </label>
                <label>
                    Attack Speed:
                    <input type="number"/>
                </label>
                <label>
                    <Enchants/>
                </label>
            </form>
        </div>
    )
}

export default Calculator