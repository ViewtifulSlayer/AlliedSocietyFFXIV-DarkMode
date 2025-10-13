# AlliedSocietyFFXIV-DarkMode

A fork of the original [AlliedSocietyFFXIV](https://github.com/cirivere/AlliedSocietyFFXIV) by [cirivere](https://github.com/cirivere), enhanced with Dark Mode support and bug fixes.

Helper site to calculate how many days you need to complete Tribes in Final Fantasy XIV.

**Original Repository:** https://github.com/cirivere/AlliedSocietyFFXIV

## Fork Changes & Improvements

This fork includes the following enhancements:

### Bug Fixes
- **Fixed reputation calculation bug**: The "Rep to Max" calculation was incorrectly subtracting current reputation multiple times (once per remaining rank) instead of just once. This caused the displayed value to decrease by ~4 points for every 1 point of reputation gained. The fix ensures accurate 1:1 tracking of reputation progress.

### New Features
- **Dark Mode Toggle**: Added a theme toggle button in the navigation bar that switches between light and dark modes
  - Hybrid design: Dark page background with light tribe cards for optimal readability
  - Maintains white input fields and light blue tribe card backgrounds in dark mode
  - All text colors adjusted for maximum readability in both themes
  - Theme preference saved to localStorage and persists between sessions
  - Smooth transitions between themes (0.3s ease)

### Code Quality Improvements
- Removed redundant CSS rules and dark mode overrides
- Fixed undeclared JavaScript variables (proper `const`/`let` declarations)
- Removed empty `console.log()` statement
- Fixed typos in code comments
- Cleaned up zero values in CSS (removed unnecessary units)
- Added proper variable scoping to prevent implicit globals

## How to use

**Live Site:** https://viewtifulslayer.github.io/AlliedSocietyFFXIV-DarkMode/

* Fill in your current rank and xp for all Tribes you have leveled
* The page saves the values you input in local storage in your browser, for easy use later!
* Toggle between light and dark mode using the button in the top-right navigation bar
* Your theme preference is automatically saved and persists between sessions

**Original Site:** https://cirivere.github.io/AlliedSocietyFFXIV/ 

## Credits
 - The initial concept is based on the spreadsheet from u/brakeomafer on Reddit: https://www.reddit.com/r/ffxiv/comments/t05wm4/tribe_questrep_tracker_spreadsheet/
 - Speaking of which, I also expanded this spreadsheet here https://docs.google.com/spreadsheets/d/1jR5aAbLQ3BHU0ncQKP5FHtMY7jXKc71DNU5cXNqQO4I/ , in case anyone wants to copy this for multiple characters.
 - Info on All tribes added through: https://ffxiv.consolegameswiki.com/wiki/Reputation and https://ffxiv.consolegameswiki.com/wiki/Tribal_Quests

## helpers:

[@belthesar](https://github.com/belthesar) for the intial setup and help based on [the ffixv pvp malmstone calculator](https://github.com/belthesar/MalmstoneXPCalculator). thank you so much for giving me the courage to start this project! 

[@miry-0226](https://github.com/Miry-0226) for helping me a lot with the savedata function help!! Thank you so much for helping me get the courage to pick things up again.

[@capashilli](https://github.com/capashilli) for many error solving help and code advice!! thank you very much for your quick responses and willingness to look into my mess of a code. Thanks to you I will see this through
