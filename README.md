# Big Decisions: A Corporate Management Experience

## Collect results on GitHub Pages

`results.js` listens for the game's completion event. It records one row per
attempt, including a UUID, completion time, quiz version, ending, sustainability score,
and 15 answers (numbered 1–4). Reviewing an ending does not create another row;
TRAVEL AGAIN starts a new attempt. The first completed result is retained.

### Set up shared collection

1. Create a Google Sheet. Copy the ID from its URL (between `/d/` and `/edit`).
2. Open **Extensions → Apps Script**. Paste `google-apps-script.js` into the
   editor and set `SPREADSHEET_ID` to your Sheet's ID.
3. Choose **Deploy → New deployment → Web app**. Execute as yourself and allow
   access to **Anyone**, so quiz players do not need to sign in. Authorize the
   script. Some school accounts restrict anonymous web apps.
4. Copy the deployment's `/exec` URL into `RESULTS_ENDPOINT` in `results.js`.
5. Publish the updated files to GitHub Pages. Complete a quiz and verify a row
   appears in the Sheet's **Results v2** tab. Review the last choice: there should
   still be one row. Restart and complete again: there should be two.
6. Select the Results v2 tab, then **File → Download → Comma-separated values (.csv)**
   to export everyone's collected results.

When changing the Apps Script code, update its deployment to a new version.
The browser script and Apps Script are separate; only `results.js` runs on Pages.
See Google's [web app deployment guide](https://developers.google.com/apps-script/guides/web).

### Local backup and limitations

Attempts are also saved in this browser's localStorage. Run
`QuizResults.downloadCSV()` in the browser console to download this browser's
history, even before configuring an endpoint. This export does not contain other
players' results. Clearing browser data removes the backup.

The cross-origin Apps Script request uses `no-cors`, so the browser cannot verify
the server's response. Submission is best effort, with no automatic retry; check
the Sheet and Apps Script execution logs to confirm collection. Offline attempts
remain in the local backup only. Storage can also be unavailable in some browsers.

The endpoint is public and accepts anonymous, client-reported results; these are
not verified assessment scores. No names or email addresses are collected.
If the quiz questions change, update the quiz version and the server validation
(currently 15 questions with four choices each).



Quiz version 2 uses the sustainability scoring system. Redeploy the updated
`google-apps-script.js` before collecting results; it writes to Results v2 to
keep the previous score format separate. `RESULTS_ENDPOINT` must be the Apps
Script deployment URL ending in `/exec`, not the spreadsheet ID.
