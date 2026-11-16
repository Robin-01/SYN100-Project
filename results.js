
const RESULTS_ENDPOINT = "https://script.google.com/a/macros/ucsd.edu/s/AKfycbyvgsool_xDLR6KSsqJAhjp-PCS1-MkVegpBZ8pK5l8Bj54l89YvmmXAG5RcPvSedNJmQ/exec";

(() => {
  const storageKey = "big-decisions-results-v1";
  let recorded = false;
  let history = [];
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(saved)) history = saved;
  } catch (error) {
    console.warn("Could not load saved quiz attempts:", error);
  }

  window.addEventListener("quiz:restart", () => { recorded = false; });
  window.addEventListener("quiz:completed", async ({ detail }) => {
    if (recorded) return;
    const result = {
      attemptId: crypto.randomUUID(),
      completedAt: new Date().toISOString(),
      quizVersion: 2,
      winner: detail.winner,
      totalScore: detail.totalScore,
      answers: [...detail.answers],
    };
    recorded = true;
    history.push(result);
    try {
      localStorage.setItem(storageKey, JSON.stringify(history));
    } catch (error) {
      console.warn("Could not save quiz attempt locally:", error);
    }

    if (!RESULTS_ENDPOINT) {
      console.info("Quiz result saved locally. Configure RESULTS_ENDPOINT to collect shared results.");
      return;
    }
    try {
      // A simple POST avoids a CORS preflight on the Apps Script endpoint.
      // The opaque response cannot confirm whether the Sheet accepted the row.
      await fetch(RESULTS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({ result: JSON.stringify(result) }),
        keepalive: true,
      });
    } catch (error) {
      console.warn("Result submission failed; a local copy is available:", error);
    }
  });

  // Local backup only: run QuizResults.downloadCSV() in the browser console.
  window.QuizResults = Object.freeze({
    downloadCSV() {
      const header = ["attempt_id", "completed_at", "quiz_version", "winner",
        "total_score", ...Array.from({ length: 15 }, (_, i) => `q${i + 1}`)];
      const rows = history.map((r) => [r.attemptId, r.completedAt, r.quizVersion,
        r.winner, r.totalScore, ...r.answers]);
      const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
      const csv = [header, ...rows].map((row) => row.map(escape).join(",")).join("\r\n");
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "quiz-results.csv";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },
  });
})();
