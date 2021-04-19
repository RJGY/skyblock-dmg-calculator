import React from "react"
import PropTypes from 'prop-types';
import Sword from "../objects/sword";
import SwordAbility from "../objects/sword-ability";
import SwordReforge from "../objects/sword-reforge";
import ReforgeAbility from "../objects/reforge-ability";
import SwordPassive from "../objects/sword-passive";
import DamageTypes from "../objects/damage-types";

// Sword -> damage, strength, critChance, critDamage, intelligence, ability
// SwordAbility -> name, description, cooldown, manacost
// Reforge -> Strength, Damage, Crit Chance, Crit Damage, Attack Speed, Ferocity, Intelligence, rarity, Reforge Ability
// ReforgeAbility -> strength, damageBonus, criticalDamageBonus, description

const listOfSwordAbilities = {
    "Aspect of the Jerry Ability" : new SwordAbility("Parley", "Channel your inner Jerry", 5, 0, 0),
    "Rogue Sword Ability" : new SwordAbility("Speed Boost","Increases your movement Speed by +20% for 30 seconds - only +10 if ability already active.", 0, 50, 0),
    "Jerry-chine Gun Ability" : new SwordAbility("Rapid-fire", "Fires off multiple jerry bombs that create an explosion on impact, dealing up to <varies> damage.", 0, 10, 0.2),
    "Ember Rod Ability" : new SwordAbility("Fire Blast", "Shoot 3 Fireballs in rapid succession in front of you!", 30, 150, 1),
    "Frozen Scythe Ability" : new SwordAbility("Ice Bolt", "Shoots 1 Ice Bolt that deals 1000 Ability Damage and slows enemies hit for 5 seconds!", 0, 50, 0.3),
    "Golem Sword Ability" : new SwordAbility("Iron Punch","Punch the ground, damaging enemies in a hexagon around you for 250 base damage.",3,70,0.1),
    "Aspect of the End Ability" : new SwordAbility("Instant Transmission","Teleport 8 blocks ahead of you and gain +50 Speed for 3 seconds.",0,50,0),
    "Scorpion Foil Ability" : new SwordAbility("Heartstopper","You have 4 tickers. Blocking clears 1 of them and heals 60 HP. Once all tickers are cleared, your next attack is empowered for +250% damage. Tickers refill after 5 seconds.",5,0,0),
    "Zombie Sword Ability" : new SwordAbility("Instant Heal","Heal yourself for 120 + 5% max HP and players within 7 blocks for 40 HP. Holds 4 charges, 15 seconds to refill a charge.",15,70,0),
    "Ornate Zombie Sword Ability" : new SwordAbility("Instant Heal","Heal yourself for 144 + 5% max HP and players within 7 blocks for 40 HP. Holds 5 charges, 15 seconds to refill a charge.",15,70,0),
    "End Stone Sword Ability" : new SwordAbility("Extreme Focus", "Consumes all your remaining Mana to grant Damage Resistance for 5 seconds and extra dmage on your next hit (within 5 seonds) depending on how much Mana was consumed!", 0,-1,1),
    "Edible Mace Ability" : new SwordAbility("ME SMASH HEAD", "Your next attack deals double dmage and weakens animals, making them deal -35% damage for 30 seconds.", 0, 100, 0),
    "Ink Wand Ability" : new SwordAbility("Ink Bomb","Shoot and ink bomb in front of you dealing 10,000 Ability Damage and giving blindness", 30, 60, 1),
    "Midas Staff Ability" : new SwordAbility("Molten Wave","Cast a wave of molten gold in the direction you are facing! Deals up to 16000 damage. The ability damage bonus of this item is dependent on the price paid in the Dark Auction! the maximum bonus of this item is 16000 if the bid was 100,000,00 or higher for a total of 32,000 damage.", 1,500,1),
    "Soul Whip Ability" :  new SwordAbility("Flay","Flay your whip in an arc, dealing your melee damage to all enemies in it's path.",0.5,0,0),
    "Leaping Sword Ability" :  new SwordAbility("Leap","Leap into the air and deal 350 Ability Damage to nearby enemies upon landing on the ground. Damaged enemies will also be frozen for 1 second.",1,50,1),
    "Yeti Sword Ability" :  new SwordAbility("Terrain Toss","Throws a chunk of terrain in the direction you are facing! Deals up to 15,000 Ability Damage. Maximum range of 32 blocks.",1,250,0.3),
    "Silk-Edge Sword Ability" :  new SwordAbility("Leap","Leap into the air and deal 400 Ability Damage to nearby enemies upon landing on the ground. Damaged enemies will also be frozen for 1 second.",1,50,1),
    "Phantom Rod Ability" : new SwordAbility("Phantom Impel","Terrify hooked enemies pushing them away and dealing massive damage.",0,0,0),
    "Pigman Sword Ability" :  new SwordAbility("Burning Souls","Gain +300 Defense for 5s and cast vortex of flames towards enemies, dealing up to 30,000 damage over 5 seconds.",5,400,0.1),
    "Aspect of the Dragons Ability" :  new SwordAbility("Dragon Rage","All monsters in front of you take 12,000 Ability Damage. Hit monsters take large knockback.",0,100,0.1),
    "Reaper Scythe Ability" :  new SwordAbility("Raise Souls", "Monsters you kill using this item will drop their soul. You can clock on their souls on the ground using this item to absorb them and then spawn them to fight by your side. Mana cost is based on the power of the monsters that you summon. Shift right-click to view and remove souls from this item. If your summoned monster dies, the soul will be removed.", 0, 0, 0,),
    
    // Dungeon sword abilities.
    "Bonzo's Staff Ability" :  new SwordAbility("Showtime","Shoots ballons that create a large explosion on impact, dealing up to 1000 Damage.",0,100,0.2),
    "Dreadlord Sword Ability" :  new SwordAbility("Dreadlord","Shoots a Skull that does 750 damage.",0,40,0.3),
    "Silent Death Ability" : new SwordAbility("Shadowstep","Teleport behind the enemy you are looking at, gaining +25 Strength for 10 seconds. Max range of 20 blocks. Cooldown resets on kills.",60,0,0,),
    "Crypt Witherlord Sword" : new SwordAbility("Witherlord","Shoot 3 Skills each doing 300 damage.",3,40,1),
    "Spirit Sceptre Ability" :  new SwordAbility("Guided Bat","Shoots a guided spirit bat, following your aim and exploding for 2,000 damage.",0,250,0.2),
    "Ice Spray Wand Ability" : new SwordAbility("Ice Spray","Produces a cone of ice in front of the caster that deals 25,500 damage to mobs and freezes them in place for 5 seconds! Frozen mobs take 10% increased damage!",5,50,0.1),
    "Livid Dagger Ability" : new SwordAbility("Throw","Throw your dagger at enemies!",5,150,0),
    "Shadow Fury Ability" : new SwordAbility("Shadow Fury","Rapidly teleports you up to 5 enemies within 10 blocks, rooting each of them and allowing you to him them.",15,0,0),
    "Wither Cloak Sword Ability" : new SwordAbility("Creepter Veil","Spawns a veil around you that grants you immunity from damage. Unable to attack wile the shield is active but your creepers deal 200 damage to nearby enemies every second. Click again to de-activate. Costs 20% max Mana when you get hit.",0,-1,0),
    "Necromancer Sword Ability" : new SwordAbility("Raise Souls","Monsters you kill using this item will drop their soul. You can click on their souls on the ground using this item to absorb them and then spawn them to fight by your side. Mana cost is based on the power of the mosnters you summon. Shift right-click to view and remove souls from this item. If your summoned monster dies, the soul will be removed. Max Souls: 2",1,0,0),
    "Giant's Sword Ability" : new SwordAbility("Giant's Slam","Slam your sword into the ground dealing 100,000 damage to nearby enemies.",30,100,1),
}

