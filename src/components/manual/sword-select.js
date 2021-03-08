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
    "Rogue Sword Ability" : new SwordAbility("Speed Boost","Increases your movement Speed by +20% for 30 seconds - only +10 if ability already active.", 0, 50),
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

const listOfCommonReforges = {                                // Total Offensive Stats (estimate, just a total of all the stats given)
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null), // 11
    "Odd" : new SwordReforge(0,0,12,10,0,0,-5,"Common",null), // 22
}

const listOfUncommonReforges = {
    "Gentle" : new SwordReforge(5,0,0,0,10,0,0,"Uncommon",null), // 15
    "Odd" : new SwordReforge(0,0,15,15,0,0,-10,"Uncommon",null), // 30
}

const listOfRareReforges = {
    "Gentle" : new SwordReforge(7,0,0,0,15,0,0,"Rare",null), // 22
    "Odd" : new SwordReforge(0,0,15,15,0,0,-18,"Rare",null), // 30
}

const listOfEpicReforges = {
    "Gentle" : new SwordReforge(10,0,0,0,20,0,0,"Epic",null), // 30
    "Odd" : new SwordReforge(0,0,20,22,0,0,-32,"Epic",null), // 42
}

const listOfLegendaryReforges = {
    "Gentle" : new SwordReforge(15,0,0,0,25,0,0,"Legendary",null), // 40
    "Odd" : new SwordReforge(0,0,25,30,0,0,-50,"Legendary",null), // 55
}

