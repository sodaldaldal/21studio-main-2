const express = require('express');
const router = express.Router();
const { sendFacebookEvent } = require('../facebookConversion');

router.post('/lead', async (req, res) => {
  await sendFacebookEvent('Lead');
  res.json({ status: 'ok' });
});

module.exports = router;
