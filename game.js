const questions = [
  {
    title: "THE SILICON VALLEY DREAM",
    prompt:
      "It is a bright Monday morning in San Jose. You walk into your new Silicon Valley office with $5 billion in VC funding and one goal: dominate the AI industry. How will you establish your physical infrastructure?",
    answers: [
      [
        "Rent server racks at an established data center to avoid construction costs.",
        "steward",
      ],
      [
        "Build our first data center in Arlington, Texas.",
        "survivor",
      ],
      [
        "Raise more funding and begin construction on five data centers.",
        "trailblazer",
      ],
      [
        "Close the startup.",
        "community",
      ],
    ],
  },
  {
    prompt: "At the outfitter, your budget is tight. What do you buy?",
    answers: [
      ["A good repair kit that will last the whole trip.", "steward"],
      ["A detailed map of lesser-known routes.", "trailblazer"],
      ["Extra provisions for the whole wagon party.", "community"],
      ["A sturdy canvas cover and emergency supplies.", "survivor"],
    ],
  },
  {
    prompt: "A broad river blocks the trail. The water is rising.",
    answers: [
      ["Take time to reinforce the wagon before crossing.", "steward"],
      ["Scout upstream for an unmarked ford.", "trailblazer"],
      ["Join other travelers to cross together.", "community"],
      ["Wait for calmer water, even if it costs a day.", "survivor"],
    ],
  },
  {
    prompt: "A wheel cracks miles from the nearest settlement.",
    answers: [
      ["Repair it carefully with the spare parts you saved.", "steward"],
      ["Try a new fix using whatever the trail provides.", "trailblazer"],
      ["Ask nearby travelers to lend a hand.", "community"],
      ["Unload the wagon and make a slow, safe repair.", "survivor"],
    ],
  },
  {
    prompt: "You reach a fork in the trail. Which way do you go?",
    answers: [
      ["The well-traveled route with reliable water stops.", "steward"],
      ["The shorter mountain pass no one has tried this year.", "trailblazer"],
      ["The route where another family needs a travel partner.", "community"],
      ["The longer path with the gentlest terrain.", "survivor"],
    ],
  },
  {
    prompt: "The midday sun is fierce, and the water runs low.",
    answers: [
      ["Ration water and look for a sustainable refill point.", "steward"],
      ["Push ahead to reach the river marked on your map.", "trailblazer"],
      ["Share what remains so everyone can keep going.", "community"],
      ["Rest in the shade until it is safe to travel again.", "survivor"],
    ],
  },
  {
    prompt: "A traveler on the trail has fallen ill. What do you do?",
    answers: [
      ["Offer herbs and supplies from your carefully packed kit.", "steward"],
      ["Ride ahead to find the nearest doctor.", "trailblazer"],
      ["Stay and help their family care for them.", "community"],
      ["Set up a clean, quiet camp and monitor their fever.", "survivor"],
    ],
  },
  {
    prompt: "You reach a trading post with room for one more item.",
    answers: [
      ["A hand tool to mend or make things along the way.", "steward"],
      ["A compass to explore beyond the marked trail.", "trailblazer"],
      ["A board game to lift everyone's spirits.", "community"],
      ["A kettle to boil drinking water at camp.", "survivor"],
    ],
  },
  {
    prompt: "Storm clouds gather over a stretch of open prairie.",
    answers: [
      ["Secure loose cargo so nothing is wasted or lost.", "steward"],
      ["Make for the distant tree line before the storm hits.", "trailblazer"],
      ["Bring nearby travelers into your camp for shelter.", "community"],
      ["Pitch camp early in a sheltered spot and wait it out.", "survivor"],
    ],
  },
  {
    prompt: "You find a meadow full of wildflowers beside the trail.",
    answers: [
      ["Leave it untouched for the travelers who come after.", "steward"],
      ["Explore the ridge for a better view of the valley.", "trailblazer"],
      ["Stop so the children can gather and press a few flowers.", "community"],
      ["Take the chance to rest and check everyone's health.", "survivor"],
    ],
  },
  {
    prompt: "Another wagon's supplies have spilled across the trail.",
    answers: [
      ["Help salvage and repack what can still be used.", "steward"],
      ["Keep moving; the weather window is closing.", "trailblazer"],
      ["Stop and help the family gather every last bundle.", "community"],
      ["Check for injuries before anyone starts to lift.", "survivor"],
    ],
  },
  {
    prompt: "The trail is blocked by a fallen tree. Night is coming.",
    answers: [
      ["Cut a careful path and save the wood for the fire.", "steward"],
      ["Climb the ridge and find a way around.", "trailblazer"],
      ["Organize everyone into teams to clear it together.", "community"],
      ["Make camp and tackle the obstacle in daylight.", "survivor"],
    ],
  },
  {
    prompt: "You meet a local guide who offers advice for the crossing.",
    answers: [
      ["Ask how to travel without damaging the riverbank.", "steward"],
      ["Ask about a hidden route to the far side.", "trailblazer"],
      ["Listen closely and offer a fair trade for their time.", "community"],
      ["Ask which crossing is safest for your whole party.", "survivor"],
    ],
  },
  {
    prompt: "A companion wants to press on, but looks exhausted.",
    answers: [
      ["Reorganize the load so the wagon rolls more easily.", "steward"],
      ["Take the lead and promise a rest at the next landmark.", "trailblazer"],
      ["Let the group decide together when to stop.", "community"],
      ["Call an early halt; health comes before the schedule.", "survivor"],
    ],
  },
  {
    prompt: "The Willamette Valley is finally in view. What comes next?",
    answers: [
      ["Build a home from what the land can renew.", "steward"],
      ["Keep exploring; the next horizon is calling.", "trailblazer"],
      ["Help your traveling companions find a place nearby.", "community"],
      ["Settle somewhere safe and give the family time to recover.", "survivor"],
    ],
  },
];