const listOfSwordPassives = {
    "Spider Sword Passive" : new SwordPassive("Deals +100% damage to Spiders, Cave Spiders and Silverfish.", 100, DamageTypes.WEAPONBONUS),
    "Undead Sword Passive" : new SwordPassive("Deals +100% damage to Skeletons, Withers, Zombies and Zombie Pigmen.", 100, DamageTypes.WEAPONBONUS),
    "End Sword Passive" : new SwordPassive("Deals +100% damage to Endermites, Endermen, Etc.", 100, DamageTypes.WEAPONBONUS),
    "Prismarine Sword Passive" : new SwordPassive("Deals +200% damage while in water.", 200, DamageTypes.WEAPONBONUS),
    "Tactician's Sword Passive" : new SwordPassive("Gains +15 Damage for each Combat collection of Tier VII and over its wearer (10 collections, hence a max of +150).", 150, DamageTypes.WEAPONDAMAGE),
    "Revenant Falchion Passive" : new SwordPassive("Deals +150% damage to Zombies.", 150, DamageTypes.WEAPONBONUS),
    "Raider Axe Passives" : { 1 : new SwordPassive("Earn 20+ Coins from monster kills, +1 Damage per 500 kills Mobs level 10+ (max +35), +1 Strength per 500 wood in collections (max +100).", { "Strength" : 100 }, DamageTypes.STATBONUS),
        2 : new SwordPassive("Earn 20+ Coins from monster kills, +1 Damage per 500 kills Mobs level 10+ (max +35), +1 Strength per 500 wood in collections (max +100).", 35, DamageTypes.WEAPONDAMAGE) },
    "Shaman Sword Passive" : new SwordPassive("Deal +1 Damage per 50 max HP. Recieve -20% damage from wolves", 1, DamageTypes.WEAPONDAMAGE),
    "Scorpion Foil Passive" : new SwordPassive("Deal +250% damage against Spiders.", 250, DamageTypes.WEAPONBONUS),
    "Recluse Fang Passive" : new SwordPassive("Squash 'em - Squash Spiders to accumulate strength against them. +1 Strength per 40 squashed. Max +270 Strength.", {"Strength" : 370}, DamageTypes.STATBONUS),
    "Reaper Falchion Passive" : new SwordPassive("Heal 10HP per hit. Deal +200% damage to Zombies. Recieve 20% less damage from Zombies when held.", 200, DamageTypes.WEAPONBONUS),
    "Pooch Sword Passives" : { 1 : new SwordPassive("Deal +1 Damage per 50 max HP. Recieve -20% damage from wolves. Gain +150 Strength against wolves.", { "Strength" : 150 }, DamageTypes.STATBONUS),
        2 : new SwordPassive("Deal +1 Damage per 50 max HP. Recieve -20% damage from wolves. Gain +150 Strength against wolves.", 1, DamageTypes.WEAPONDAMAGE) },
    "Emerald Blade Passive" : new SwordPassive("A powerful blade made from pure emeralds. This blade becomes stronger as you carry more coins in your purse.", 1, DamageTypes.WEAPONDAMAGE),
    "Axe of the Shredded Passive" : new SwordPassive("Heal 50HP per hit. Deal 250% damage to Zombies. Recieve 25% less damage from Zombies when held.", 250, DamageTypes.WEAPONBONUS),
    "Midas Sword Passive" : new SwordPassive("The Strength and Damage bonus of this item is dependent on the price paid for it in the Dark Auction. Max bonus at 50,000,000 coins for +120 Damage and Strength.", {"Strength" : 120}, DamageTypes.STATBONUS),

}

