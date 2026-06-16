# Google Sheets Integration — Setup Guide

## Step 1: Add Column Headers

Open your Google Sheet and add these headers in **Row 1**:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Name | Email | Age | Gender | Course |

## Step 2: Open Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date().toLocaleString(),
    data.name || '',
    data.email || '',
    data.age || '',
    data.gender || '',
    data.course || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set **Description**: "DrQuran Enrolment"
4. Set **Execute as**: "Me"
5. Set **Who has access**: "Anyone"
6. Click **Deploy**
7. Click **Authorize access** and follow the prompts (choose your Google account, click "Advanced" → "Go to Untitled project" if you see a warning)
8. **Copy the Web App URL** — it will look like: `https://script.google.com/macros/s/XXXX.../exec`

## Step 4: Add the URL to Your Website

Share the Web App URL with me and I'll add it to the enrolment form, OR you can add it directly in the Management UI under **Settings → Secrets** as `VITE_GOOGLE_SHEETS_URL`.
