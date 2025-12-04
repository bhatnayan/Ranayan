# Deployment Guide

## Step 1: Install Dependencies

Open terminal in your project folder and run:
```bash
npm install
```

## Step 2: Set Up Data Collection

### Option A: Google Apps Script (Recommended - 100% Free)

1. Go to https://script.google.com
2. Click "New Project"
3. Open `googleAppsScript.txt` in this project
4. Copy all the code and paste it into Google Apps Script editor
5. Click "Deploy" > "New deployment"
6. Select type: "Web app"
7. Configure:
   - Execute as: "Me"
   - Who has access: "Anyone"
8. Click "Deploy" and authorize the script
9. Copy the "Web app URL"
10. Open `src/config.js` and replace `YOUR_WEBHOOK_URL_HERE` with your URL

Your data will be automatically saved to a Google Sheet called "Link Tracker Data" in your Google Drive.

### Option B: Webhook.site (For Testing Only)

1. Go to https://webhook.site
2. Copy your unique URL
3. Paste it in `src/config.js`
4. Visit the webhook.site page to see incoming data in real-time

Note: webhook.site data expires, use Google Apps Script for permanent storage.

## Step 3: Configure GitHub Repository

1. Create a new repository on GitHub
2. Name it (e.g., "link-tracker")
3. Don't initialize with README (we already have files)

## Step 4: Update package.json

Open `package.json` and update the homepage field:
```json
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
```

Replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your repository name

## Step 5: Initialize Git and Push

Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 6: Deploy to GitHub Pages

Run:
```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy to GitHub Pages

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Step 8: Test Your Link

1. Visit your deployed URL
2. Check your Google Sheet or webhook.site
3. You should see visitor data appear!

## Security Notes

✅ GitHub Pages automatically provides HTTPS (no warnings for visitors)
✅ No permissions are requested from visitors
✅ Data collection uses standard browser APIs
✅ No cookies or local storage used
✅ Completely safe for visitors to access

## What Data is Collected?

- Browser name (Chrome, Firefox, Safari, etc.)
- Operating System (Windows, MacOS, Android, iOS, etc.)
- Device type (Desktop or Mobile)
- Screen resolution
- Language preference
- Date and time of visit
- Timezone
- Referrer (where they came from)

## Troubleshooting

**Problem**: npm install fails
**Solution**: Make sure you have Node.js installed (download from nodejs.org)

**Problem**: npm run deploy fails
**Solution**: Make sure you've committed all changes and have set up git remote

**Problem**: No data appearing in Google Sheet
**Solution**: 
- Check that you've updated WEBHOOK_URL in src/config.js
- Make sure you deployed AFTER updating the config
- Check Google Apps Script execution logs

**Problem**: GitHub Pages shows 404
**Solution**: 
- Wait a few minutes after deployment
- Check repository Settings > Pages to ensure gh-pages branch is selected
- Make sure homepage in package.json matches your GitHub Pages URL

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Privacy Compliance

Remember to add a privacy policy if required in your jurisdiction. The data collected is minimal and doesn't identify individuals, but transparency is always good practice.
