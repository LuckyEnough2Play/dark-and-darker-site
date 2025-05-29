// File: /app/patch-notes/patches/patch_861.tsx
'use client';
import PatchEntry from '../../../components/PatchEntry';

export default function Patch861() {
  return (
    <PatchEntry
      title="EA Hotfix #86-1 – May 29, 2025"
      notes={[
        // Bugfixes
        "Fixed an issue where the Sorcerer’s Aqua Prison might not restrict the target’s movement.",
        "Fixed an issue where floor-targeted spells could be cast through door gaps.",
        "Fixed an issue where Skeletons spawned after destroying a barrel might not drop any items.",
        "Fixed an issue where some Marvelous Chests placed in certain modules could be empty.",
        "Fixed an issue where the death cam from a previous death could be shown even after dying again post-respawn.",
        // Game Updates
        "Reduced the drop rate of Artifact items in the HR dungeons.",
        "Added a notification message for players when there is no death cam footage available due to the Death Cam feature being turned off.",
      ]}
      comments={[]}
      summary={`A small but important hotfix to resolve several bugs, especially around spells, loot drops, and the death cam. Players in HR should also notice a reduction in Artifact item frequency. Downtime is expected to last around 2 hours, with a 40-minute window for current matches to wrap up safely. Server maintenance will affect login, matchmaking, and even the website during this period.`}
      opinions={`Even after seeing the dumpster fire, Iron Mace doesn't care. It doesn't seem likely that they'll never back the changes, and the community is not happy. Even if they did revert back, the damage is done.`}
    />
  );
}