const listOfReforgeAbilities = {
    "Fabled Reforge Ability" : new ReforgeAbility("Your critical hits have a chance to deal up to +20% extra damage."),
    "Byron's Compassion" : new ReforgeAbility("Upon killing an enemy, you have a rare chance to grant coins to a more destitute player around you."),
    "Withered Reforge Ability" : new ReforgeAbility("Withered Bonus: Grants +1 Strength icon.png Strength per The Catacombs.png Catacombs level."),
}

// Sword -> (damage, strength, critChance, critDamage, intelligence, speed, defense, attackSpeed, ferocity, ability, rarity)
const listOfWeapons = {
    // Vanilla Swords
    "Wooden Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,null,"Common"),
    "Thick Wooden Sword" : new Sword(20,100,0,0,0,0,0,0,0,null,null,"Uncommon"),
    "Golden Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,null,"Common"),
    "Stone Sword" : new Sword(25,0,0,0,0,0,0,0,0,null,null,"Common"),
    "Iron Sword" : new Sword(30,0,0,0,0,0,0,0,0,null,null,"Common"),
    "Diamond Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,null,"Common"),

    // Vanilla Skyblock Swords
    "Aspect of the Jerry" : new Sword(1,0,0,0,0,0,0,0,0, listOfSwordAbilities["Aspect of the Jerry Ability"],null,"Common"),
    "Thick Aspect of the Jerry" : new Sword(1,100,0,0,0,0,0,0,0, listOfSwordAbilities["Aspect of the Jerry Ability"],null,"Uncommon"),
    "Fancy Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,null,"Common"),
    "Rogue Sword" : new Sword(20,0,0,0,0,0,0,0,0,listOfSwordAbilities["Rogue Sword Ability"],null, "Common"),
    "Spider Sword" : new Sword(30,0,0,0,0,0,0,0,0,null,listOfSwordPassives["Spider Sword Passive"], "Common"),
    "Undead Sword" : new Sword(30,0,0,0,0,0,0,0,0,null,listOfSwordPassives["Undead Sword Passive"], "Common"),
    "End Sword" : new Sword(35,0,0,0,0,0,0,0,0,null,listOfSwordPassives["End Sword Passive"],"Uncommon"),
    "Cleaver" : new Sword(40,10,0,0,0,0,0,0,0,listOfSwordAbilities["Cleaver Ability"],null,"Uncommon"),
    "Flaming Sword" : new Sword(50,20,0,0,0,0,0,0,0,listOfSwordAbilities["Flaming Sword Ability"], null, "Uncommon"),
    "Prismarine Blade" : new Sword(50,25,0,0,0,0,0,0,0,null, listOfSwordPassives["Prismarine Sword Passive"],"Uncommon"),
    "Hunter Knife" : new Sword(50,0,0,0,0,40,0,0,0,null,null,"Uncommon"),
    "Tactician's Sword" : new Sword(50,0,0,0,0,0,0,0,0,null, listOfSwordPassives["Tactician's Sword Passive"], "Rare"),
    "Thick Tactician's Sword" : new Sword(50,100,0,0,0,0,0,0,0,listOfSwordAbilities["Tactician's Sword Ability"],null, "Epic"),
    "Jerry-chine Gun" : new Sword(80,0,0,0,200,0,0,0,0,listOfSwordAbilities["Jerry-chine Gun Ability"],null,"Epic"),
    "Ember Rod" : new Sword(80,35,0,0,200,0,0,0,0,listOfSwordAbilities["Ember Rod Ability"],null,"Epic"),
    "Frozen Scythe" : new Sword(80,0,0,0,0,0,0,0,0,listOfSwordAbilities["Frozen Scythe Ability"],null,"Rare"),
    "Golem Sword" : new Sword(80,125,0,0,0,0,25,0,0,listOfSwordAbilities["Golem Sword Ability"],null,"Rare"), // Make abilities from here.
    "Raider Axe" : new Sword(80, 50,0,0,0,0,0,0,0,null,null,"Rare"),
    "Revenant Falchion" : new Sword(90,50,0,0,100,0,0,0,0,null,null,"Rare"),
    "Silver Fang" : new Sword(100,0,0,0,0,0,0,0,0,null,null,"Uncommon"),
    "Shaman Sword" : new Sword(100,20,0,0,0,5,0,0,0,null,"Deal +1 Damage per 50 max HP. Recieve -20% damage from wolves.", "Epic"),
    "Aspect of the End" : new Sword(100,100,0,0,0,0,0,0,0,listOfSwordAbilities["Aspect of the End Ability"],null,"Rare"),
    "Scorpion Foil" : new Sword(100,100,0,0,0,0,0,0,0,listOfSwordAbilities["Scorpion Foil Ability"],"Deal +250% damage against Spiders.","Epic"),
    "Thick Scorpion Foil" : new Sword(100,200,0,0,0,0,0,0,0,listOfSwordAbilities["Scorpion Foil Ability"],"Deal +250% damage against Spiders.","Legendary"),
    "Zombie Sword" : new Sword(100,50,0,0,50,0,0,0,0,listOfSwordAbilities["Zombie Sword Ability"],null,"Rare"),
    "Ornate Zombie Sword" : new Sword(110,60,0,0,50,0,0,0,0,listOfSwordAbilities["Ornate Zombie Sword Ability"],null,"Epic"),
    "End Stone Sword" : new Sword(120,0,0,0,0,0,0,0,0,listOfSwordAbilities["End Stone Sword Ability"], null, "Epic"),
    "Recluse Fang" : new Sword(120,30,0,20,0,0,0,0,0,null,"Squash 'em - Squash Spider to accumulate strength against them. 1+ strength per 40 squashed.", "Rare"),
    "Reaper Falchion" : new Sword(120,100,0,0,200,0,0,0,0,null,"Heal 10 HP per hit. Deal +200% damage to Zombies. Recieve 20% less damage from Zombies when held.", "Epic"),
    "Pooch Sword" : new Sword(120,20,0,0,0,5,0,0,0,null,"Deal  1+ Damage per 50 max HP. Recieve -20% damage from wolves. Gain +150 Strength against wolves.", "Legendary"),
    "Edible Mace" : new Sword(125,25,0,0,0,0,0,0,0,listOfSwordAbilities["Edible Mace Ability"],null,"Rare"),
    "Ink Wand" : new Sword(130,90,0,0,0,0,0,0,0,listOfSwordAbilities["Ink Wand Ability"],null,"Epic"),
    "Emerald Blade" : new Sword(130,0,0,0,0,0,0,0,0,null,"This blade becomes stronger as you carry more coins in your purse.","Epic"),
    "Midas Staff" : new Sword(130,0,0,0,0,0,0,0,0,listOfSwordAbilities["Midas Staff Ability"],null,"Legendary"),
    "Axe of the Shredded" : new Sword(140,115,0,0,0,0,0,0,0,null,"Heal 50 HP per hit. Deal +250% damage to Zombies. Recieve 25% less damage from Zombies when held.","Legendary"),
    "Soul Whip" : new Sword(145,175,0,0,0,0,0,0,0,listOfSwordAbilities["Soul Whip Ability"],null,"Legendary"),
    "Leaping Sword" : new Sword(150,100,0,25,0,0,0,0,0,listOfSwordAbilities["Leaping Sword Ability"],null,"Epic"),
    "Yeti Sword" : new Sword(150,170,0,0,50,0,0,0,0,listOfSwordAbilities["Yeti Sword Ability"],null,"Legendary"),
    "Silk Edge Sword" : new Sword(175,125,0,25,0,0,0,0,0,listOfSwordAbilities["Silk Edge Sword Ability"],null,"Epic"),
    "Sword of Revelations" : new Sword(180,50,0,0,0,0,0,0,0,null,"Heal 15 HP per hit. Deal +200% damage to Mythological Creatures and Minos Followers. Recieve 75% more damage from them when held.","Epic"),
    "Thick Sword of Revelations" : new Sword(180,150,0,0,0,0,0,0,0,null,"Heal 15 HP per hit. Deal +200% damage to Mythological Creatures and Minos Followers. Recieve 75% more damage from them when held.","Legendary"),
    "Daedalus Axe" : new Sword(200,0,0,0,0,0,0,0,0,null,"Gains +4 Damage per Taming level. Copies the stats from your active pet. Earn 35 coins from monster kills.","Legendary"),
    "Phantom Rod" : new Sword(200,125,0,0,0,0,0,0,0,listOfSwordAbilities["Phantom Rod Ability"],null,"Legendary"),
    "Pigman Sword" : new Sword(200,100,5,30,300,0,0,0,0,listOfSwordAbilities["Pigman Sword Ability"],null,"Legendary"),
    "Aspect of the Dragons" : new Sword(225,100,0,0,0,0,0,0,0,listOfSwordAbilities["Aspect of the Dragons Ability"],null,"Legendary"),
    "Midas Sword" : new Sword(150,0,0,0,0,0,0,0,0,null,"The strength and damage bonus of this item is dependent on the price paid for it at the Dark Auction! Max bonus: $50,000,000 for 120 Strength and Damage.","Legendary"),
    "Reaper Scythe" : new Sword(333,0,0,0,0,10,0,0,0,listOfSwordAbilities["Reaper Scythe Ability"],null,"Legendary"),

    // Dungeon Swords
    "Super Cleaver" : new Sword(85,20,0,0,0,0,0,0,0,null,"Cleave - When hitting an entity, monsters in a 3 block range will be hit for a potion of that damage too.","Rare"),
    "Bonzo's Staff" : new Sword(160,0,0,0,250,0,0,0,0,listOfSwordAbilities["Bonzo's Staff Ability"],null,"Rare"),
    "Dreadlord Sword" : new Sword(52,50,0,0,85,0,0,0,0,listOfSwordAbilities["Dreadlord Sword Ability"],null,"Epic"),
    "Zombie Soldier Cutlass" : new Sword(52,26,0,0,0,0,0,0,0,null,"Love Tap - Heals you for +10 Health when you hit an entity!","Epic"),
    "Silent Death" : new Sword(85,31,1,9,0,0,0,0,0,listOfSwordAbilities["Silent Death Ability"],null,"Epic"),
    "Adaptive Blade" : new Sword(170,0,0,0,0,0,0,0,0,null,"Weapon created by Scarf, it automatically adapts to its user inside Dungeons. Berserk: +35 Strength, +5 Speed. Healer: +20% regeneration and restore +5 Health/s to nearby allies. Mage: +200 Intelligence. Tank: +100 Defense, +5 True Defense. Archer: +100 Crit Damage.","Epic"),
    "Crypt Witherlord Sword": new Sword(62,50,0,0,113,0,0,0,0,listOfSwordAbilities["Crypt Witherlord Sword Ability"],null,"Epic"),
    "Zombie Commander Whip" : new Sword(65,5,0,0,0,0,0,0,0,null,"Commander Whip - Every 1 Zombie killed dur a dungeon run by this weapon gives the user +1 Strength.","Epic"),
    "Hyper Cleaver" : new Sword(145,50,0,0,0,0,0,0,0,null,"Cleave - When hitting an entity, monsters in a 4 block range will be hit for a portion of that damage too.", "Epic"),
    "Spirit Sword" : new Sword(210,50,0,0,0,0,0,0,0,null,"Deals +2% more damage to Undead monsters for every 1% of your missing health. Spirit Item: When turned into a ghost, this item becomes a ghost ability. Spirit Ability: Spirit Bomb - Shoots a Spirit that deals 8000 damage on impact.", "Epic"),
    "Zombie Knight Sword" : new Sword(82,21,0,0,0,0,0,0,0,null,"Zombie Knight - Gains +30 Strength when used with Zombie Knight Armour.","Legendary"),
    "Spirit Sceptre" : new Sword(180,0,0,0,300,0,0,0,0,listOfSwordAbilities["Spirit Sceptre Ability"],null,"Legendary"),
    "Ice Spray Wand" : new Sword(120,0,0,0,293,0,0,0,0,listOfSwordAbilities["Ice Spray Wand Ability"],null,"Epic"),
    "Livid Dagger" : new Sword(210,60,100,50,0,0,0,100,0,listOfSwordAbilities["Livid Dagger Ability"],"Your Critical Hits deal +100% more damage if you are behind your target.","Legendary"),
    "Shadow Fury" : new Sword(300,125,0,0,0,30,0,0,0,listOfSwordAbilities["Shadow Fury Ability"],null,"Legendary"),
    "Fel Sword" : new Sword(190,135,0,0,0,0,0,0,0,null,"Every 100 kills with this weapon grants an extra +1 Weapon Damage, up to 100 extra damage. Dungeon Healer Bonuses: Increases healing for your Healing Circle by 10%. Reduces the cooldown of your Wish ultimate by 10 seconds. Right-click to use your class ability!", "Epic"),
    "Wither Cloak Sword" : new Sword(190,135,0,0,0,0,250,0,0,listOfSwordAbilities["Wither Cloak Sword Ability"],null,"Epic"),
    "Necron's Blade" : new Sword(260,110,0,0,50,0,0,0,0,null,"Deal 50% more damage to Withers. Right-click to use your class ability!","Legendary"),
    "Hyperion" : new Sword(260,150,0,0,400,0,0,0,30,null,"Deals +50% more damage to Withers. Grants +1 Damage and +2 Intelligence per Catacombs level.","Legendary"),
    "Astraea" : new Sword(260,150,0,0,50,0,210,0,30,null,"Deals +50% more damage to Withers. Grants +1 Damage and +1 Defense per Catacombs level.","Legendary"),
    "Scylla" : new Sword(260,150,12,35,50,0,0,0,30,null,"Deals +50% more damage to Withers. Grants +1 Damage and +1 Critical Damage per Catacombs level.","Legendary"),
    "Valkyrie" : new Sword(270,120,0,0,60,0,0,0,60,null,"Deals +50% more damage to Withers. Grants +1 Damage and +1 Strength per Catacombs level.","Legendary"),
}

