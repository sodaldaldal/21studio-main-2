const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { default: axios } = require('axios');

// Facebook Lead Event
app.post('/api/fb/lead', async (req, res) => {
  try {
    const accessToken = process.env.FB_ACCESS_TOKEN;
    const pixelId = process.env.FB_PIXEL_ID;

    const data = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
        },
      ],
    };

    const fbRes = await axios.post(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      data
    );

    console.log('✅ Event "Lead" sent:', fbRes.data);
    res.status(200).json(fbRes.data);
  } catch (err) {
    console.error('❌ Facebook Lead error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'Facebook Lead send failed' });
  }
});

// 🔥 Обязательно:
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
