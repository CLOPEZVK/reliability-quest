Reliability Quest: The Legend of Uptime

A browser-based Role-Playing Game (RPG) designed for reliability and maintenance conferences. Players step into the shoes of maintenance professionals (Condition Knights, Data Sages, etc.) to battle "unplanned downtime" and save the realm of Assetia.

🎮 How to Play

Download the index.html file.

Open the file in any modern web browser (Chrome, Edge, Safari, Firefox).

Select a Class (e.g., Condition Knight, Planner Cleric).

Roll the dice to diagnose faults, manage inventory, and implement reliability strategies.

No internet connection is required to play locally.

🚀 Deployment Options

Option 1: Offline Kiosk (Best for Booths)

Simply load index.html on a tablet or laptop and press F11 (Windows) or Cmd+Ctrl+F (Mac) to enter full-screen kiosk mode.

Option 2: Mobile Access (QR Code)

To allow attendees to play on their phones:

Upload index.html to a static host like Netlify Drop or GitHub Pages.

Generate a QR code for the resulting URL.

Print the QR code for your booth display.

🛠️ Customization

You can easily modify the game content by opening index.html in a text editor (like Notepad or VS Code).

Change Scenarios: Look for the const SCENARIOS section in the script to add new maintenance problems.

Adjust Difficulty: Modify the DC (Difficulty Class) variable in the resolveAction function (default is 12).

Edit Classes: Update the const CLASSES array to change job titles or descriptions.

📄 License

Free to use for educational and conference purposes.