const listOfCommonReforges = {                                  // Total Offensive Stats (estimate, just a total of all the stats given)
    "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null),   // 11
    "Odd" : new SwordReforge(0,0,12,10,0,0,-5,"Common",null),   // 22
    "Fast" : new SwordReforge(0,0,0,0,10,0,0,"Common",null),    // 10
    "Fair" : new SwordReforge(2,0,2,2,2,0,2,"Common",null),     // 8
    "Epic" : new SwordReforge(15,0,0,10,1,0,0,"Common",null),   // 26
    "Sharp" : new SwordReforge(0,0,10,20,0,0,0,"Common",null),  // 30
    "Heroic" : new SwordReforge(15,0,0,0,1,0,40,"Common",null), // 15
    "Spicy" : new SwordReforge(2,0,1,25,1,0,0,"Common",null),   // 29
    "Legendary" : new SwordReforge(3,0,5,5,2,0,5,"Common",null),// 15
    "Dirty" : new SwordReforge(2,0,0,0,2,2,0,"Common",null),    // 6
    "Fabled" : new SwordReforge(30,0,0,15,0,0,0,"Common",listOfReforgeAbilities["Fabled Ability"]), // 45
    "Suspicious" : new SwordReforge(0,15,1,30,0,0,0,"Common",null), // 46
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Common",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Common",null), // 0
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Common",listOfReforgeAbilities["Withered Reforge Ability"]),
}

