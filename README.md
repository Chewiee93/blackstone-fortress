# Blackstone Fortress (Unofficial) — Foundry VTT System Starter

> A minimal, expansion‑ready Foundry VTT system for **Warhammer Quest: Blackstone Fortress**.  
> Includes custom Action Dice (A6, A8, A12) and three core journals (Rulebook, Precipice, Combat).

## Features
- Custom Action Dice with symbols **F**, **S**, **CS** (Failure / Success / Critical Success).
- Journals: Rulebook, Precipice, Combat (paraphrased summaries for quick reference).
- Clean scaffold to build actors/items/AI and expansions.

4. Create a **Release** with a ZIP of this folder named `blackstone-fortress.zip`.
5. Update the `manifest` and `download` URLs in `system.json` to point to your raw `system.json` and release asset.

## Installing in Foundry
- In Foundry VTT, go to **Systems > Install System > Manifest URL** and paste the `system.json` raw URL from your GitHub repo, *or* manually place the folder in your `Data/systems/` directory.

## Using the Dice
In chat, roll:
```
/roll 3A6
/roll 2A8
/roll 1A12
```
You’ll see **F**, **S**, **CS** results. Add tallying in your roll cards later if you want auto‑counted totals.

## Journals
Paraphrased journals are in `packs/src/`:
- `Rulebook.json`
- `Precipice.json`
- `Combat.json`

Import them into a world compendium:
1. Create a **Journal** compendium in your world.
2. Use **Import Data** or drag‑and‑drop JSON via Foundry’s UI (any JSON importer module works too).
   > Alternatively, export to a compendium `.db` inside Foundry and ship it later as `packs/journals.db`.

## Notes
- This project is **unofficial** and not affiliated with Games Workshop.
- The included text is paraphrased for reference use.

## Next Steps
- Implement actor/item data models.
- Build hero/enemy sheets per explorer.
- Add AI behaviour tables and reinforcement logic.
- Optional: Dice So Nice integration with custom 3D dice.
