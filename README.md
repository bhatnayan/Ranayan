# Link Tracker Project

A simple React-based website that tracks visitor information when they click your shared link.

## Features
- Automatically collects visitor device information
- Records date and time of visit
- No security warnings for visitors
- Safe and easy to open
- No user input required

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure GitHub Pages**
   - Update `homepage` in `package.json` with your GitHub username and repository name
   - Example: `"homepage": "https://yourusername.github.io/your-repo-name"`

3. **Set Up Data Storage (Choose one option)**

   **Option A: Using Google Sheets (Recommended - Free & Easy)**
   - Follow the instructions in `src/config.js` to set up Google Apps Script
   - Update the `WEBHOOK_URL` with your Google Apps Script URL

   **Option B: Using FormSpree (Alternative)**
   - Sign up at https://formspree.io (free tier available)
   - Update the `WEBHOOK_URL` with your FormSpree endpoint

4. **Test Locally**
   ```bash
   npm start
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## How It Works

When someone visits your link:
1. The page loads normally with a welcome message
2. In the background, device info is collected (browser, OS, screen size)
3. Visit timestamp is recorded
4. Data is sent to your configured webhook
5. Visitor sees no warnings or permission requests

## Privacy Note

This tool collects basic device information available through standard browser APIs. Make sure to comply with privacy regulations in your jurisdiction and inform users if required.