const listOfUncommonReforges = {
    "Gentle" : new SwordReforge(5,0,0,0,10,0,0,"Uncommon",null), // 15
    "Odd" : new SwordReforge(0,0,15,15,0,0,-10,"Uncommon",null), // 30
    "Fast" : new SwordReforge(0,0,0,0,20,0,0,"Uncommon",null),   // 20
    "Fair" : new SwordReforge(3,0,3,3,3,0,3,"Uncommon",null),     // 12
    "Epic" : new SwordReforge(20,0,0,15,2,0,0,"Uncommon",null),   // 37
    "Sharp" : new SwordReforge(0,0,12,30,0,0,0,"Uncommon",null),  // 42
    "Heroic" : new SwordReforge(20,0,0,0,2,0,50,"Uncommon",null), // 20
    "Spicy" : new SwordReforge(3,0,1,35,2,0,0,"Uncommon",null),   // 41
    "Legendary" : new SwordReforge(7,0,7,10,3,0,8,"Uncommon",null),// 27
    "Dirty" : new SwordReforge(4,0,0,0,3,3,0,"Uncommon",null), // 10
    "Fabled" : new SwordReforge(35,0,0,20,0,0,0,"Uncommon",listOfReforgeAbilities["Fabled Ability"]), // 55
    "Suspicious" : new SwordReforge(0,15,2,40,0,0,0,"Uncommon",null), // 57
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",null), // 0
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Uncommon",listOfReforgeAbilities["Withered Reforge Ability"]), // 0
}

