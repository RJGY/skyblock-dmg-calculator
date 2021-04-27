import React from "react"
import PropTypes from 'prop-types';
import SwordReforge from "../objects/sword-reforge";
import ReforgeAbility from "../objects/reforge-ability";

// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// SwordAbility -> name, description, cooldown, manacost
// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, rarity, Reforge Ability
// ReforgeAbility -> strength, damageBonus, criticalDamageBonus, description

const listOfReforgeAbilities = {
    "Fabled Reforge Ability" : new ReforgeAbility("Your critical hits have a chance to deal up to +20% extra damage."),
    "Byron's Compassion" : new ReforgeAbility("Upon killing an enemy, you have a rare chance to grant coins to a more destitute player around you."),
    "Withered Reforge Ability" : new ReforgeAbility("Withered Bonus: Grants +1 Strength icon.png Strength per The Catacombs.png Catacombs level."),
}

const listOfCommonReforges = {                                  // Total Offensive Stats (estimate, just a total of all the stats given)
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",{}),   // 11
    "Odd" : new SwordReforge(0,0,12,10,0,0,-5,"Common",{}),   // 22
    "Fast" : new SwordReforge(0,0,0,0,10,0,0,"Common",{}),    // 10
    "Fair" : new SwordReforge(2,0,2,2,2,0,2,"Common",{}),     // 8
    "Epic" : new SwordReforge(15,0,0,10,1,0,0,"Common",{}),   // 26
    "Sharp" : new SwordReforge(0,0,10,20,0,0,0,"Common",{}),  // 30
    "Heroic" : new SwordReforge(15,0,0,0,1,0,40,"Common",{}), // 15
    "Spicy" : new SwordReforge(2,0,1,25,1,0,0,"Common",{}),   // 29
    "Legendary" : new SwordReforge(3,0,5,5,2,0,5,"Common",{}),// 15
    "Dirty" : new SwordReforge(2,0,0,0,2,2,0,"Common",{}),    // 6
    "Fabled" : new SwordReforge(30,0,0,15,0,0,0,"Common",listOfReforgeAbilities["Fabled Ability"]), // 45
    "Suspicious" : new SwordReforge(0,15,1,30,0,0,0,"Common",{}), // 46
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Common",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Common",{}), // 0
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Common",listOfReforgeAbilities["Withered Reforge Ability"]),
}

const listOfUncommonReforges = {
    "Gentle" : new SwordReforge(5,0,0,0,10,0,0,"Uncommon",{}), // 15
    "Odd" : new SwordReforge(0,0,15,15,0,0,-10,"Uncommon",{}), // 30
    "Fast" : new SwordReforge(0,0,0,0,20,0,0,"Uncommon",{}),   // 20
    "Fair" : new SwordReforge(3,0,3,3,3,0,3,"Uncommon",{}),     // 12
    "Epic" : new SwordReforge(20,0,0,15,2,0,0,"Uncommon",{}),   // 37
    "Sharp" : new SwordReforge(0,0,12,30,0,0,0,"Uncommon",{}),  // 42
    "Heroic" : new SwordReforge(20,0,0,0,2,0,50,"Uncommon",{}), // 20
    "Spicy" : new SwordReforge(3,0,1,35,2,0,0,"Uncommon",{}),   // 41
    "Legendary" : new SwordReforge(7,0,7,10,3,0,8,"Uncommon",{}),// 27
    "Dirty" : new SwordReforge(4,0,0,0,3,3,0,"Uncommon",{}), // 10
    "Fabled" : new SwordReforge(35,0,0,20,0,0,0,"Uncommon",listOfReforgeAbilities["Fabled Ability"]), // 55
    "Suspicious" : new SwordReforge(0,15,2,40,0,0,0,"Uncommon",{}), // 57
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",{}), // 0
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",listOfReforgeAbilities["Withered Reforge Ability"]), // 0
}

