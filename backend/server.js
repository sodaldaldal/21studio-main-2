const express = require('express');
const cors = require('cors');
const fbRouter = require('./routes/fb');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Подключаем маршрут
app.use('/api/fb', fbRouter);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
