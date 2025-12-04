import React, { useEffect, useState } from 'react';
import './App.css';
import { WEBHOOK_URL } from './config';

function App() {
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    // Only track once
    if (!tracked) {
      trackVisitor();
      setTracked(true);
    }
  }, [tracked]);

  const getDeviceInfo = () => {
    const ua = navigator.userAgent;
    let browserName = 'Unknown';
    let osName = 'Unknown';

    // Detect Browser
    if (ua.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
    } else if (ua.indexOf('SamsungBrowser') > -1) {
      browserName = 'Samsung Browser';
    } else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) {
      browserName = 'Opera';
    } else if (ua.indexOf('Trident') > -1) {
      browserName = 'Internet Explorer';
    } else if (ua.indexOf('Edge') > -1) {
      browserName = 'Edge (Legacy)';
    } else if (ua.indexOf('Edg') > -1) {
      browserName = 'Edge (Chromium)';
    } else if (ua.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
    } else if (ua.indexOf('Safari') > -1) {
      browserName = 'Safari';
    }

    // Detect OS
    if (ua.indexOf('Win') > -1) osName = 'Windows';
    else if (ua.indexOf('Mac') > -1) osName = 'MacOS';
    else if (ua.indexOf('Linux') > -1) osName = 'Linux';
    else if (ua.indexOf('Android') > -1) osName = 'Android';
    else if (ua.indexOf('iOS') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) osName = 'iOS';

    return {
      browser: browserName,
      os: osName,
      userAgent: ua,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      language: navigator.language,
      platform: navigator.platform,
      deviceType: /Mobile|Android|iPhone|iPad|iPod/i.test(ua) ? 'Mobile' : 'Desktop'
    };
  };

  const trackVisitor = async () => {
    try {
      const deviceInfo = getDeviceInfo();
      const visitData = {
        ...deviceInfo,
        timestamp: new Date().toISOString(),
        localTime: new Date().toLocaleString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct',
        pageUrl: window.location.href
      };

      // Log data to console for debugging
      console.log('Tracking visitor data:', visitData);
      console.log('Sending to webhook:', WEBHOOK_URL);

      // Only send if webhook URL is configured
      if (WEBHOOK_URL && WEBHOOK_URL !== 'YOUR_WEBHOOK_URL_HERE') {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ data: JSON.stringify(visitData) }),
          mode: 'no-cors'
        });
        console.log('Data sent successfully');
      } else {
        console.log('⚠️ Webhook not configured in src/config.js');
      }
    } catch (error) {
      console.error('❌ Tracking error:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="title">Welcome! 👋</h1>
          <p className="subtitle">Thanks for visiting my page</p>
          <div className="message">
            <p>I'm glad you're here! Feel free to explore and reach out if you have any questions.</p>
          </div>
          <div className="footer">
            <p>Have a great day! ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
