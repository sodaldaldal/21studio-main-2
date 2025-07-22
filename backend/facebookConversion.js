require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

const accessToken = process.env.FB_ACCESS_TOKEN;
const pixelId = process.env.FB_PIXEL_ID;

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

async function sendPurchaseEvent() {
  const data = {
  data: [
    {
      event_name: "Purchase",
      event_time: 1753185987,
      action_source: "website",
      user_data: {
        em: ["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"],
        ph: [null],
        ct: [null],
        fn: [null]
      },
      custom_data: {
        currency: "USD",   // 💵 вот это нужно
        value: 199.99      // 💰 можно указать сумму покупки
      },
      attribution_data: {
        attribution_share: "0.3"
      },
      original_event_data: {
        event_name: "Purchase",
        event_time: 1753185987
      }
    }
  ]
};


  try {
    const res = await axios.post(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      data
    );
    console.log('✅ Event sent:', res.data);
  } catch (err) {
    console.error('❌ Error sending event:', err.response?.data || err.message);
  }
}

// 👇 Запускаем
sendPurchaseEvent();
