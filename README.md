# 🎮 Reliability Quest: The Legend of Uptime

A browser-based Role-Playing Game (RPG) designed for reliability and maintenance conferences. Players step into the shoes of maintenance professionals to battle "unplanned downtime" and save the realm of Assetia.

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Play](#how-to-play)
- [Game Classes](#game-classes)
- [Deployment Options](#deployment-options)
- [Customization](#customization)
- [File Structure](#file-structure)
- [License](#license)

## 🎯 Overview

**Reliability Quest** is an educational RPG that gamifies maintenance and reliability concepts. Players navigate through different zones (The Eastern Plant, CMMS Tower, Dungeon of Inventory) solving maintenance challenges while learning best practices in condition monitoring, planning, data analysis, and strategic maintenance.

### Key Features

- **5 Unique Character Classes** - Each with specialized bonuses
- **3 Adventure Zones** - Each with multiple scenarios
- **Inventory System** - Collect tools and items to unlock new options
- **XP & Health System** - Track your progress and survival
- **Retro RPG Aesthetic** - Classic dungeon-crawler feel with modern reliability themes
- **No Internet Required** - Fully playable offline
- **Sound Effects** - Optional audio feedback for actions

## 🎮 How to Play

### Quick Start

1. **Download** the `index.html` file (and ensure the `img/` folder is in the same directory)
2. **Open** the file in any modern web browser (Chrome, Edge, Safari, Firefox)
3. **Select** a character class that matches your playstyle
4. **Navigate** the map and enter zones to face maintenance challenges
5. **Make choices** to solve problems and earn XP
6. **Collect items** to unlock new solution paths
7. **Defeat** the Demon of Downtime in the final boss battle

### Game Mechanics

- **Health Points (HP)**: Start with 100 HP. Poor choices reduce HP. If HP reaches 0, the game ends.
- **Experience Points (XP)**: Earned by making good maintenance decisions. Higher scores unlock better endings.
- **Inventory**: Collect tools like IR Scanners, Spare Seals, and Scrolls of RCA to unlock new action options.
- **Class Bonuses**: Each class has a specialty that provides advantages for certain action types.

## 👥 Game Classes

| Class | Role | Specialization | Bonus Type |
|-------|------|----------------|------------|
| **Condition Knight** | CBM Specialist | Condition-Based Maintenance | `detect` |
| **Data Sage** | Analyst | Data Analysis & Trends | `analyze` |
| **Planner Cleric** | Planner | Maintenance Planning | `plan` |
| **Wrenchblade** | Technician | Hands-on Repair | `repair` |
| **Reliability Wizard** | Engineer | Strategic Solutions | `strategy` |

## 🚀 Deployment Options

### Option 1: Offline Kiosk Mode (Best for Conference Booths)

Perfect for interactive displays at trade shows and conferences.

1. Load `index.html` on a tablet or laptop
2. Press **F11** (Windows) or **Cmd+Ctrl+F** (Mac) to enter full-screen kiosk mode
3. The game runs completely offline - no internet required

**Tips:**
- Use a touchscreen device for better interactivity
- Consider disabling browser navigation (right-click menu) for a cleaner experience
- Test audio settings before the event

### Option 2: Mobile Access via QR Code

Allow conference attendees to play on their own devices.

1. **Upload** `index.html` and the `img/` folder to a static hosting service:
   - [Netlify Drop](https://app.netlify.com/drop) - Drag and drop deployment
   - [GitHub Pages](https://pages.github.com/) - Free hosting for public repos
   - [Vercel](https://vercel.com/) - Simple static site hosting
   - Any web server or CDN

2. **Generate a QR Code** for your deployment URL:
   - Use [QR Code Generator](https://www.qr-code-generator.com/)
   - Or any QR code service

3. **Print** the QR code for your booth display

4. Attendees scan and play on their phones - no app installation needed!

## 🛠️ Customization

The game is fully customizable by editing `index.html` directly. No build process required!

### Adding New Scenarios

Locate the `SCENARIO_DB` array in `index.html` (around line 427) and add new scenario objects:

```javascript
{
    zone: 'plant',  // 'plant', 'cmms', or 'dungeon'
    title: "Your Scenario Title",
    text: "The scenario description...",
    reflection: "Educational tip for players",
    choices: [
        {
            text: "Action description",
            type: "detect",  // detect, analyze, plan, repair, strategy, or lazy
            result: "success",  // success, neutral, fail, or crit_fail
            msg: "Result message",
            xp: 20,
            damage: 0,
            reward: "irScanner",  // Optional: tool ID
            requires: "vibSword"  // Optional: required tool
        }
    ]
}
```

### Adjusting Difficulty

- **XP Values**: Modify `xp` values in scenario choices to change reward amounts
- **Damage Values**: Adjust `damage` values to make failures more/less punishing
- **Health**: Change starting HP in the `selectClass()` function (line 647)

### Editing Classes

Modify the `CLASSES` array (around line 402):

```javascript
{
    id: 'knight',
    name: 'Condition Knight',
    role: 'CBM Specialist',
    img: 'img/knight.png',
    bonus: 'detect'  // This class gets bonuses on 'detect' actions
}
```

### Adding New Zones

Add entries to the `ZONES` array (around line 410):

```javascript
{
    id: 'newzone',
    name: 'The New Zone',
    icon: '🏭',
    img: 'img/newzone.png'
}
```

### Customizing Tools/Inventory

Modify the `TOOLS` object (around line 417) to add new collectible items:

```javascript
newTool: {
    name: "Tool Display Name",
    icon: "🔧"  // Emoji icon
}
```

## 📁 File Structure

```
reliability-quest/
├── index.html          # Main game file (contains all HTML, CSS, and JavaScript)
├── scenarios.js        # Legacy scenarios file (not currently used)
├── img/                # Image assets
│   ├── cleric.png     # Planner Cleric character image
│   ├── cmms.png       # CMMS Tower zone image
│   ├── demon.png      # Final boss image
│   ├── dungeon.png    # Dungeon of Inventory zone image
│   ├── knight.png     # Condition Knight character image
│   ├── plant.png      # Eastern Plant zone image
│   ├── sage.png       # Data Sage character image
│   ├── wizard.png     # Reliability Wizard character image
│   └── wrench.png     # Wrenchblade character image
└── README.md          # This file
```

**Note:** The game is self-contained in `index.html`. The `scenarios.js` file appears to be a legacy file and is not currently loaded by the game.

## 🎓 Educational Value

This game teaches maintenance and reliability professionals about:

- **Condition-Based Maintenance (CBM)** - Early detection strategies
- **Root Cause Analysis (RCA)** - Pattern recognition and problem-solving
- **Preventive Maintenance** - Planning and compliance
- **Inventory Management** - The importance of accurate data
- **Strategic Maintenance** - Holistic approaches to reliability
- **OEE (Overall Equipment Effectiveness)** - Key performance metrics

## 🐛 Troubleshooting

### Images Not Loading
- Ensure the `img/` folder is in the same directory as `index.html`
- Check that image filenames match exactly (case-sensitive on some systems)
- The game includes fallback icons if images are missing

### Audio Not Working
- Click anywhere on the page first (browsers require user interaction to enable audio)
- Check the SFX toggle button in the top-right corner
- Some browsers may block audio in certain contexts

### Game Not Saving Progress
- This is a single-session game - progress is not saved between browser sessions
- To restart, simply reload the page

## 📄 License

Free to use for educational and conference purposes.

---

**Made for reliability professionals, by reliability professionals.** ⚙️✨
