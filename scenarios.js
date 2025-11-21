const SCENARIOS = [
  {
    title: "The Hum of Hazard",
    text: "You patrol the Eastern Plant. The air smells of oil. Suddenly—bzzzzzzmmmmmmmmm—a low hum echoes from the great Cooling Fan of Chiller 13. It wasn't there yesterday.",
    reflection: "PRO TIP: Have you ever caught a failure with a sensor before it happened in real life? Early detection is key.",
    choices: [
      { text: "Draw Vibration Sword (Scan Bearings)", type: "detect", result: "success", msg: "Your gauntlet trembles. Unbalanced shaft! You catch it before the bearings shatter. (+20 XP)", xp: 20, damage: 0 },
      { text: "Summon Thermal Spirit (IR Scan)", type: "detect", result: "neutral", msg: "Your vision reveals a hot spot. You aren't sure of the cause yet, but you flag it. (+10 XP)", xp: 10, damage: 0 },
      { text: "Consult the Scribes (Ask Technician)", type: "analyze", result: "fail", msg: "He shrugs and says 'It was fine yesterday.' Not helpful. The hum gets louder.", xp: 2, damage: 10 },
      { text: "Do Nothing (Ignore It)", type: "lazy", result: "crit_fail", msg: "A week later, the fan explodes. Catastrophic failure. You are summoned to the Hall of Shame.", xp: 0, damage: 40 }
    ]
  },
  {
    title: "The Dungeon of Spare Parts",
    text: "A critical pump has failed. You rush to the store room (The Dungeon of Inventory) to find a replacement seal.",
    reflection: "DID YOU KNOW? 50% of MTTR is often spent just looking for parts. Clean data saves time!",
    choices: [
      { text: "Cast 'Inventory Lookup' (Check BOM)", type: "plan", result: "success", msg: "The BOM is accurate! You find the seal in Bin 4B instantly. Uptime restored.", xp: 20, damage: 0 },
      { text: "Rummage Blindly", type: "repair", result: "fail", msg: "You spend 3 hours digging through boxes. You find a seal, but it's the wrong size.", xp: 5, damage: 20 },
      { text: "Cannibalize Old Pump", type: "repair", result: "neutral", msg: "Risky... but it fits. It works for now, but adds risk.", xp: 10, damage: 5 }
    ]
  },
  {
    title: "The Alignment Crypt",
    text: "A grinding noise haunts the central pump. The previous maintenance log shows vague entries. Time is ticking.",
    reflection: "TIP: Shaft misalignment is one of the top causes of equipment wear. Laser alignment saves bearings.",
    choices: [
      { text: "Use Laser Alignment Spell", type: "repair", result: "success", msg: "Perfect alignment. The noise fades. Bearings celebrate. (+25 XP)", xp: 25, damage: 0 },
      { text: "Align by Eye", type: "repair", result: "fail", msg: "It runs... for now. A gremlin chuckles in the shadows. (+5 XP)", xp: 5, damage: 10 },
      { text: "Log Work & Delay", type: "plan", result: "neutral", msg: "You've kicked the can. The problem still lurks. (+10 XP)", xp: 10, damage: 5 }
    ]
  },
  {
    title: "The Gremlin of Grease",
    text: "A technician reports overheating motors. The gremlin of over-lubrication may be near.",
    reflection: "REMEMBER: More grease isn't always better. Over-lubrication causes internal pressure and failures.",
    choices: [
      { text: "Summon Ultrasound Scanner", type: "detect", result: "success", msg: "You catch the gremlin red-handed. Grease normalized. (+20 XP)", xp: 20, damage: 0 },
      { text: "Add More Grease", type: "lazy", result: "crit_fail", msg: "POP! The bearing fails. You fall into a maintenance audit hole. (0 XP)", xp: 0, damage: 30 },
      { text: "Monitor and Wait", type: "analyze", result: "neutral", msg: "The temp stabilizes... but it's risky. (+10 XP)", xp: 10, damage: 5 }
    ]
  },
  {
    title: "The Scrolls of Root Cause",
    text: "Three identical pumps have failed this month. The ancient scrolls (historical data) whisper of a pattern, but the answer eludes you.",
    reflection: "WISDOM: Root cause analysis isn't just fixing symptoms. Look for patterns across failures.",
    choices: [
      { text: "Consult the Data Oracle (Analyze Trends)", type: "analyze", result: "success", msg: "The pattern reveals itself: all failures occurred during peak load. You redesign the schedule. (+25 XP)", xp: 25, damage: 0 },
      { text: "Replace All Three Pumps", type: "repair", result: "neutral", msg: "They work, but the pattern repeats. You've spent gold without solving the mystery. (+10 XP)", xp: 10, damage: 5 },
      { text: "Blame the Operator", type: "lazy", result: "fail", msg: "The operators revolt. Production halts. You are banished to the Reactive Realm. (+0 XP)", xp: 0, damage: 25 }
    ]
  },
  {
    title: "The Phantom of PM Compliance",
    text: "The maintenance schedule shows gaps. Critical assets haven't been touched in months. The Phantom of PM Compliance haunts the halls.",
    reflection: "TRUTH: Preventive maintenance only works if it's actually performed. Compliance tracking is essential.",
    choices: [
      { text: "Summon the Schedule Keeper (Review PM Compliance)", type: "plan", result: "success", msg: "You identify the gaps and restore the schedule. The phantom fades. (+22 XP)", xp: 22, damage: 0 },
      { text: "Perform Emergency PMs Now", type: "repair", result: "neutral", msg: "You catch up, but it's reactive. The phantom lingers. (+12 XP)", xp: 12, damage: 8 },
      { text: "Ignore the Schedule", type: "lazy", result: "crit_fail", msg: "The phantom grows stronger. Unplanned failures multiply. (-5 XP)", xp: -5, damage: 35 }
    ]
  },
  {
    title: "The Curse of the Work Order Backlog",
    text: "The backlog grows like a shadow. 200 work orders await. The Curse of Reactive Maintenance has taken hold.",
    reflection: "REALITY: A growing backlog is a symptom of poor planning. Prioritization and resource allocation matter.",
    choices: [
      { text: "Cast Prioritization Spell (Risk-Based Ranking)", type: "strategy", result: "success", msg: "You focus on critical assets first. The backlog shrinks strategically. (+28 XP)", xp: 28, damage: 0 },
      { text: "Work Faster (Overtime Mode)", type: "repair", result: "neutral", msg: "You clear 50 orders, but burnout sets in. The curse persists. (+15 XP)", xp: 15, damage: 12 },
      { text: "Close Old Work Orders", type: "lazy", result: "fail", msg: "The curse deepens. Hidden failures emerge. The backlog returns stronger. (+3 XP)", xp: 3, damage: 20 }
    ]
  },
  {
    title: "The Enigma of Energy Efficiency",
    text: "Power consumption spikes during night shifts. The Enigma of Energy Waste puzzles the facility.",
    reflection: "INSIGHT: Energy monitoring reveals hidden inefficiencies. Idle equipment consumes power.",
    choices: [
      { text: "Deploy Energy Monitoring Runes", type: "detect", result: "success", msg: "You discover idle equipment left running. Shutdown procedures implemented. (+23 XP)", xp: 23, damage: 0 },
      { text: "Replace All Motors with Efficient Ones", type: "repair", result: "neutral", msg: "Expensive, but helps. The enigma remains partially unsolved. (+14 XP)", xp: 14, damage: 7 },
      { text: "Blame the Utility Company", type: "lazy", result: "fail", msg: "The bills keep rising. The enigma laughs. (+2 XP)", xp: 2, damage: 15 }
    ]
  },
  {
    title: "The Trial of Training",
    text: "A new technician makes a critical error. The Trial of Training begins. Do you invest in knowledge or accept the risk?",
    reflection: "KNOWLEDGE: Training reduces human error. Competent technicians are your greatest asset.",
    choices: [
      { text: "Establish Training Academy", type: "strategy", result: "success", msg: "Knowledge spreads. Errors decrease. The facility grows stronger. (+30 XP)", xp: 30, damage: 0 },
      { text: "Write a Procedure Document", type: "plan", result: "neutral", msg: "Helpful, but training is better. Some still make mistakes. (+16 XP)", xp: 16, damage: 6 },
      { text: "Fire the Technician", type: "lazy", result: "fail", msg: "Another untrained soul takes their place. The cycle repeats. (+5 XP)", xp: 5, damage: 18 }
    ]
  },
  {
    title: "The Labyrinth of Legacy Systems",
    text: "Ancient equipment runs on obsolete protocols. The Labyrinth of Legacy Systems confounds modernization efforts.",
    reflection: "CHALLENGE: Legacy systems are hard to maintain. Migration planning is critical for long-term reliability.",
    choices: [
      { text: "Chart Migration Path (Strategic Plan)", type: "strategy", result: "success", msg: "You create a phased migration. The labyrinth yields its secrets. (+27 XP)", xp: 27, damage: 0 },
      { text: "Patch and Maintain", type: "repair", result: "neutral", msg: "It works for now, but technical debt accumulates. (+13 XP)", xp: 13, damage: 9 },
      { text: "Ignore Until Failure", type: "lazy", result: "crit_fail", msg: "When it fails, no one knows how to fix it. Chaos ensues. (+0 XP)", xp: 0, damage: 40 }
    ]
  },
  {
    title: "The Oracle of OEE",
    text: "Overall Equipment Effectiveness drops. The Oracle of OEE demands answers: Availability, Performance, or Quality?",
    reflection: "METRICS: OEE = Availability × Performance × Quality. All three must be optimized.",
    choices: [
      { text: "Consult All Three Pillars (Full Analysis)", type: "analyze", result: "success", msg: "You identify bottlenecks in all areas. Comprehensive improvements follow. (+32 XP)", xp: 32, damage: 0 },
      { text: "Focus on Availability Only", type: "repair", result: "neutral", msg: "Uptime improves, but quality suffers. The oracle is unimpressed. (+17 XP)", xp: 17, damage: 10 },
      { text: "Blame the Equipment", type: "lazy", result: "fail", msg: "The oracle scoffs. OEE continues to decline. (+4 XP)", xp: 4, damage: 22 }
    ]
  },
  {
    title: "The Final Stand: The Demon of Downtime",
    text: "The Demon of Downtime rises. All your skills are tested. Will you triumph with proactive maintenance, or fall to reactive chaos?",
    reflection: "LEGEND: The greatest heroes combine detection, analysis, planning, repair, and strategy. Master all paths.",
    choices: [
      { text: "Unite All Disciplines (Holistic Approach)", type: "strategy", result: "success", msg: "You combine CBM, planning, training, and data. The demon falls. Reliability reigns. (+50 XP)", xp: 50, damage: 0 },
      { text: "Rush to Repair", type: "repair", result: "neutral", msg: "You fight valiantly, but the demon returns. The cycle continues. (+20 XP)", xp: 20, damage: 15 },
      { text: "Panic and React", type: "lazy", result: "crit_fail", msg: "The demon laughs. Downtime multiplies. The facility falls into darkness. (+0 XP)", xp: 0, damage: 50 }
    ]
  }
];

