// Copy this file into Google Apps Script; do not load it in index.html.
const SPREADSHEET_ID = "1ItnW2s3RA91cgfSdGWra4wMZKvHi0XdD1u_7MYJR1Ew";

function doPost(e) {
  const result = JSON.parse(e.parameter.result);
  const outcomes = ["Utopia", "Not Bad", "WALL-E", "Environmental Collapse"];
  if (!/^[a-f0-9-]{36}$/i.test(result.attemptId) ||
      result.quizVersion !== 2 || !outcomes.includes(result.winner) ||
      !Number.isFinite(Date.parse(result.completedAt)) ||
      !Array.isArray(result.answers) || result.answers.length !== 15 ||
      !result.answers.every((n) => Number.isInteger(n) && n >= 1 && n <= 4) ||
      !Number.isInteger(result.totalScore) ||
      result.totalScore < -30 || result.totalScore > 30) {
    throw new Error("Invalid quiz result");
  }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName("Results v2") || spreadsheet.insertSheet("Results v2");
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["attempt_id", "completed_at", "quiz_version", "winner",
        "total_score", ...Array.from({ length: 15 }, (_, i) => `q${i + 1}`)]);
    }
    const count = sheet.getLastRow() - 1;
    const duplicate = count > 0 && sheet.getRange(2, 1, count, 1)
      .createTextFinder(result.attemptId).matchEntireCell(true).findNext();
    if (!duplicate) {
      sheet.appendRow([result.attemptId, new Date(result.completedAt).toISOString(),
        result.quizVersion, result.winner,
        result.totalScore, ...result.answers]);
    }
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
  return ContentService.createTextOutput("received");
}
