'use client';
import PatchEntry from '../../../components/PatchEntry';

export default function Patch841() {
  return (
    <PatchEntry
      title="EA Hotfix #84.1 – April 24, 2025"
      notes={[
        "Fixed an issue that could cause a crash during gameplay.",
        "Fixed a bug where Unique mimic dropped an extra Wanderlight Lantern.",
        "Fixed a bug where the Giant Bat would drop an extra Giant Bat Wing.",
        "Fixed an issue where selected items could be deselected when using the marketplace search function.",
        "Fixed a bug that opened the incorrect DLC page.",
        "Increased the drop rate difference between epic and legendary gems in Normal and HR dungeons.",
        "Improved the chance for the Cockatrice feather to drop.",
      ]}
      comments={[
        "Hopefully this fixes the crash issue. It was getting pretty annoying. Personally, I was crashing at least 3 times every 2 hours.",
        "I'm not sure I see why dropping an extra Giant Bat Wing is a problem. They do have two wings after all.",
      ]}
      summary={`No comment`}
      opinions={`An increased drop rate difference between epic and legendary gems in Normal and HR dungeons doesn't sound good. It will likely make it harder to get gems in the normal dungeons, which is where most players are.`}
    />
  );
}
