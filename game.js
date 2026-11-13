import { questions } from "./questions.js";

// Earth illustration outcomes for the game
const earthOutcomes = {
  utopia: {
    title: "A Sustainable Future",
    label: "Utopia",
    description:
      "Your decisions prioritized responsible growth, environmental protection, and public accountability. Your company helped build a more sustainable future.",
    image: "assets/endings/utopia.png", // name of img file for this outcome
    icon: "✦",
  },
  hopeful: {
    title: "A Future Worth Improving",
    label: "Not Bad",
    description:
      "Your company balanced growth with some responsible decisions. The world still faces challenges, but there is room to improve.",
    image: "assets/endings/not-bad.png", // name of img file for this outcome
    icon: "◆",
  },
  damaged: {
    title: "A World Under Strain",
    label: "WALL-E",
    description:
      "Rapid technological expansion came at a significant environmental cost. Waste, resource consumption, and infrastructure demands have left lasting damage.",
    image: "assets/endings/wall-e.png", // name of img file for this outcome
    icon: "!",
  },
  collapse: {
    title: "An Unsustainable Future",
    label: "Environmental Collapse",
    description:
      "The pursuit of unchecked growth overwhelmed environmental safeguards and public accountability, leaving the planet in crisis.",
    image: "assets/endings/collapse.png", // name of img file for this outcome
    icon: "×",
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


function updateScenery(outcome = null) {
  const scenery = document.querySelector(".scenery");
  const image = scenery.querySelector(".ending-scene");

  // Invalidate any previous image-loading callbacks.
  const requestId = String(
    Number(image.dataset.requestId || 0) + 1
  );
  image.dataset.requestId = requestId;

  const isQuestion = screen === "question";

  const imagePath = outcome
    ? outcome.image
    : isQuestion
      ? `assets/questions-img/question-${String(
          currentQuestion + 1
        ).padStart(2, "0")}.png`
      : null;

  scenery.classList.toggle(
    "show-ending",
    Boolean(imagePath)
  );

  image.hidden = true;
  image.onload = null;
  image.onerror = null;

  if (!imagePath) {
    image.removeAttribute("src");
    scenery.classList.remove("show-ending");
    scenery.setAttribute(
      "aria-label",
      "Retro game scenery"
    );
    return;
  }

  image.alt = outcome
    ? outcome.title
    : `Illustration for decision ${currentQuestion + 1}`;

  scenery.setAttribute("aria-label", image.alt);

  image.onload = () => {
    if (image.dataset.requestId === requestId) {
      image.hidden = false;
    }
  };

  image.onerror = () => {
    if (image.dataset.requestId === requestId) {
      image.hidden = true;
      scenery.classList.remove("show-ending");
    }
  };

  image.src = imagePath;
}



function renderIntro() {
  screen = "intro";
  updateScenery();

  game.innerHTML = `
    <p class="eyebrow">
      A journey of ${questions.length} decisions
    </p>

    <h1 tabindex="-1">
      Big Decisions: A Corporate Management Experience
    </h1>

    <p class="intro-copy">
      You are the CEO of a rapidly growing artificial
      intelligence company. Every decision will shape
      your business, the communities around you, and
      the future of the planet.
      <strong>How will you lead?</strong>
    </p>

    <button class="start-button"
            type="button"
            data-action="start">
      START
      <span class="button-arrow" aria-hidden="true">
        →
      </span>
    </button>

    <p class="intro-note">
      ${questions.length} decisions ·
      4 possible Earth outcomes
    </p>
  `;
}


function renderQuestion() {
  screen = "question";

  // Update the image displayed above the progress bar.
  // Image paths are handled automatically by updateScenery().
  updateScenery();

  // Get the current question and previously selected answer.
  const question = questions[currentQuestion];
  const selected = selections[currentQuestion];

  // Count how many questions have been answered.
  const completed = selections.filter(
    (answer) => answer !== null
  ).length;

  // Calculate progress percentage.
  const progress = Math.round(
    (completed / questions.length) * 100
  );

  // Render the question screen.
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

      <h2 class="question-copy" tabindex="-1">
        ${question.prompt}
      </h2>
    </div>

    <div
      class="answer-list"
      role="group"
      aria-label="Choose your response"
    >
      ${question.answers
        .map(
          ([answer], index) => `
            <button
              class="answer-button"
              type="button"
              data-answer="${index}"
              aria-pressed="${selected === index}"
            >
              <span
                class="answer-key"
                aria-hidden="true"
              >
                ${String.fromCharCode(65 + index)}
              </span>

              <span class="answer-text">
                ${answer}
              </span>
            </button>
          `
        )
        .join("")}
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
        ${
          currentQuestion === questions.length - 1
            ? "SEE YOUR ENDING"
            : selected !== null &&
                question.answers[selected][1] === "quit"
              ? "CLOSE STARTUP"
              : "CONTINUE"
        }

        <span
          class="button-arrow"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </div>
  `;
}

function getOutcome() {
  const totalScore = selections.reduce(
    (total, selection, index) => {
      if (selection === null) return total;

      const score =
        questions[index].answers[selection][1];

      return total +
        (typeof score === "number" ? score : 0);
    },
    0
  );

  let outcomeKey;

  if (totalScore >= 16) {
    outcomeKey = "utopia";
  } else if (totalScore >= 1) {
    outcomeKey = "hopeful";
  } else if (totalScore >= -14) {
    outcomeKey = "damaged";
  } else {
    outcomeKey = "collapse";
  }

  return {
    totalScore,
    outcome: earthOutcomes[outcomeKey],
  };
}

function renderEnding() {
  screen = "ending";

  const { totalScore, outcome } = getOutcome();

  updateScenery(outcome);

  game.innerHTML = `
    <p class="eyebrow">
      Your decisions have shaped the future
    </p>

    <div class="ending-card">
      <p class="eyebrow">
        ${outcome.icon} YOUR EARTH OUTCOME
      </p>

      <h1 class="ending-title" tabindex="-1">
        ${outcome.title}
      </h1>

      <p class="ending-copy">
        ${outcome.description}
      </p>

      <div class="ending-stats">
        <div class="stat">
          <span class="stat-label">
            Sustainability Score
          </span>
          <span class="stat-value">
            ${totalScore} / +30
          </span>
        </div>
      </div>

      <div class="ending-actions">
        <button class="restart-button"
                type="button"
                data-action="restart">
          PLAY AGAIN ↻
        </button>

        <button class="back-button"
                type="button"
                data-action="review">
          ← Review last choice
        </button>
      </div>
    </div>

    <p class="ending-footnote">
      Your outcome reflects the cumulative impact
      of your decisions throughout the simulation.
    </p>
  `;
}

function renderQuit() {
  screen = "quit";
  updateScenery();

  game.innerHTML = `
    <div class="ending-card">
      <p class="eyebrow">STARTUP CLOSED</p>

      <h1 class="ending-title" tabindex="-1">
        The End of Your Journey
      </h1>

      <p class="ending-copy">
        You decided to close your startup before
        beginning your journey into the AI industry.
        Your company never entered the race.
      </p>

      <div class="ending-actions">
        <button class="restart-button"
                type="button"
                data-action="restart">
          START AGAIN ↻
        </button>

        <button class="back-button"
                type="button"
                data-action="review">
          ← Change your decision
        </button>
      </div>
    </div>
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
  const nextButton = game.querySelector('[data-action="next"]');
  const isQuit =
    questions[currentQuestion].answers[index][1] === "quit";

  const isLastQuestion =
    currentQuestion === questions.length - 1;

  nextButton.innerHTML = `
    ${isQuit
      ? "CLOSE STARTUP"
      : isLastQuestion
        ? "SEE YOUR ENDING"
        : "CONTINUE"}

    <span class="button-arrow" aria-hidden="true">→</span>
  `;
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

    case "next": {
      const selected = selections[currentQuestion];
      if (selected === null) return;

      const choice = questions[currentQuestion]
        .answers[selected][1];

      if (choice === "quit") {
        renderQuit();
      } else if (
        currentQuestion === questions.length - 1
      ) {
        renderEnding();
      } else {
        currentQuestion += 1;
        playTone(500);
        renderQuestion();
      }

      break;
    }
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
      currentQuestion =
          screen === "quit" ? 0 : questions.length - 1;
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
