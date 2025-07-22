require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

const accessToken = process.env.FB_ACCESS_TOKEN;
const pixelId = process.env.FB_PIXEL_ID;

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

// Универсальная отправка события в Facebook
async function sendFacebookEvent(eventName) {
  const data = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          em: [sha256("client@example.com")]
        },
        custom_data: {
          currency: "USD",
          value: 1.00
        }
      }
    ]
  };

  try {
    const res = await axios.post(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      data
    );
    console.log(`✅ Event "${eventName}" sent:`, res.data);
  } catch (err) {
    console.error(`❌ Error sending "${eventName}":`, err.response?.data || err.message);
  }
}

module.exports = { sendFacebookEvent };
