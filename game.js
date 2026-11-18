import { questions } from "./questions.js";
import { earthOutcomes } from "./earth-outcomes-screen.js";

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

  if (!scenery) return;

  const image = scenery.querySelector(".ending-scene");

  if (!image) return;

  // Use a taller container for the Earth results screen.
  scenery.classList.toggle(
    "earth-result",
    screen === "ending"
  );

  // Prevent older image requests from changing the current screen.
  const requestId = String(
    Number(image.dataset.requestId || 0) + 1
  );

  image.dataset.requestId = requestId;

  // Select the appropriate illustration.
  const imagePath =
    outcome?.image ??
    (screen === "question"
      ? questions[currentQuestion]?.image
      : null);

  // Show the default scenery until the image loads.
  scenery.classList.remove("show-ending");

  image.hidden = true;
  image.onload = null;
  image.onerror = null;

  if (!imagePath) {
    image.removeAttribute("src");
    scenery.setAttribute("aria-label", "Retro game scenery");
    return;
  }

  image.alt = outcome
    ? outcome.title
    : `Illustration for decision ${currentQuestion + 1}`;

  scenery.setAttribute("aria-label", image.alt);

  image.onload = () => {
    if (image.dataset.requestId === requestId) {
      image.hidden = false;
      scenery.classList.add("show-ending");
    }
  };

  image.onerror = () => {
    if (image.dataset.requestId === requestId) {
      console.error(`Failed to load image: ${imagePath}`);
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

      const score = questions[index].answers[selection][1];

      return total + (typeof score === "number" ? score : 0);
    },
    0
  );

  let outcomeKey;

  if (totalScore >= 18) {
    outcomeKey = "utopia";
  } else if (totalScore >= 6) {
    outcomeKey = "hopeful";
  } else if (totalScore >= -8) {
    outcomeKey = "damaged";
  } else {
    outcomeKey = "collapse";
  }

  return {
    totalScore,
    outcome: earthOutcomes[outcomeKey],
  };
}

function renderRecommendations(items) {
  return items
    .map(
      (item, index) => `
        <div class="recommendation-item">
          <span aria-hidden="true">
            › ${String.fromCharCode(65 + index)}
          </span>
          <span>${item}</span>
        </div>
      `
    )
    .join("");
}

function renderEnding() {
  screen = "ending";

  const { totalScore, outcome } = getOutcome();

  // Preserve the event consumed by results.js.
  window.dispatchEvent(
    new CustomEvent("quiz:completed", {
      detail: {
        winner: outcome.label,
        totalScore,
        answers: selections.map((answer) => answer + 1),
      },
    })
  );

  // Display the selected Earth's illustration.
  // updateScenery(outcome);

  game.innerHTML = `
    <div class="final-progress">
      <div class="progress-label">
        <span>FINAL RESULT</span>
        <span>YOUR EARTH</span>
      </div>

      <div
        class="final-progress-track"
        role="progressbar"
        aria-label="Decisions completed"
        aria-valuemin="0"
        aria-valuemax="${questions.length}"
        aria-valuenow="${questions.length}"
      >
        <div class="final-progress-fill"></div>
      </div>

      <p class="trail-marker">
        ${questions.length} / ${questions.length}
        DECISIONS COMPLETED · 100%
      </p>
    </div>

    <h1 class="earth-heading" tabindex="-1">
      ${outcome.title}
    </h1>

    <div class="earth-score-row">
      <span class="earth-score">
        QUIZ SCORE: ${totalScore} POINTS
      </span>

      <span class="earth-range">
        ${outcome.scoreRange}
      </span>
    </div>

    <section class="earth-section" aria-label="Strengths">
      <h2>› STRENGTHS</h2>
      <p>${outcome.strengths}</p>
    </section>

    <section class="earth-section" aria-label="Weaknesses">
      <h2>› WEAKNESSES</h2>
      <p>${outcome.weaknesses.replace(/\n\n/g, "<br><br>")}</p>
    </section>

    <section
      class="earth-recommendations"
      aria-label="Recommendations"
    >
      <h2>› RECOMMENDATIONS</h2>

      <div class="recommendation-columns">
        <div>
          <h3>ACCESSIBLE OPTIONS:</h3>
          ${renderRecommendations(outcome.accessible)}
        </div>

        <div>
          <h3>LESS ACCESSIBLE OPTIONS:</h3>
          ${renderRecommendations(outcome.lessAccessible)}
        </div>
      </div>
    </section>

    <div class="ending-actions earth-actions">
      <button
        class="back-button"
        type="button"
        data-action="review"
      >
        ‹ REVIEW LAST CHOICE
      </button>

      <button
        class="restart-button"
        type="button"
        data-action="restart"
      >
        PLAY AGAIN ›
      </button>
    </div>
  `;
  updateScenery(outcome);
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
      window.dispatchEvent(new Event("quiz:restart"));
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