const listOfRareReforges = {
    "Gentle" : new SwordReforge(7,0,0,0,15,0,0,"Rare",{}), // 22
    "Odd" : new SwordReforge(0,0,15,15,0,0,-18,"Rare",{}), // 30
    "Fast" : new SwordReforge(0,0,0,0,30,0,0,"Rare",{}),   // 30
    "Fair" : new SwordReforge(4,0,4,4,4,0,4,"Rare",{}),    // 16
    "Epic" : new SwordReforge(25,0,0,20,4,0,0,"Rare",{}),   // 49
    "Sharp" : new SwordReforge(0,0,14,40,0,0,0,"Rare",{}),  // 54
    "Heroic" : new SwordReforge(25,0,0,0,2,0,65,"Rare",{}), // 25
    "Spicy" : new SwordReforge(4,0,1,45,4,0,0,"Rare",{}),   // 54
    "Legendary" : new SwordReforge(12,0,9,15,5,0,12,"Rare",{}),// 15
    "Dirty" : new SwordReforge(6,0,0,0,5,6,0,"Rare",{}), // 17
    "Fabled" : new SwordReforge(40,0,0,25,0,0,0,"Rare",listOfReforgeAbilities["Fabled Ability"]), // 65
    "Suspicious" : new SwordReforge(0,15,3,50,0,0,0,"Rare",{}), // 68
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Rare",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(165,165,0,0,0,0,0,"Rare",{}), // 330
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Rare",listOfReforgeAbilities["Withered Reforge Ability"]), // 0
}

const listOfEpicReforges = {
    "Gentle" : new SwordReforge(10,0,0,0,20,0,0,"Epic",{}),   // 30
    "Odd" : new SwordReforge(0,0,20,22,0,0,-32,"Epic",{}),    // 42
    "Fast" : new SwordReforge(0,0,0,0,40,0,0,"Epic",{}),   // 40
    "Fair" : new SwordReforge(7,0,7,7,7,0,7,"Epic",{}),     // 28
    "Epic" : new SwordReforge(32,0,0,27,7,0,0,"Epic",{}),   // 66
    "Sharp" : new SwordReforge(0,0,17,55,0,0,0,"Epic",{}),  // 72
    "Heroic" : new SwordReforge(32,0,0,0,3,0,80,"Epic",{}), // 32
    "Spicy" : new SwordReforge(7,0,1,60,7,0,0,"Epic",{}),   // 75
    "Legendary" : new SwordReforge(18,0,12,22,7,0,18,"Epic",{}),// 15
    "Dirty" : new SwordReforge(10,0,0,0,10,9,0,"Epic",{}), // 29
    "Fabled" : new SwordReforge(50,0,0,32,0,0,0,"Epic",listOfReforgeAbilities["Fabled Ability"]), // 82
    "Suspicious" : new SwordReforge(0,15,5,65,0,0,0,"Epic",{}), // 85
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Epic",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(165,165,0,0,0,0,0,"Epic",{}), // 330
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Epic",listOfReforgeAbilities["Withered Reforge Ability"]),
}

const listOfLegendaryReforges = {
    "Gentle" : new SwordReforge(15,0,0,0,25,0,0,"Legendary",{}),  // 40
    "Odd" : new SwordReforge(0,0,25,30,0,0,-50,"Legendary",{}),   // 55
    "Fast" : new SwordReforge(0,0,0,0,50,0,0,"Legendary",{}),   // 50
    "Fair" : new SwordReforge(10,0,10,10,10,0,10,"Legendary",{}),     // 40
    "Epic" : new SwordReforge(40,0,0,35,10,0,0,"Legendary",{}),   // 85
    "Sharp" : new SwordReforge(0,0,20,75,0,0,0,"Legendary",{}),  // 95
    "Heroic" : new SwordReforge(40,0,0,0,5,0,100,"Legendary",{}), // 40
    "Spicy" : new SwordReforge(10,0,1,80,10,0,0,"Legendary",{}),   // 101
    "Legendary" : new SwordReforge(25,0,15,28,10,0,25,"Legendary",{}),    // 15
    "Dirty" : new SwordReforge(12,0,0,0,15,12,0,"Legendary",{}), // 39
    "Fabled" : new SwordReforge(60,0,0,40,0,0,0,"Legendary",listOfReforgeAbilities["Fabled Ability"]), // 100
    "Suspicious" : new SwordReforge(0,15,7,85,0,0,0,"Legendary",{}), // 107
    "Gilded" : new SwordReforge(75,75,0,0,0,0,0,"Legendary",listOfReforgeAbilities["Byron's Compassion"]), // 150
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Legendary",{}), // 0
    "Withered" : new SwordReforge(135,0,0,0,0,0,0,"Legendary",listOfReforgeAbilities["Withered Reforge Ability"]), // 135
}

