import React from "react"
import PropTypes from 'prop-types';
import Sword from "../objects/sword";
import SwordAbility from "../objects/sword-ability";
import SwordReforge from "../objects/sword-reforge";

// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// SwordAbility -> name, description, cooldown, manacost
// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, rarity, Reforge Ability
const listOfSwordAbilities = {
    "Aspect of the Jerry Ability" : new SwordAbility("Parley", "Channel your inner Jerry", 5, 0),
    "Rogue Sword Ability" : new SwordAbility("Speed Boost","Increases your movement Speed icon.png Speed by +20% for 30 seconds - only +10 if ability already active.", 0, 50),

}

const listOfWeapons = {
    "Wooden Sword" : new Sword(20,0,0,0,0,null,"Common"),
    "Thick Wooden Sword" : new Sword(20,0,0,0,0,null,"Uncommon"),
    "Golden Sword" : new Sword(20,0,0,0,0,null,"Common"),
    "Stone Sword" : new Sword(25,0,0,0,0,null,"Common"),
    "Iron Sword" : new Sword(30,0,0,0,0,null,"Common"),
    "Diamond Sword" : new Sword(20,0,0,0,0,null,"Common"),
    "Aspect of the Jerry" : new Sword(1,0,0,0,0, listOfSwordAbilities["Aspect of the Jerry Ability"],"Common"),
    "Thick Aspect of the Jerry" : new Sword(1,100,0,0,0, listOfSwordAbilities["Aspect of the Jerry Ability"],"Uncommon"),
    "Fancy Sword" : new Sword(20,0,0,0,0,null,"Common"),
    "Rogue Sword" : new Sword(20,0,0,0,0,listOfSwordAbilities["Rogue Sword Ability"],"Common"),
}

const listOfCommonReforges = {
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null),
    "Odd" : new SwordReforge(0,0,12,10,0,0,-5,"Common",null),
}

const listOfRarities = [
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
    "Mythic",
    "Supreme",
    "Special",
    "Very Special"
]

class SwordSelect extends React.Component {
    constructor() {
        super();
  
        this.state = {
            currentSword: {
                "Aspect of the Jerry" : new Sword(1,0,0,0,0, listOfSwordAbilities["Aspect of the Jerry Ability"],"Common")
            },
            
            swordReforge: {
                "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null)
            },

            "Recombobulated" : false
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleWeaponChange = this.handleWeaponChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleSelectChange(e) {
        this.setState({
            swordReforge: {
                [e.target.key] : e.target.value
            }
        });
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    handleWeaponChange(e) {
        this.setState({
            currentSword: {    
                [e.target.value.split("-")[1]] : e.target.value.split("-")[0]
            }
        });

        // increase rarity if recombobulated.
        if (this.state.Recombobulated === true) {
            
        }

        setTimeout(() => {
            this.props.onInputChange(this.state);
                // increase rarity if recombobulated.
            if (this.state.Recombobulated === true) {
                let currentSwordRarity = Object.keys(this.state.currentSword)[0].rarity;
                console.log(currentSwordRarity);
            }
        }, 50);

        
    }

    handleCheckboxChange(e) {
        if (e.target.checked)
        {
            // Increase rarity of item by one.
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            console.log(`Current Rarity: ${currentSwordRarity}`);
            console.log(`Current Index: ${listOfRarities.indexOf(currentSwordRarity)}`);
            let newIndex = listOfRarities.indexOf(currentSwordRarity) + 1;
            if (newIndex === -1) {
                
            }
            let oldSword = Object.values(this.state.currentSword)[0];
            let newRarity = listOfRarities[newIndex];
            console.log(`Increase: ${newRarity}`);
            this.setState({
                currentSword: {    
                    [Object.keys(this.state.currentSword)[0]] : new Sword(oldSword.damage, oldSword.strength,
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.ability, newRarity)
                },
                "Recombobulated" : e.target.checked
            })
        }
        else {
            // Decrease rarity of item by one.
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            console.log(`Current Value: ${Object.values(this.state.currentSword)[0]}`);
            console.log(`Current Rarity: ${currentSwordRarity}`);
            console.log(`Current Index: ${listOfRarities.indexOf(currentSwordRarity)}`);
            let newIndex = listOfRarities.indexOf(currentSwordRarity) - 1;
            let oldSword = Object.values(this.state.currentSword)[0];
            let newRarity = listOfRarities[newIndex];
            console.log(`Increase: ${newRarity}`);
            this.setState({
                currentSword: {    
                    [Object.keys(this.state.currentSword)[0]] : new Sword(oldSword.damage, oldSword.strength,
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.ability, newRarity)
                },
                "Recombobulated" : e.target.checked
            })
        }
    }

    render() {
        return (
            <div>
                <select onBlur={this.handleSelectChange}>
                    {Object.entries(listOfCommonReforges)
                        .map(([key, value]) =>
                            <option value={`${value}-${key}`} key={key}>{key}</option>
                        )
                    }
                </select>
                 
                <select onBlur={this.handleWeaponChange}>
                    {Object.entries(listOfWeapons)
                        .map(([key, value]) =>
                            <option value={`${value}-${key}`} key={key}>{key}</option>
                        )
                    }
                </select>
                Recombobulated 
                <input
                    name="isGoing"
                    type="checkbox"
                    onChange={this.handleCheckboxChange} 
                />
                    
                
            </div>
        )
    }
}

SwordSelect.propTypes = {
    onInputChange: PropTypes.func,
}
  
SwordSelect.defaultProps = {
    onInputChange: null,
}

export default SwordSelect;