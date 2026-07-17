# Setup Guide: Khanyisile Backend (Google Sheets + Apps Script)

## Step 1: Create the Google Sheet

1. Go to sheets.google.com → create a new blank spreadsheet
2. Rename it: `Khanyisile - Future Ready Learners DB`
3. Create 3 tabs (bottom of screen, right-click to rename a tab):
   - `Students`
   - `Progress`
   - `Badges`

4. Add these exact headers in **row 1** of each tab:

**Students tab:**
```
StudentID | Name | Grade | Class | DateAdded
```

**Progress tab:**
```
Timestamp | StudentID | Module | Week | ActivityType | Score | XP | Completed
```

**Badges tab:**
```
Timestamp | StudentID | BadgeName
```

5. In the **Students** tab, add a few test rows manually so you can demo, e.g.:
```
Thando_GradeR | Thando M | Grade R | Grade R | 2026-06-18
Sipho_GradeR  | Sipho N  | Grade R | Grade R | 2026-06-18
```
(Leave StudentID blank if adding via the app — it auto-generates as Name_Class)

## Step 2: Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**
2. Delete any starter code in the editor
3. Paste in the entire contents of `AppsScript-Code.gs`
4. Click the **Save** icon (or Ctrl+S)

## Step 3: Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Fill in:
   - Description: `Khanyisile API v1`
   - Execute as: **Me**
   - Who has access: **Anyone** (this allows the HTML pages to call it without a Google login)
4. Click **Deploy**
5. **Authorize access** when prompted (it's your own script, so click through the "unsafe" warning — this is normal for personal Apps Script projects)
6. Copy the **Web app URL** it gives you — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Step 4: Paste the URL into the frontend

Open `config.js` in the pilot folder and replace the placeholder with your real Web App URL:

```javascript
const API_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

## Re-deploying after changes

If you edit the `.gs` script later, you must click **Deploy → Manage deployments → Edit (pencil icon) → New version → Deploy** for changes to go live. Just saving the script is not enough.

## One Sheet per school

For each new school, repeat Steps 1-3 with a fresh copy of the Sheet (File → Make a copy works fine — the script copies with it). Each school gets its own unique Web App URL, which keeps their data completely separate.