const profiles = {
  steward: {
    image: "assets/endings/steward.svg",
    imageAlt: "A well-kept cabin, growing crops, and a covered wagon in a green valley.",
    label: "Steward",
    title: "Keeper of the Valley",
    description: "You made every mile count. In Oregon, your well-kept tools, careful choices, and respect for the land help a new home take root — and leave the trail a little better for the next wagon.",
    icon: "✦",
  },
  trailblazer: {
    image: "assets/endings/trailblazer.svg",
    imageAlt: "A covered wagon and an explorer following a winding trail toward mountain peaks.",
    label: "Trailblazer",
    title: "The Far-Horizon Pioneer",
    description: "You never let the unknown turn you around. Your bold spirit carries you to Oregon with stories, maps, and a knack for finding a way where no trail seemed to be.",
    icon: "↗",
  },
  community: {
    image: "assets/endings/community.svg",
    imageAlt: "Traveling companions gathered between cabins in a welcoming new settlement.",
    label: "Community",
    title: "The New Neighbor",
    description: "You crossed the plains by making sure no one crossed alone. Your wagon may not have been the first to arrive, but a circle of friends arrives with you — and that is a fine start to any town.",
    icon: "♥",
  },
  survivor: {
    image: "assets/endings/survivor.svg",
    imageAlt: "A sheltered wagon, tent, and glowing campfire beneath the night sky.",
    label: "Survival",
    title: "The Steady Hand",
    description: "You knew when to wait, when to shelter, and when to put your people first. You reach Oregon ready to rest, rebuild, and make a home that can weather whatever comes next.",
    icon: "◆",
  },
};

const game = document.querySelector("#game");
const soundButton = document.querySelector(".sound-toggle");
let currentQuestion = -1;
let selections = Array(questions.length).fill(null);
let audioContext;
let screen = "intro";