const listOfMythicReforges = {
    "Gentle" : new SwordReforge(20,0,0,0,30,0,0,"Mythic",null), // 50
    "Odd" : new SwordReforge(0,0,30,40,0,0,-75,"Mythic",null), // 70
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
                "Wooden Sword" : new Sword(20,0,0,0,0,null,"Common")
            },
            
            swordReforge: {
                "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null)
            },

            "Recombobulated" : false
        }

        this.handleReforgeChange = this.handleReforgeChange.bind(this);
        this.handleWeaponChange = this.handleWeaponChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleReforgeChange(e) {
        let newReforge = e.target.value.split("\\")[0];

        // increase rarity if recombobulated.
        if (this.state.Recombobulated === true) {
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            let newIndex = listOfRarities.indexOf(currentSwordRarity) + 1;
            let newRarity = listOfRarities[newIndex];
            let oldReforgeKey = Object.keys(this.state.swordReforge)[0];
            switch (newRarity) {
                case "Uncommon":
                    newReforge = listOfUncommonReforges[oldReforgeKey];
                    break;
                case "Rare":
                    newReforge = listOfRareReforges[oldReforgeKey];
                    break;
                case "Epic":
                    newReforge = listOfEpicReforges[oldReforgeKey];
                    break;
                case "Legendary":
                    newReforge = listOfLegendaryReforges[oldReforgeKey];
                    break;
                case "Mythic":
                    newReforge = listOfMythicReforges[oldReforgeKey];
                    break;
                default:
                    break;
            }
        }

        this.setState({
            swordReforge: {
                [e.target.value.split("\\")[1]] : newReforge
            }
        });

        this.forceUpdate();
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    handleWeaponChange(e) {
        let newSword = e.target.value.split("\\")[0];
        // increase rarity if recombobulated.
        if (this.state.Recombobulated === true) {
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            let newIndex = listOfRarities.indexOf(currentSwordRarity) + 1;
            let newRarity = listOfRarities[newIndex];
            let oldSword = newSword;
            newSword = new Sword(oldSword.damage, oldSword.strength, oldSword.critChance,
                oldSword.critDamage, oldSword.intelligence, oldSword.ability, newRarity)
        }

        this.setState({
            currentSword: {    
                [e.target.value.split("\\")[1]] : newSword
            }
        });

        this.forceUpdate();
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    handleCheckboxChange(e) {
        if (e.target.checked)
        {
            // Increase rarity of item by one.
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            if (listOfRarities.indexOf(currentSwordRarity) < 0 || listOfRarities.indexOf(currentSwordRarity) > 5) {
                console.error(`Couldn't find rarity. Something went wrong.`);
                return;
            }
            let newIndex = listOfRarities.indexOf(currentSwordRarity) + 1;
            let oldSword = Object.values(this.state.currentSword)[0];
            let newRarity = listOfRarities[newIndex];

            // Get correct rarity of reforge.
            let newReforge;
            newReforge = listOfCommonReforges[Object.keys(this.state.swordReforge)[0]]
            let oldReforgeKey = Object.keys(this.state.swordReforge)[0];
            switch (newRarity) {
                case "Uncommon":
                    newReforge = listOfUncommonReforges[oldReforgeKey];
                    break;
                case "Rare":
                    newReforge = listOfRareReforges[oldReforgeKey];
                    break;
                case "Epic":
                    newReforge = listOfEpicReforges[oldReforgeKey];
                    break;
                case "Legendary":
                    newReforge = listOfLegendaryReforges[oldReforgeKey];
                    break;
                case "Mythic":
                    newReforge = listOfMythicReforges[oldReforgeKey];
                    break;
                default:
                    break;
            }
            
            this.setState({
                currentSword: {    
                    [Object.keys(this.state.currentSword)[0]] : new Sword(oldSword.damage, oldSword.strength,
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.ability, newRarity)
                },
                swordReforge: {
                    [Object.keys(this.state.swordReforge)[0]] : new SwordReforge(newReforge.strength, newReforge.damage,
                        newReforge.critChance, newReforge.critDamage, newReforge.attackSpeed, newReforge.ferocity, newReforge.intelligence,
                        newReforge.rarity, newReforge.reforgeAbility)
                },
                "Recombobulated" : e.target.checked
            })
        }
        else {
            // Decrease rarity of item by one.
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            if (listOfRarities.indexOf(currentSwordRarity) < 0 || listOfRarities.indexOf(currentSwordRarity) > 5) {
                console.error(`Couldn't find rarity. Something went wrong.`);
                return;
            }
            let newIndex = listOfRarities.indexOf(currentSwordRarity) - 1;
            let oldSword = Object.values(this.state.currentSword)[0];
            let newRarity = listOfRarities[newIndex];

            // Get correct rarity of reforge.
            let newReforge;
            newReforge = listOfCommonReforges[Object.keys(this.state.swordReforge)[0]]
            let oldReforgeKey = Object.keys(this.state.swordReforge)[0];
            switch (newRarity) {
                case "Common":
                    newReforge = listOfCommonReforges[oldReforgeKey];
                    break;
                case "Uncommon":
                    newReforge = listOfUncommonReforges[oldReforgeKey];
                    break;
                case "Rare":
                    newReforge = listOfRareReforges[oldReforgeKey];
                    break;
                case "Epic":
                    newReforge = listOfEpicReforges[oldReforgeKey];
                    break;
                case "Legendary":
                    newReforge = listOfLegendaryReforges[oldReforgeKey];
                    break;
                case "Mythic":
                    newReforge = listOfMythicReforges[oldReforgeKey];
                    break;
                default:
                    break;
            }

            this.setState({
                currentSword: {    
                    [Object.keys(this.state.currentSword)[0]] : new Sword(oldSword.damage, oldSword.strength,
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.ability, newRarity)
                },
                swordReforge: {
                    [Object.keys(this.state.swordReforge)[0]] : new SwordReforge(newReforge.strength, newReforge.damage,
                        newReforge.critChance, newReforge.critDamage, newReforge.attackSpeed, newReforge.ferocity, newReforge.intelligence,
                        newReforge.rarity, newReforge.reforgeAbility)
                },
                "Recombobulated" : e.target.checked
            })
        }
        
        this.forceUpdate();
        setTimeout(() => {
            this.props.onInputChange(this.state);
        }, 50);
    }

    render() {
        return (
            <div>
                <select onBlur={this.handleReforgeChange}>
                    {Object.entries(listOfCommonReforges)
                        .map(([key, value]) =>
                            <option value={`${value}\\${key}`} key={key}>{key}</option>
                        )
                    }
                </select>
                 
                <select onBlur={this.handleWeaponChange}>
                    {Object.entries(listOfWeapons)
                        .map(([key, value]) =>
                            <option value={`${value}\\${key}`} key={key}>{key}</option>
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