---
title: "Mod-Tap with VIA"
description: My Mod-Tap keybinding was not working because of this one stupid mistake.
publicationDate: 2024-10-14T06:59:54.679Z
---

Here's how I figured out how to setup a [Mod-Tap key] on [VIA software](https://www.caniusevia.com) that acts as <kbd>Escape</kbd> on tap and <kbd>Control</kbd> when held. You have to use the special "Any" key.

1. Open the VIA application or navigate to [usevia.app](https://usevia.app) on a comptible browser (Safari no, Chrome yes).
2. Click "Authorize Device", select your keyboard in the dialog popup, and click "Connect".
3. On the preview of your keyboard, select the key you want to add the Mod-Tap to. Then select the "SPECIAL" tab of the GUI and select the "Any" key.
4. In the popup that appears, enter the desired QMK keycode. To setup a Mod-Tap, you use the following syntax:

```
// MT stands for Mod-Tap
MT(KEY_WHEN_HELD, KEY_WHEN_TAPPED)

// Since I want Control when held and Escape on tap...
MT(MOD_LCTL, KC_ESC)
```
5. Done!

It took me a long time to figure this out because I thought Mod-Taps were set up in the "MACRO" tab. Don't be like me...
