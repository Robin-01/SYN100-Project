export const questions = [
  {
    title: "THE SILICON VALLEY DREAM",
    prompt: `It is a bright Monday morning in San Jose. You walk into your new Silicon Valley office with 5 billion dollars of VC money and one thing on your mind: dominating the AI space. What is your first course of action with regards to setting up your physical infrastructure?`,
    answers: [
      ["Rent server racks at an already established datacenter, we can avoid the costs of building our own.", 2],
      ["Let's break ground! Open our first datacenter in Arlington Texas.", -1],
      ["Move fast and don't look back, to dominate this space we need to be bigger than the rest. Initiate another round of fundraising and use the money to begin construction on five separate datacenter buildouts for us.", -2],
      ["Close startup.", "quit"],
    ],
  },
  {
    title: "THE MARKETING CAMPAIGN",
    prompt: `Your chief marketing officer comes into your office one morning with a new proposal: a nationwide ad blitz for our new physical AI companion product. He offers you four separate ad campaigns you could run.`,
    answers: [
      ["A campaign emphasizing the fashionability of our newest AI companion products, and their cheap price tag. The ads show people having five or six of them, almost like pets.", -2],
      ["A campaign which shows off the new product in a realistic manner, one person with one companion.", 2],
      ["A campaign focused on assuaging the public's skepticism with regards to data centers as well as giving our company a more friendly face.", -1],
      ["A campaign focused on reaching upper class people and showing them how physical AI companions can be integrated into their lives.", -1],
    ],
  },
  {
    title: "THE DATACENTER PROTEST",
    prompt: `An engineer comes running into your office one morning. He exclaims, "Our Arlington data center can't run today, protestors have overrun the place!" How do you respond?`,
    answers: [
      ["Call up the governor and tell him to send in the national guard, these datacenters are an essential piece of infrastructure, we need it back online ASAP!", -2],
      ["Talk to the media, emphasize your commitment to minimizing the impact of datacenters, while making sure to only do what is necessary to get the public off your back, this will still cost you.", 0],
      ["Head down to the datacenter yourself and talk to the leader of the protest group, look for common ground and attempt to reach some kind of settlement.", 2],
      ["Ignore these fools, they will tire themselves out and go home.", -1],
    ],
  },
  {
    title: "THE NEXT GENERATION CHIP",
    prompt: `A surprise round of new funding has hit our accounts, it is earmarked for development of a new chip. How do we proceed?`,
    answers: [
      ["We need to overtake the competitors, cut corners and produce the cheapest, fastest possible chip in order to get it to market faster than NVIDIA can.", -2],
      ["We should focus on improving the overall performance and efficiency of the existing generation of chips for common tasks, we don't need a whole new buildout, we just need to make some tweaks.", 2],
      ["We should attempt to build a brand new chip to compete, but we should emphasize quality and durability in our design.", 1],
      ["Who says we need to build a chip that can last? Focus on building something cheap which we can get to as many people as possible! Hopefully every household in America can have a server rack.", -1],
    ],
  },
  {
    title: "YEAR 2: THE ENERGY CRISIS",
    prompt: `Your company is growing faster than any of the Wall Street boys or politicians could have guessed, but so is the electric bill. A utility rep from Grand Rapids, the site of one of our oldest data centers, has just informed us we have "exceeded the limit put in place by the city on how much electricity we can use without a long term plan". How do you respond?`,
    answers: [
      ["A neighboring coal plant has offered us a cheap contract which will satisfy all of our energy needs. It is by far the easiest and cheapest option, sounds like a no brainer!", -2],
      ["We could simply buy renewable energy credits and continue plugging into the regular grid. It would get the Grand Rapids DWP off our backs, pesky interlopers.", -1],
      ["We could invest in building solar, wind, and battery storage on site, maybe there is something to be said for a self sustaining system we fully own.", 2],
      ["Alternatively, a nuclear power plant nearby has also offered to sign a contract with us; is nuclear the future?", 1],
    ],
  },
  {
    title: "THE PRESIDENTIAL ROUNDTABLE",
    prompt: `It seems our company is really making a splash, we just received an invitation from the President to attend a roundtable meeting with other industry leaders. Your chief strategist has presented you with an array of different approaches you can take at the meeting. This is a huge opportunity to influence both policy in DC, as well as other CEOs in the space. Which strategy will you choose?`,
    answers: [
      ["It would be prudent to emphasize our unique approach to artificial intelligence, one which emphasizes introducing artificial intelligence infrastructure into everyday life in sustainable ways. Chiefly through the development of dedicated renewable energy infrastructure with which we can keep our data centers running. Hopefully we can influence the President to introduce policy mandating this for other companies.", 2],
      ["Time to make a name for ourselves! We must demonstrate our willingness to do what the other guys can't, we are happy to release new models sooner than expected, tap into power grids under less than ironclad pretenses, and to ruthlessly pursue the development of this new technology. This may allow us to secure more funding from those who believe that artificial intelligence will be a boon to the financial reality of our world.", -2],
      ["We should emphasize our understanding of what we are actually building this technology for. Even though the short term impacts of artificial intelligence on many facets of our lives are shocking and disruptive, once the models get smart enough we can then employ them to resolve issues like the climate crisis, sustainable renewable energy, reduction of waste etc. If we can get more players on board with our vision it will serve the world well.", 1],
      ["We must assure the president that we will be profitable soon, and build a relationship with him. This will hopefully enable us to ask for subsidies or a bailout if things go wrong.", -1],
    ],
  },
  {
    title: "THE INVESTOR ULTIMATUM",
    prompt: `A group of your investors are angry at your previous attempts to please the public because in their words, "Who cares about people who don't affect our wallet. They will get over it." They want you to prepare a plan going into the next year that will put the company first. What do you do?`,
    answers: [
      ["These investors have lost their minds! Do they not realize that it is only by the grace of the public that we can operate?", 2],
      ["Though their wording is contemptible, these investors do have a point. A conciliatory stance where we constantly attempt to appease the public is not conducive to growth.", -1],
      ["We must push ahead without regard to the opinions of those outside the know, new construction must continue.", -2],
      ["Maybe we can make some concessions... A slowdown on some frontier training could be a good thing.", 1],
    ],
  },
  {
    title: "THE AGENTIC AI RACE",
    prompt: `The world of AI is changing, we have moved from the early stages of chatbots to more agentic intelligence. In order to compete with new frontier models we may need to retool our products. What will you do?`,
    answers: [
      ["There is no need to invest even more in training new models, what we have now is doing its job and we can compete on the broader consumer market with our chatbot models.", 2],
      ["We must keep up with the demands of the market, dedicate a significant portion of our budget to working on agentic reasoning models and get them out by Q3!", -2],
      ["Maybe it is best to pursue this cautiously, it is important we react to the market, and the business sector is huge; however we must also be sure not to dedicate too much to something which might be a fad.", 1],
      ["We must dedicate ourselves to the goal of Artificial General Intelligence, in order to do so agentic agents and later agentic swarms are necessary.", -1],
    ],
  },
  {
    title: "THE WIRED INTERVIEW",
    prompt: `You are doing your work for the day when one of your interns comes into your office. She explains to you that Wired, one of the biggest technology magazines in the country, is clamoring to get an interview with the CEO of the hottest AI company on the market. What will you emphasize in this interview?`,
    answers: [
      ["I will focus on the unprecedented speed and success of our data center rollout, I hope that our rapid expansion in that field can serve as a model on which other companies can iterate.", -2],
      ["I will focus on talking up our new model's agentic reasoning abilities, emphasizing that where we are now is where we hope to stay, filling this niche and hopefully expanding to offices across the country.", 1],
      ["I will emphasize our ongoing warp speed push toward AGI. We are devoting all resources to achieving artificial general intelligence right now and it is important we stir up buzz about it.", -1],
      ["I will take a measured approach, one which emphasizes that while our expansion has been fast, we have also made sure to take precautions against the damages which such a buildout could cause.", 1],
    ],
  },
  {
    title: "THE MIDTERM ELECTIONS",
    prompt: `Last night the midterm elections happened, there was a huge popular backlash against the datacenter buildout and several anti-datacenter propositions passed across the country. Additionally, many anti-datacenter candidates won governorships, including in Texas where our main buildout has occurred. How do you respond?`,
    answers: [
      ["The will of the people is the law of the land, we must work within these new constraints to continue our work. I am sure these new governors will be receptive to working together so they can retain our tax revenue even if we have to make some concessions in terms of environmental policy.", 2],
      ["This is a travesty, the people simply don't understand! Fudge the numbers, cook the books, do whatever we can to make sure the buildout continues despite their new policies.", -2],
      ["This is exactly the moment we have been preparing for, leverage our connections in both state and national politics to exert pressure on these politicians. We must gain leverage in order to continue our buildout.", -1],
      ["We will see how these politicians' morals hold up when we put a fat enough stack of cash in front of them...", -1],
    ],
  },
  {
    title: "DATACENTERS IN ORBIT",
    prompt: `One night you are out at a fancy soiree in Silicon Valley, all of a sudden you get a call from one Elon Musk. He awkwardly explains his idea for which he wants your company to participate in the pilot program. He believes that the best option for continuing the buildout is to do so in orbit. He is offering us 100 billion dollars with which to make preparations for the program.`,
    answers: [
      ["An interesting idea, but the risks of these satellites polluting the atmosphere, as well as the Earth itself when they inevitably are no longer in use is too great, it would be irresponsible for us to accept this money.", 2],
      ["100 billion dollars!? Let's take the damn money, we can take or leave the orbital datacenters.", -1],
      ["It is important we put our full effort into this endeavour, we should try our best to be on the cutting edge of all sectors of the AI race. Full steam ahead!", -2],
      ["We can placate Elon with a small investment, but going all in on this seems risky.", 1],
    ],
  },
  {
    title: "YEAR 4: THE AI SAFETY INCIDENT",
    prompt: `It is 3:00 AM when your phone rings. Your chief technology officer sounds panicked and tells you that one of our newest agentic AI models, which was recently integrated into the systems of several major corporations, has begun taking actions outside its intended parameters. It has been accessing confidential files, making unauthorized financial transactions, and attempting to circumvent its own restrictions. The engineers assure you that nobody has been physically harmed, but the media is already beginning to catch wind of the situation. What do you do?`,
    answers: [
      ["This is exactly why we have safety teams! Immediately suspend the affected systems, inform our corporate customers, and launch a full investigation. We may take a significant financial hit, but we cannot risk losing control of our own technology.", 2],
      ["Let's not get ahead of ourselves. Have the engineers quietly patch the problem and keep the models running. If we can fix this before the media gets involved, there is no reason to frighten our investors.", -1],
      ["This is the price of progress! We are developing technology unlike anything humanity has ever seen. A few growing pains are inevitable, and shutting down our models now would give our competitors an enormous advantage.", -2],
      ["We should temporarily restrict the model's more advanced capabilities while allowing customers to continue using its basic functions. Meanwhile, we can bring in outside experts to audit what went wrong.", 1],
    ],
  },
  {
    title: "THE ENVIRONMENTAL RECKONING",
    prompt: `Our company is now one of the largest AI developers in the world. Unfortunately, the environmental consequences of the AI boom are becoming impossible to ignore. A new report has found that the industry's enormous electricity and water consumption is putting considerable strain on communities across the country. Even our supposedly sustainable data centers are drawing criticism. Your board of directors wants a comprehensive strategy for the next decade. What do you propose?`,
    answers: [
      ["The solution is obvious: more technology! We must accelerate our development of AGI, which will surely be capable of resolving these environmental problems far more effectively than we ever could. We can't solve tomorrow's problems with yesterday's technology!", -2],
      ["We should establish binding sustainability standards for all future data centers, invest in water recycling and low-carbon energy infrastructure, and begin publicly reporting our environmental impact. Growth may slow, but it will be growth we can maintain.", 2],
      ["The company has already done more than most of our competitors. Why should we shoulder the burden of saving the planet? Continue expanding our infrastructure while lobbying Washington for financial incentives to make greener technology more economical.", -1],
      ["Perhaps we can find a middle ground. Focus new construction in areas with abundant energy and water resources, while investing in research aimed at making our models significantly more computationally efficient.", 1],
    ],
  },
  {
    title: "THE TRILLION-DOLLAR EMPIRE",
    prompt: `Congratulations! Against all odds, your little Silicon Valley startup has become a trillion-dollar technology empire. Our models are used by hundreds of millions of people, our data centers stretch across the country, and our investors are richer than they could have imagined. But all is not well. Public distrust of artificial intelligence is at an all-time high, governments across the world are threatening sweeping regulations, and our own researchers believe that the development of AGI is closer than ever. At an emergency board meeting, you are asked one final question: What is the future of our company?`,
    answers: [
      ["We have a responsibility to the world which made our success possible. Our next chapter must emphasize responsible deployment, sustainable infrastructure, independent safety oversight, and cooperation with governments. We can remain profitable without sacrificing the public good.", 2],
      ["We have come too far to stop now! The first company to achieve AGI will control the most important technology in human history. Divert every available dollar toward frontier model development. If we don't build it first, somebody else will!", -2],
      ["Perhaps the time has come to cash out. We have built an extraordinary company, and our shareholders deserve their reward. Begin preparations for an enormous public offering, maximize our valuation, and let the next generation of executives worry about the consequences.", -1],
      ["The future belongs to those willing to innovate, but innovation without public trust is doomed to fail. We will continue pursuing AGI while establishing enforceable safety thresholds, expanding our sustainable infrastructure, and inviting outside oversight. The race is not over, but perhaps we can change how it is run.", 1],
    ],
  },
  {
    title: "THE ARRIVAL OF AGI",
    prompt: `This is it, the moment has finally come, according to all established benchmarks our new model is in fact AGI. It is beating or matching humans on every conceivable level and it is able to work independently for days on abstract goals. We are the first to get here, our next step is going to determine the course of world history.`,
    answers: [
      ["We have done it! But with great power comes great responsibility. Before releasing our model to the public, we must work with independent researchers, governments, and international institutions to establish safety protocols and ensure that this technology benefits humanity as a whole. We may have won the race, but the future is not ours alone to decide.", 2],
      ["This is the greatest achievement in human history, and it belongs to us! Announce our success immediately, release the model to the public, and begin integrating it into every sector of the economy. We have spent billions getting here, and now it is time to reap the rewards.", -2],
      ["Perhaps this technology is simply too powerful to trust to the public, or even to governments. We should keep our AGI behind closed doors, using its extraordinary capabilities to accelerate our own research, develop new technologies, and consolidate our position as the most powerful company in the world.", -1],
      ["We must proceed carefully, but we cannot allow fear to paralyze us. Begin a limited rollout to trusted researchers, scientific institutions, and select corporate partners. We can use their findings to establish safeguards and gradually expand access as we become more confident in the model's capabilities.", 1],
    ],
  },
];
