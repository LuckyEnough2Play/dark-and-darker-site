'use client';
import PatchEntry from '../../../components/PatchEntry';

export default function Patch851() {
  return (
    <PatchEntry
      title="EA Hotfix #85.1 – May 16, 2025"
      notes={[
        "Fixed an issue where Artifacts could drop in High Roller 1.",
        "Fixed an issue where the prop for the Spike Log trap did not appear when triggered in the Ruins Keep and Tower Bridge modules, even though it still dealt damage.",
        "Adjusted the prices of healing items.",
        "Changed the buyback price from the Expressman from 50% of the shop price to 25%.",
        "Updated the Sorcerer’s Time Distortion ability and icon.",
        "Improved the drop rates for the HR and Normal-Rare modes.",
        "Barbarian: Savage Roar movement speed reduction changed from 10% to 5%.",
        "Sorcerer: Time Distortion now reduces action speed by 6% and movement speed by 2% per each stack, up to a maximum of 5 stacks.",
      ]}
      comments={[
        "Spike log traps hitting without visuals has been a bug for awhile. Good to see that it is fixed.",
        "Sorcerer adjustments should make the class actually playable. Before you could stack debuffs to where no damage could be done.",
      ]}
      summary={`This update makes several changes to help put a bit more gold into the economy. This includes lowering the prices of healing items, reducing the Expressman fee, and improving the drop rates for the Normal-Rare, HR-Epic, and HR-Unlimited dungeons. We’ve also made slight class balance changes to the skills and perks that were overtuned from the previous update. Thank you and see you in the dungeons!`}
      opinions={`Improving HR and Normal-Rare drop rates is great!`}
    />
  );
}
