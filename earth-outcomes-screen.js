export const earthOutcomes = {
  utopia: {
    label: "Utopia Earth",
    title: "Utopia Earth",
    // icon: "assets/icons/leaf.png",
    scoreRange: "18+ points",
    image: "assets/endings/utopia_Earth.png",

    strengths: `You ran a tech startup that actually left the planet better than it found it. You picked clean power over cheap power, shared your hardware and your models, funded the sustainability team, and told the truth when it wasn't flattering. Your investors grumbled and your board sweated, yet here you are: profitable, respected, and living under a sky the color of a stock photo. You proved that growth and the planet don't have to be enemies, and you have the wind turbines to prove it.`,

    weaknesses: `Being the good guy takes real effort, and not everyone plays along. Greener choices often cost more up front, and it's tempting to relax once the headlines are glowing. Utopia isn't a finish line. It needs maintenance, and one company doing the right thing only becomes a movement when others join.

Next move: keep an eye out for greenwashing, even your own. Keep publishing your numbers, auditing your supply chain, and inviting competitors to sign the pledge. The best thing you can do with a head start is bring everyone else along.`,

    accessible: [
      "Use eco or low-power modes when you have the choice",
      "Reuse, resell, or donate old electronics instead of tossing them",
      "Ask the companies you use to share their energy and water numbers",
      "Start a sustainability club at school or work",
    ],

    lessAccessible: [
      "Support clean energy and AI transparency policy",
      "Pick providers that run on verified renewable energy",
      "Work for or invest in climate tech",
      "Back local projects like waste heat reuse",
    ],
  },

  hopeful: {
    label: "Not Bad Earth",
    title: "Not Bad Earth",
    // icon: "assets/icons/leaf.png",
    scoreRange: "6 to 17 points",
    image: "assets/endings/not_bad_Earth.png",
    strengths: `You mostly made the right call, and when you didn't, you at least felt a little guilty about it. You can name several choices that really helped: the efficient chips, the donated servers, the honest conversation with the protest leader. Your Earth has blue skies, a handful of wind turbines, and one suspicious smokestack on the horizon. You balance ambition with a conscience, which is rarer in Silicon Valley than you would hope.`,

    weaknesses: `Compromise is your comfort zone. You sometimes pick the option that sounds green without checking whether it is (hello, cheap carbon offsets), or you go sustainable only when it's convenient or cheap. "Good enough" can quietly turn into "a little worse every year."

Next move: pick one area where you've been taking the easy road and go all the way on it. Read the fine print behind green claims, and ask what actually changes versus what just looks better.`,

    accessible: [
      "Check whether a 'carbon neutral' label means real cuts or just offsets",
      "Switch on power-saving settings and unplug idle devices",
      "Hold on to a phone or laptop one extra year",
      "Buy refurbished when you do need to upgrade",
    ],

    lessAccessible: [
      "Choose services that publish sustainability reports",
      "Support companies that build their own clean energy",
      "Recycle through certified e-waste programs",
      "Ask your school or employer for a sustainability policy",
    ],
  },

  damaged: {
    label: "Earth Right Now",
    title: "Earth Right Now",
    // icon: "assets/icons/leaf.png",
    scoreRange: "-8 to 5 points",
    image: "assets/endings/earth_right_now.png",

    strengths: `You're a realist. You felt the pressure to grow fast, keep investors happy, and beat the competition, and you balanced it with a few good moves along the way. Your Earth looks suspiciously like the one outside your window: impressive, busy, a little hazy, and still very much worth saving. You've shown you can make smart decisions under pressure. They just need to point in a greener direction more often.`,

    weaknesses: `You treat sustainability as a problem for later, whether that's year 3 or somebody else entirely. Many of your choices came down to cost and speed, and a few were PR moves with no budget behind them. Lots of small shortcuts add up to one very large footprint.

Next move: you don't need a total overhaul, just the biggest levers. Where your power comes from, how you cool your data centers, and what happens to old hardware outweigh a hundred tiny gestures. Start there.`,

    accessible: [
      "Learn which habits matter most (energy source, device lifespan, AI use)",
      "Use AI thoughtfully: a quick search or a chat with a friend works too",
      "Donate or resell old devices",
      "Turn off devices when they're not in use",
    ],

    lessAccessible: [
      "Push the companies you use for transparency",
      "Switch to a renewable energy plan from your utility",
      "Support cleaner grid and AI energy reporting policies",
      "Buy repairable devices that last",
    ],
  },

  collapse: {
    label: "WALL-E Earth",
    title: "WALL-E Earth",
    // icon: "assets/icons/leaf.png",
    scoreRange: "-9 or lower",
    image: "assets/endings/WallE_earth.jpeg",

    strengths: `You are a force of pure ambition. You moved fast, scaled faster, and built an empire without letting anything slow you down: not water limits, not protestors, not even an inconvenient leaked memo. Your company is enormous, your profits are staggering, and your Earth is now one big, dusty landfill watched over by a single lonely robot. Nobody can say you lacked vision. You just forgot to look down.`,

    weaknesses: `You treated the planet like an expense that could be deferred. Cheap coal, thirsty data centers, mountains of e-waste, and an ignored protest or two all add up, and sooner or later someone presents the bill. A world with no resources and no customers isn't much of a market.

Next move: it's not too late to reboot. Clean power, longer-lasting hardware, and honest reporting can start turning the wasteland green. Even WALL-E found a plant eventually.`,

    accessible: [
      "Start with the biggest lever: where your electricity comes from",
      "Keep devices longer, repair them, and recycle responsibly",
      "Use AI and HD streaming only when you actually need them",
      "Listen when people raise concerns, and then act",
    ],

    lessAccessible: [
      "Switch your home or office to renewable energy",
      "Support companies with certified, traceable supply chains",
      "Advocate for e-waste take-back and energy regulations",
      "Fund or join climate projects in your community",
    ],
  },
};