const listOfRareReforges = {
    "Gentle" : new SwordReforge(7,0,0,0,15,0,0,"Rare",null), // 22
    "Odd" : new SwordReforge(0,0,15,15,0,0,-18,"Rare",null), // 30
    "Fast" : new SwordReforge(0,0,0,0,30,0,0,"Rare",null),   // 30
    "Fair" : new SwordReforge(4,0,4,4,4,0,4,"Rare",null),    // 16
    "Epic" : new SwordReforge(25,0,0,20,4,0,0,"Rare",null),   // 49
    "Sharp" : new SwordReforge(0,0,14,40,0,0,0,"Rare",null),  // 54
    "Heroic" : new SwordReforge(25,0,0,0,2,0,65,"Rare",null), // 25
    "Spicy" : new SwordReforge(4,0,1,45,4,0,0,"Rare",null),   // 54
    "Legendary" : new SwordReforge(12,0,9,15,5,0,12,"Rare",null),// 15
    "Dirty" : new SwordReforge(6,0,0,0,5,6,0,"Rare",null), // 17
    "Fabled" : new SwordReforge(40,0,0,25,0,0,0,"Rare",listOfReforgeAbilities["Fabled Ability"]), // 65
    "Suspicious" : new SwordReforge(0,15,3,50,0,0,0,"Rare",null), // 68
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Rare",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(165,165,0,0,0,0,0,"Rare",null), // 330
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Rare",listOfReforgeAbilities["Withered Reforge Ability"]), // 0
}