function playTone(frequency = 520, duration = 0.06) {
  if (!soundButton.matches('[aria-pressed="true"]')) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext ??= new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "square";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.035, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function updateScenery(profile = null) {
  const scenery = document.querySelector(".scenery");
  const image = scenery.querySelector(".ending-scene");
  scenery.classList.toggle("show-ending", Boolean(profile));
  image.hidden = !profile;
  if (profile) {
    image.src = profile.image;
    image.alt = profile.imageAlt;
    scenery.setAttribute("aria-label", profile.title);
  } else {
    image.removeAttribute("src");
    image.alt = "";
    scenery.setAttribute("aria-label", "A pixel-art wagon crossing the western prairie");
  }
}

function renderIntro() {
  screen = "intro";
  updateScenery();
  game.innerHTML = `
    <p class="eyebrow">A journey of 15 choices</p>
    <h1 tabindex="-1">Big Decisions: A Corporate Management Experience</h1>
    <p class="intro-copy">The valley is a thousand miles away, the wagon is waiting, and the trail has a way of surprising you. <strong>How you travel will shape the story you bring home.</strong></p>
    <button class="start-button" type="button" data-action="start">
      START <span class="button-arrow" aria-hidden="true">→</span>
    </button>
    <p class="intro-note">15 decisions · 4 possible endings · about 4 minutes</p>
  `;
}

function renderQuestion() {
  screen = "question";
  updateScenery();

  const question = questions[currentQuestion];
  const selected = selections[currentQuestion];

  // Count answers selected, not just questions visited.
  const completed = selections.filter(
    (answer) => answer !== null
  ).length;

  const progress = Math.round(
    (completed / questions.length) * 100
  );

  // Only display images for questions that have one.
  const imageHTML = question.image
    ? `
      <div class="scenario-image-container">
        <img
          class="scenario-image"
          src="${question.image}"
          alt="${question.imageAlt || "Scenario illustration"}"
        >
      </div>
    `
    : "";

  game.innerHTML = `
    <div class="progress-area">
      <div class="progress-label">
        <span>CEO DECISION LOG</span>
        <span>
          DECISION ${String(currentQuestion + 1).padStart(2, "0")}
          / ${String(questions.length).padStart(2, "0")}
        </span>
      </div>

      <div
        class="progress-track"
        role="progressbar"
        aria-label="Decisions completed"
        aria-valuemin="0"
        aria-valuemax="${questions.length}"
        aria-valuenow="${completed}"
      >
        <div
          class="progress-fill"
          style="width: ${progress}%"
        ></div>
      </div>

      <p class="trail-marker">
        ${completed} / ${questions.length}
        DECISIONS COMPLETED — ${progress}%
      </p>
    </div>

    <div class="scenario-card">
      <p class="scenario-heading">
        ${question.title || "EXECUTIVE DECISION"}
      </p>

      ${imageHTML}

      <h2 class="question-copy" tabindex="-1">
        ${question.prompt}
      </h2>
    </div>

    <div class="answer-list" role="group"
         aria-label="Choose your response">
      ${question.answers.map(([answer], index) => `
        <button
          class="answer-button"
          type="button"
          data-answer="${index}"
          aria-pressed="${selected === index}"
        >
          <span class="answer-key" aria-hidden="true">
            ${String.fromCharCode(65 + index)}
          </span>
          <span class="answer-text">${answer}</span>
        </button>
      `).join("")}
    </div>

    <div class="question-controls">
      <button
        class="back-button"
        type="button"
        data-action="back"
      >
        ← ${currentQuestion === 0 ? "START" : "PREVIOUS"}
      </button>

      <span class="keyboard-hint">
        USE KEYS 1–4 TO SELECT
      </span>

      <button
        class="next-button"
        type="button"
        data-action="next"
        ${selected === null ? "disabled" : ""}
      >
        ${currentQuestion === questions.length - 1
          ? "SEE YOUR ENDING"
          : "CONTINUE"}
        <span class="button-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  `;
}

function getOutcome() {
  const scores = Object.fromEntries(Object.keys(profiles).map((profile) => [profile, 0]));
  selections.forEach((selection, index) => {
    const profile = questions[index].answers[selection][1];
    scores[profile] += 1;
  });
  const highestScore = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter((profile) => scores[profile] === highestScore);
  // Scan backward so the latest answer among tied approaches wins.
  const winner = selections.reduceRight((found, selection, index) =>
    found ?? (tied.includes(questions[index].answers[selection][1])
      ? questions[index].answers[selection][1] : null), null);
  return { winner, scores };
}

function renderEnding() {
  screen = "ending";
  const { winner, scores } = getOutcome();
  const profile = profiles[winner];
  updateScenery(profile);
  game.innerHTML = `
    <p class="eyebrow">Your trail story · Journey complete</p>
    <div class="ending-card">
      <p class="eyebrow">${profile.icon} &nbsp; YOUR OREGON ENDING</p>
      <h1 class="ending-title" tabindex="-1">${profile.title}</h1>
      <p class="ending-copy">${profile.description}</p>
      <div class="ending-stats" aria-label="Your trail choices by approach">
        ${Object.entries(profiles).map(([key, item]) => `
          <div class="stat"><span class="stat-label">${item.label}</span><span class="stat-value">${scores[key]}</span></div>
        `).join("")}
      </div>
      <div class="ending-actions">
        <button class="restart-button" type="button" data-action="restart">TRAVEL AGAIN ↻</button>
        <button class="back-button" type="button" data-action="review">← Review last choice</button>
      </div>
    </div>
    <p class="ending-footnote">Your ending reflects the approach you chose most often. Ties are settled by your latest trail choice.</p>
  `;
}

function selectAnswer(index) {
  selections[currentQuestion] = index;
  const completed = selections.filter((answer) => answer !== null).length;
  const progress = Math.round((completed / questions.length) * 100);

  game.querySelectorAll("[data-answer]").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.answer) === index));
  });
  game.querySelector(".progress-track").setAttribute("aria-valuenow", String(completed));
  game.querySelector(".progress-fill").style.width = `${progress}%`;
  game.querySelector(".trail-marker").textContent =
    `${completed} / ${questions.length} DECISIONS COMPLETED — ${progress}%`;
  game.querySelector('[data-action="next"]').disabled = false;
  game.querySelector(`[data-answer="${index}"]`).focus();
  playTone(620);
}

