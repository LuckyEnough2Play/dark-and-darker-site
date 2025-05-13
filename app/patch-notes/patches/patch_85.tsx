'use client';
import PatchEntry from '../../../components/PatchEntry';

export default function Patch85() {
  return (
    <PatchEntry
      title="EA Hotfix #85 – May 09, 2025"
      notes={[
        "Fixed an issue where a crash could occur upon entering the lobby.",
        "Fixed an issue where certain classes could fail to enter the lobby.",
        "Fixed an issue where the game could become unplayable after the loading screen when re-entering a dungeon.",
        "Fixed an issue where the game could crash when changing characters after playing Arena.",
        "Fixed an issue where the game could crash while attempting to join an Arena match.",
        "Fixed an issue where the Fighter’s Weapon Mastery penalty was not correctly reflected in the UI.",
        "Fixed an issue where the bonus spell power from Druid's Spirit Magic Mastery was not correctly displayed in the UI when using Spirit Magic.",
        "Fixed an issue where the maximum value of Projectile Damage Reduction might not apply properly.",
        "Fixed an issue where summoned creatures in Adventure Mode could affect other players.",
        "Fixed an issue where monsters might not move correctly.",
        "Fixed an issue where the Giant Worm could detect players located at high elevations.",
        "Fixed an issue where the Giant Worm placed underground in the Forest Path module could emerge above ground.",
        "Fixed an issue where the Cockatrice could leave residual sound effects on its corpse if killed from a distance.",
        "Fixed an issue where the module names for Goblin Cave Cave Altar A and B might not display properly.",
        "Fixed an issue where players could take damage from monsters immediately upon spawning in the Forsaken Cloister module.",
        "Fixed an issue where the descending stairs in Great Hall might be blocked.",
        "Fixed an issue where the High Priests module could prevent movement to other modules depending on its spawn location.",
        "Fixed an issue where Chests and Potions could spawn overlapping in a specific location in the Bandit Camp module.",
        "Fixed an issue where Mystical Gem items might not drop in the Goblin Caves dungeon.",
        "Fixed an issue where Skeleton Champions could drop Legendary gear in Adventure Mode.",
        "Fixed an issue where Artifacts could drop in High-Roller (0–224) dungeons.",
        "Fixed an issue where the minimum number of ores obtained in 225+ High-Roller dungeons could be incorrect.",
        "Fixed an issue where the tooltip for the Unique-grade Spear could incorrectly display flavor text for an Artifact.",
        "Fixed an issue where Famine’s grip position could differ from that of the Horseman’s Axe.",
        "Fixed an issue where hitting with the Catice could appear as though the blade did not break.",
        "Fixed an issue where the pedestal part of the Crystal Ball could appear incorrectly colored.",
        "Fixed an issue where the item score of the Crystal Frost Ring could be incorrect.",
        "Fixed an issue where the lantern could appear lit at the waist after switching slots with the Hungering Flame Lantern skin equipped.",
        "Fixed an issue where the proper notification popup might not appear when a Squire-tier player attempts to enter a High-Roller dungeon with a party.",
        "Fixed an issue where the nickname might not display in the popup when kicking a party member in the Gathering Hall.",
        "Fixed an issue where spawn points in some Arena modules might not be properly placed.",
        "Gold Coin Bags that were accidentally given out have now been retrieved.",
        "The gold coins from the retrieved Bags are delivered as parcels via the Expressman.",
        "Entry requirements for dungeons changed from Gear-Score to Rarity-based.",
        "A new Normal-tier instance has been added that only allows entry with Common-grade equipment.",
        "Updated the Sorcerer’s Time Distortion ability and icon.",
        "Updated the Barbarian’s Blood Exchange ability and icon.",
        "Polished the Panther attack animations.",
        "Resized the Horseman’s Axe.",
        "Updated the War Hammer attack animations.",
        "Added a new Dungeon Adventure Results window to dungeons and modes that previously had none.",
        "Added a confirmation popup when leaving a party.",
        "Added new Arena modules and replaced some of the existing modules.",
        "Removed the Arena party restriction requiring party members be within a specific MMR range as long as all party members are below 1800 MMR.",
        "Updated the Arena leaderboard ranks cutoffs to better reflect player skill distribution.",
        "Religion Season has begun.",
        "Improved convenience features for Religion system.",
        "Adjusted the Merchant crafting and item purchase limitations:",
        "Required Golden Teeth for crafting Grimsmile Ring increased from 1 → 5.",
        "Removed quantity limits for Francisca Axe, Throwing Knife, and Hunting Trap purchases.",
        "Berserker also grants a movement speed bonus.",
        "Savage also increases impact resistance by 1.",
        "Treacherous Lungs now increases shout duration from 30% to 50%.",
        "Blood Exchange temporarily sacrifices 15% of maximum health to increase action speed by 15%.",
        "Savage Roar also reduces the target's movement speed by 10%.",
        "Dagger Mastery physical damage bonus changed from 15% to 10%.",
        "The damage formula for animal attacks now use a curve table instead of a linear formula, and the base damage has been adjusted accordingly.",
        "Panther's swipe animation has been changed slightly.",
        "Panther's Rush now has 2 stacks.",
        "Bear's swipe animation has been slowed down.",
        "Shapeshift Mastery also reduces spell power bonus by 50%.",
        "Force of Nature's additional physical power changed from 3 to 5.",
        "Spirit Bond damage transfer changed from 15% to 20%.",
        "Time Distortion reduces spell power bonus by 15% with each cast. This effect lasts for 6 seconds and can stack up to 10 times.",
        "All Sorcerer spells now have a casting time of 0.75 seconds.",
        "All Sorcerer spells now have a cooldown of (Tier×3)+3 seconds.",
        "Rapier’s weapon damage has been slightly increased.",
        "Zweihander’s weapon damage has been slightly increased.",
        "Flanged Mace’s weapon damage has been slightly decreased.",
        "Morning Star’s weapon damage has been slightly decreased.",
        "War Maul’s weapon damage has been significantly increased.",
        "Castillon Dagger’s weapon damage has been slightly increased.",
        "Kris Dagger’s weapon damage has been slightly decreased.",
        "Rondel Dagger’s weapon damage has been slightly decreased.",
        "Stiletto Dagger’s weapon damage has been slightly decreased.",
        "Battle Axe’s weapon damage has been increased.",
        "Double Axe’s weapon damage has been increased.",
        "Felling Axe’s weapon damage has been increased.",
        "Bardiche’s weapon damage has been increased.",
        "Bardiche is now classified as an axe weapon.",
        "Halberd’s weapon damage has been increased.",
        "Crystal Ball’s spell power has been slightly decreased.",
        "Wizard Staff’s spell power has been slightly decreased.",
        "Lantern Shield’s weapon damage has been slightly decreased.",
      ]}
      comments={[
        "Barbarian is back on the table boys! I can't wait to see how the new Berserker and Blood Exchange abilities play out.",
      ]}
      summary={`This update brings several large balance changes including a move away from the gear-score system. Game Modes are now limited by item rarity rather than a gear score range.

The normal dungeons are now separated into two starting gear limits of ‘Common’ and ‘Rare’ grades. The ‘Common’ grade dungeons allow for quick access to PvP centric matches with super low investment costs. The ‘Rare’ grade dungeons allow players to customize their characters within a specific range and wager their loadout against opposing player builds.

The High-Roller ‘Epic’ dungeon ratchets up the heat where the builds are taken to the next level. Finally, the High-Roller ‘Unlimited’ dungeon is meant for the biggest risk takers where the sky is the limit.

We have also readjusted the cutoff points for each of the Arena ranks based on actual player distribution from the previous season. The original cutoff points resulted in the lower ranks being underrepresented while too many people were lumped into the uppermost ranks.

The new cutoff points should see a more normal distribution across the ranks with a much smaller percentage of players achieving the ‘Contender’ rank and only the most elite players achieving a rating of ‘Vanquisher’ or ‘Warlord’.

We have also relaxed the party MMR restrictions so that it now only applies to parties with a member of ‘Veteran’ ranking or higher.

We thank you for your support and see you in the dungeons!`}
      opinions={`I think the new rarity-based system is a great idea. It probably should have been implemented from the start. It will make it easier for new players to get into the game and not feel like they are at a disadvantage right away. On the flip side, you should expect the min.-max gear score to be much higher in the normal dungeons. I think this is a good change overall, but it will take some getting used to.

Druid definitely did not need two dash charges, the class was already strong enough. They changed the damage scaling, so hopefully you won't get two tapped, but they can still fly across the map.`}
    />
  );
}