const listOfEpicReforges = {
    "Gentle" : new SwordReforge(10,0,0,0,20,0,0,"Epic",null),   // 30
    "Odd" : new SwordReforge(0,0,20,22,0,0,-32,"Epic",null),    // 42
    "Fast" : new SwordReforge(0,0,0,0,40,0,0,"Epic",null),   // 40
    "Fair" : new SwordReforge(7,0,7,7,7,0,7,"Epic",null),     // 28
    "Epic" : new SwordReforge(32,0,0,27,7,0,0,"Epic",null),   // 66
    "Sharp" : new SwordReforge(0,0,17,55,0,0,0,"Epic",null),  // 72
    "Heroic" : new SwordReforge(32,0,0,0,3,0,80,"Epic",null), // 32
    "Spicy" : new SwordReforge(7,0,1,60,7,0,0,"Epic",null),   // 75
    "Legendary" : new SwordReforge(18,0,12,22,7,0,18,"Epic",null),// 15
    "Dirty" : new SwordReforge(10,0,0,0,10,9,0,"Epic",null), // 29
    "Fabled" : new SwordReforge(50,0,0,32,0,0,0,"Epic",listOfReforgeAbilities["Fabled Ability"]), // 82
    "Suspicious" : new SwordReforge(0,15,5,65,0,0,0,"Epic",null), // 85
    "Gilded" : new SwordReforge(0,0,0,0,0,0,0,"Epic",listOfReforgeAbilities["Byron's Compassion"]), // 0
    "Warped" : new SwordReforge(165,165,0,0,0,0,0,"Epic",null), // 330
    "Withered" : new SwordReforge(0,0,0,0,0,0,0,"Epic",listOfReforgeAbilities["Withered Reforge Ability"]),
}

