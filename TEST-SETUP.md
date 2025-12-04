# Test Your Setup - Step by Step

## Quick Diagnostic Steps

### Step 1: Update Google Apps Script

1. Go to https://script.google.com
2. Open your "Link Tracker" project
3. **IMPORTANT**: Replace ALL the code with the updated code from `googleAppsScript.txt`
4. Click **💾 Save**
5. Click **"Deploy"** → **"Manage deployments"**
6. Click the **pencil/edit icon** on your existing deployment
7. Under "Version", select **"New version"**
8. Click **"Deploy"**
9. Copy the Web App URL (it should be the same as before)

### Step 2: Verify Your Config

The webhook URL in `src/config.js` should be:
```
https://script.google.com/macros/s/AKfycbx-8pnQBPh6OJuHQV5CISXZ-mK5nuF93tJSdTdN3gLrrNcrV8DySyU1lCadEqDlQR5i/exec
```

Make sure this matches your actual Google Apps Script deployment URL!

### Step 3: Test Google Apps Script Manually

In Google Apps Script editor:
1. Select **"testScript"** from the function dropdown (top)
2. Click **▶ Run**
3. Authorize if needed
4. Check execution log (View → Logs or Ctrl+Enter)
5. **Go to Google Drive** - you should see "Link Tracker Data" sheet
6. Open it - there should be one test row

✅ If this works, your script is fine!
❌ If this fails, check the execution log for errors

### Step 4: Deploy Updated React App

Run these commands:
```powershell
cd G:\JAVASCRIPT\React_JS\Link_Project
git add .
git commit -m "Fix tracking code"
git push
npm run deploy
```

Wait 2-3 minutes for deployment to complete.

### Step 5: Test Your Live Site

1. Open a **new incognito/private browser window**
2. Visit: https://bhatnayan.github.io/Ranayan
3. Press **F12** to open Developer Console
4. Look at the **Console** tab
5. You should see:
   - "Tracking visitor data: {object with your info}"
   - "Sending to webhook: {your URL}"
   - "Data sent successfully"

### Step 6: Check Google Sheet

1. Go to Google Drive
2. Open "Link Tracker Data"
3. You should see a new row with your visit info!

## Troubleshooting

### Issue: Security Warning on Site

**Fix:**
1. Go to https://github.com/bhatnayan/Ranayan/settings/pages
2. Make sure "Source" is set to "gh-pages" branch
3. Wait 5 minutes and refresh

### Issue: No Console Logs Appearing

The old version is cached. Solution:
- Press **Ctrl+Shift+R** (hard refresh)
- Or clear browser cache
- Or use incognito mode

### Issue: "Tracking error" in Console

The webhook URL might be wrong. Solutions:
1. Copy the Web App URL from Google Apps Script again
2. Update `src/config.js` with the correct URL
3. Run `npm run deploy` again

### Issue: Google Sheet Still Not Created

**Test the script directly:**
1. Go to Google Apps Script
2. Click **"Deploy"** → **"Test deployments"**
3. Copy the test URL
4. Use this test command in PowerShell:

```powershell
$body = @{
    data = '{"browser":"Chrome","os":"Windows","timestamp":"2025-12-04T10:00:00.000Z"}'
}
Invoke-WebRequest -Uri "YOUR_WEBHOOK_URL_HERE" -Method POST -Body $body
```

Replace `YOUR_WEBHOOK_URL_HERE` with your actual URL.

After running this, check Google Drive for the sheet.

## Alternative: Use Webhook.site for Testing

If Google Sheets is too complicated:

1. Go to https://webhook.site
2. Copy your unique URL (looks like: `https://webhook.site/abc123...`)
3. Update `src/config.js`:
   ```javascript
   export const WEBHOOK_URL = 'https://webhook.site/YOUR-UNIQUE-ID';
   ```
4. Run `npm run deploy`
5. Visit your site
6. Go back to webhook.site - you'll see the data appear instantly!

This is great for testing, but data expires after 7 days.

## What If Nothing Works?

If you've followed all steps and still don't see data:

**Check Browser Console for the exact error message and share it with me.**

The console will show you exactly what's failing!
