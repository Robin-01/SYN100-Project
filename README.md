# Big Decisions: A Corporate Management Experience

A self-contained, Oregon Trail-inspired interactive story. Make 15 decisions on the journey west and discover one of four endings based on your trail choices.

## Play

Open `index.html` in a browser. No build step or dependencies are required. The green-on-black CRT style and bundled 5×7 dot-matrix lettering are adapted from the supplied The Westward Trail.html reference. The game works offline without font downloads.

## Game

Choose an answer for each of the 15 trail questions. Your ending follows the approach you chose most often: Steward, Trailblazer, Community, or Survival. If there is a tie, your latest choice among the tied approaches decides the ending. Use keys 1–4 to select an answer, and Enter to continue.

The visual style includes monochrome wagon scenery, scanlines, glowing borders, a wagon progress marker, and a blinking question cursor. Reduced-motion preferences disable the cursor animation. Bitmap text retains a native text equivalent for assistive technology and falls back to native text in forced-colors mode. The FontStruct footer link remains a reference to classic-era typography; no Here Lies MECC font file is redistributed.

Each ending has its own monochrome SVG banner in `assets/endings/`: a valley homestead (Steward), mountain expedition (Trailblazer), welcoming settlement (Community), or sheltered night camp (Survival). Reviewing a choice or starting again restores the original wagon scene.

Use **Full Screen** in the header to expand the game, then **Exit Full** or Escape to return. Browsers without the Fullscreen API use an expanded in-tab view. If the browser blocks fullscreen, the game stays playable and announces the error.