const listOfMythicReforges = {
    "Gentle" : new SwordReforge(20,0,0,0,30,0,0,"Mythic",{}), // 50
    "Odd" : new SwordReforge(0,0,30,40,0,0,-75,"Mythic",{}),  // 70
    "Fast" : new SwordReforge(0,0,0,0,60,0,0,"Mythic",{}),  // 60
    "Fair" : new SwordReforge(12,0,12,12,12,0,12,"Mythic",{}),  // 48
    "Epic" : new SwordReforge(50,0,0,45,12,0,0,"Mythic",{}),   // 107
    "Sharp" : new SwordReforge(0,0,25,90,0,0,0,"Mythic",{}),  // 30
    "Heroic" : new SwordReforge(50,0,0,0,7,125,"Mythic",{}), // 50
    "Spicy" : new SwordReforge(12,0,1,100,12,0,0,"Mythic",{}),   // 125
    "Legendary" : new SwordReforge(32,0,18,36,15,0,15,"Mythic",{}), // 15
    "Dirty" : new SwordReforge(15,0,0,0,20,15,0,"Mythic",{}), // 50
    "Fabled" : new SwordReforge(75,0,0,50,0,0,0,"Mythic",listOfReforgeAbilities["Fabled Ability"]), // 125
    "Suspicious" : new SwordReforge(0,15,10,110,0,0,0,"Mythic",{}), // 135
    "Gilded" : new SwordReforge(90,90,0,0,0,0,0,"Mythic",listOfReforgeAbilities["Byron's Compassion"]), // 180
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Mythic",{}), // 0
    "Withered" : new SwordReforge(170,0,0,0,0,0,0,"Mythic",listOfReforgeAbilities["Withered Reforge Ability"]), // 170
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

class ReforgeSelect extends React.Component {
    constructor() {
        super();
  
        this.state = {      
            swordReforge: {
                "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",{}),
            },

            "Recombobulated" : false
        }

        this.handleReforgeChange = this.handleReforgeChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleReforgeChange(e) {
        let newReforge = e.target.value.split("\\")[0];

        // increase rarity if recombobulated.
        if (this.state.Recombobulated === true) {
            let currentReforgeRarity = Object.values(this.state.swordReforge)[0].rarity;
            let newIndex = listOfRarities.indexOf(currentReforgeRarity) + 1;
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

    handleCheckboxChange(e) {
        if (e.target.checked)
        {
            // Increase rarity of item by one.
            let currentReforgeRarity = Object.values(this.state.swordReforge)[0].rarity;

            if (listOfRarities.indexOf(currentReforgeRarity) < 0 || listOfRarities.indexOf(currentReforgeRarity) > 5) {
                console.error(`Couldn't find rarity. Something went wrong.`);
                return;
            }
            let newIndex = listOfRarities.indexOf(currentReforgeRarity) + 1;
            let newRarity = listOfRarities[newIndex];

            // Get correct rarity of reforge.
            let newReforge = listOfCommonReforges[Object.keys(this.state.swordReforge)[0]]
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
            let currentReforgeRarity = Object.values(this.state.swordReforge)[0].rarity;
            if (listOfRarities.indexOf(currentReforgeRarity) < 0 || listOfRarities.indexOf(currentReforgeRarity) > 5) {
                console.error(`Couldn't find rarity. Something went wrong.`);
                return;
            }
            let newIndex = listOfRarities.indexOf(currentReforgeRarity) - 1;
            let newRarity = listOfRarities[newIndex];

            // Get correct rarity of reforge.
            let newReforge = listOfCommonReforges[Object.keys(this.state.swordReforge)[0]]
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
                default:
                    break;
            }

            this.setState({
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

ReforgeSelect.propTypes = {
    onInputChange: PropTypes.func,
}
  
ReforgeSelect.defaultProps = {
    onInputChange: null,
}

export default ReforgeSelect;