const listOfLegendaryReforges = {
    "Gentle" : new SwordReforge(15,0,0,0,25,0,0,"Legendary",null),  // 40
    "Odd" : new SwordReforge(0,0,25,30,0,0,-50,"Legendary",null),   // 55
    "Fast" : new SwordReforge(0,0,0,0,50,0,0,"Legendary",null),   // 50
    "Fair" : new SwordReforge(10,0,10,10,10,0,10,"Legendary",null),     // 40
    "Epic" : new SwordReforge(40,0,0,35,10,0,0,"Legendary",null),   // 85
    "Sharp" : new SwordReforge(0,0,20,75,0,0,0,"Legendary",null),  // 95
    "Heroic" : new SwordReforge(40,0,0,0,5,0,100,"Legendary",null), // 40
    "Spicy" : new SwordReforge(10,0,1,80,10,0,0,"Legendary",null),   // 101
    "Legendary" : new SwordReforge(25,0,15,28,10,0,25,"Legendary",null),    // 15
    "Dirty" : new SwordReforge(12,0,0,0,15,12,0,"Legendary",null), // 39
    "Fabled" : new SwordReforge(60,0,0,40,0,0,0,"Legendary",listOfReforgeAbilities["Fabled Ability"]), // 100
    "Suspicious" : new SwordReforge(0,15,7,85,0,0,0,"Legendary",null), // 107
    "Gilded" : new SwordReforge(75,75,0,0,0,0,0,"Legendary",listOfReforgeAbilities["Byron's Compassion"]), // 150
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Legendary",null), // 0
    "Withered" : new SwordReforge(135,0,0,0,0,0,0,"Legendary",listOfReforgeAbilities["Withered Reforge Ability"]), // 135
}

const listOfMythicReforges = {
    "Gentle" : new SwordReforge(20,0,0,0,30,0,0,"Mythic",null), // 50
    "Odd" : new SwordReforge(0,0,30,40,0,0,-75,"Mythic",null),  // 70
    "Fast" : new SwordReforge(0,0,0,0,60,0,0,"Mythic",null),  // 60
    "Fair" : new SwordReforge(12,0,12,12,12,0,12,"Mythic",null),  // 48
    "Epic" : new SwordReforge(50,0,0,45,12,0,0,"Mythic",null),   // 107
    "Sharp" : new SwordReforge(0,0,25,90,0,0,0,"Mythic",null),  // 30
    "Heroic" : new SwordReforge(50,0,0,0,7,125,"Mythic",null), // 50
    "Spicy" : new SwordReforge(12,0,1,100,12,0,0,"Mythic",null),   // 125
    "Legendary" : new SwordReforge(32,0,18,36,15,0,15,"Mythic",null), // 15
    "Dirty" : new SwordReforge(15,0,0,0,20,15,0,"Mythic",null), // 50
    "Fabled" : new SwordReforge(75,0,0,50,0,0,0,"Mythic",listOfReforgeAbilities["Fabled Ability"]), // 125
    "Suspicious" : new SwordReforge(0,15,10,110,0,0,0,"Mythic",null), // 135
    "Gilded" : new SwordReforge(90,90,0,0,0,0,0,"Mythic",listOfReforgeAbilities["Byron's Compassion"]), // 180
    "Warped" : new SwordReforge(0,0,0,0,0,0,0,"Mythic",null), // 0
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

class SwordSelect extends React.Component {
    constructor() {
        super();
  
        this.state = {
            currentSword: {
                "Wooden Sword" : new Sword(20,0,0,0,0,0,0,0,0,null,"","Common")
            },
            
            swordReforge: {
                "Gentle" : new SwordReforge(3,0,0,0,8,0,0,"Common",null),
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
        let newSwordString = e.target.value.split("\\")[0];
        let newSword = Sword.convertFromString(newSwordString);
        // increase rarity if recombobulated.
        if (this.state.Recombobulated === true) {
            let currentSwordRarity = Object.values(this.state.currentSword)[0].rarity;
            let newIndex = listOfRarities.indexOf(currentSwordRarity) + 1;
            let newRarity = listOfRarities[newIndex];
            newSword = new Sword(newSword.damage, newSword.strength, newSword.critChance,
                newSword.critDamage, newSword.intelligence, newSword.moveSpeed, newSword.defense, 
                newSword.attackSpeed, newSword.ferocity, newSword.ability, newSword.passive, newRarity);
        }
        else {
            newSword = new Sword(newSword.damage, newSword.strength, newSword.critChance,
                newSword.critDamage, newSword.intelligence, newSword.moveSpeed, newSword.defense, 
                newSword.attackSpeed, newSword.ferocity, newSword.ability, newSword.passive, newSword.rarity);
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
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.moveSpeed,
                        oldSword.defense, oldSword.attackSpeed, oldSword.ferocity, oldSword.ability, oldSword.passive, newRarity)
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
                //damage, strength, critChance, critDamage, intelligence, speed, defense, attackSpeed, ferocity, ability, rarity
                currentSword: {    
                    [Object.keys(this.state.currentSword)[0]] : new Sword(oldSword.damage, oldSword.strength,
                        oldSword.critChance, oldSword.critDamage, oldSword.intelligence, oldSword.moveSpeed, oldSword.defense, 
                        oldSword.attackSpeed, oldSword.ferocity, oldSword.ability, oldSword.passive, newRarity)
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