game.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.hasAttribute("data-answer")) {
    selectAnswer(Number(button.dataset.answer));
    return;
  }
  switch (button.dataset.action) {
    case "start":
      currentQuestion = 0;
      playTone(440, 0.1);
      renderQuestion();
      break;
    case "next":
      if (selections[currentQuestion] === null) return;
      if (currentQuestion === questions.length - 1) {
        renderEnding();
      } else {
        currentQuestion += 1;
        playTone(500);
        renderQuestion();
      }
      break;
    case "back":
      if (currentQuestion === 0) {
        currentQuestion = -1;
        renderIntro();
      } else {
        currentQuestion -= 1;
        renderQuestion();
      }
      break;
    case "restart":
      selections = Array(questions.length).fill(null);
      currentQuestion = -1;
      renderIntro();
      break;
    case "review":
      currentQuestion = questions.length - 1;
      renderQuestion();
      break;
  }
  game.querySelector("h1, h2")?.focus();
});

soundButton.addEventListener("click", () => {
  const enabled = soundButton.getAttribute("aria-pressed") !== "true";
  soundButton.setAttribute("aria-pressed", String(enabled));
  soundButton.querySelector(".sound-label").textContent = enabled ? "SOUND ON" : "SOUND OFF";
  if (enabled) playTone(660);
});

document.addEventListener("keydown", (event) => {
  if (screen !== "question" || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  // Native buttons already handle Enter; avoid advancing twice or skipping a choice.
  if (event.key === "Enter" && event.target.closest("button, a")) return;
  if (event.key >= "1" && event.key <= "4") {
    event.preventDefault();
    const index = Number(event.key) - 1;
    selectAnswer(index);
  }
  if (event.key === "Enter" && selections[currentQuestion] !== null) {
    event.preventDefault();
    game.querySelector('[data-action="next"]')?.click();
  }
});

renderIntro();
