// app/patch-notes/patches/patch_86.tsx
'use client';
import PatchEntry from '../../../components/PatchEntry';

export default function Patch86() {
  return (
    <PatchEntry
      title="EA Hotfix #86 – May 23, 2025"
      notes={[
        // Bugfixes
        "Fixed an issue where the knockback ignoring effect could ignore the airborne effect.",
        "Fixed an issue where spell costs were not shown as doubled when using the Warlock's Torture Mastery.",
        "Fixed an issue where Soul Collector would not work when killing a target with Flame Walker.",
        "Fixed an issue where Warlock's Power of Sacrifice could stack infinitely when cast on opponents in Adventure mode.",
        "Fixed an issue where Life After Death's effect would not activate on damage caused by Rogue's Poisoned Weapon.",
        "Fixed an issue where devil wings were visible in the afterimage when using the Wizard's Haste or Invisibility.",
        "Fixed an issue where the weapon damage of weapons unlocked by the Fighter's Weapon Mastery was not displayed correctly in the details window.",
        "Fixed an issue where movement speed reduction immunity was not applied when hit by a Goblin Mage while using the Breakthrough.",
        "Fixed an issue where players' items could sometimes be rolled back when extracting or going down a level.",
        "Fixed an issue where candles placed in the boss room would not display properly.",
        "Fixed an issue where the sound for disarming the Flame Spout trap in the Goblin Caves did not match the other disarming sounds.",
        "Fixed an issue where certain walls appeared unnatural when the Ramparts module and Wheel module were connected.",
        "Fixed an issue where stacked items were counted as a single item when calculating loot value in the results screen.",
        "Fixed an issue where handled items obtained from other players were valued at 0 gold when calculating loot value in the results screen.",
        "Fixed an issue where Banshee's forced relocation patterns were not functioning properly.",
        "Fixed an issue where Druids could enter the Troll's reward room without killing the Troll.",
        "Fixed an issue where dungeon recovery would not recover items properly when a player is resurrected across different dungeon floors.",
        "Fixed an issue where the item market listing process would be canceled if another listed item was sold while listing.",
        "Fixed an issue where the rarity color was not displayed for items banned from dungeon entry.",
        "Fixed an issue where attribute changes to items were not properly reflected for the items saved in My Gear Sets.",
        // Game Updates
        "Increased the maximum values when socketing gems.",
        "The All Attributes option can now also be obtained through socketing.",
        "Game Pools (Mode - Gear Limit - Party) have been updated:",
        "- Adventure Mode — Artifact — Trios",
        "- Normal — Rare — Trios",
        "- High Roller — Artifact — Solos, Duos, and Trios",
        "Test Mode for the community assisted enforcement system has been enabled.",
        "Improved reporting system to allow reporting in more situations.",
        "Cerberus no longer roars at the start of combat.",
        "The boss trigger system has been removed. Boss trigger items can now be sold to merchants at a high price.",
      ]}
      comments={[
        "",
      ]}
      summary={`This update introduces our community assisted enforcement system to help clean up the dungeons. Suspicious players that receive too many reports from highly reliable community enforcers will receive a temporary ‘Outlaw’ mark on their account. Outlaw accounts will be spotlighted for intense investigation by our anti-cheat team and eventually have modes and features restricted once this system is finalized. The best way for the community to help us improve this system is to continue sending accurate reports when encountering a cheater. 

This update also consolidates the matchmaking queues. The pools have been simplified into just a single pool each for Adventure, Normal, and HR modes. The continuous matchmaking system has improved our ability to help keep dungeons feeling populated. However, even with that system in place, the current population cannot sufficiently support the excessive amount of match types.

The removal of the lower gear-score pools also symbolizes a return to the more brutal and hardcore roots for the PvP-enabled dungeons, where not every fight is supposed to be fair. In the same vein, Normal dungeons are now focused on trio parties. We are aware that the current item power gap pushes this brutality to the extreme and we will be working on a future overhaul to make the gap more reasonable. In the meantime, we will be considering ways to make it a bit easier to close that gap with the improved loot drop rates and enhancements to the gem socket system. We thank you and see you in the dungeons!`}
      opinions={`This is actually insane, I can't believe IM is taking 10 steps back when so much progress has been made. The community backlash is going to be immense. I don't understand why they would do this, it just seems like a terrible decision. The game was finally getting better and now this? It's like they want to lose players.`}
    />
  );
}
