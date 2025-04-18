const express = require('express');
const router = express.Router();
const fetchNumbers = require('../services/fetchNumbers');
const { updateWindow, getCurrentState } = require('../utils/slidingWindow');

router.get('/:type', async (req, res) => {
  const type = req.params.type;

  try {
    const fetchedNumbers = await fetchNumbers(type);
    const prevState = getCurrentState();
    updateWindow(fetchedNumbers);
    const currState = getCurrentState();

    const avg =
      currState.length > 0
        ? (currState.reduce((a, b) => a + b, 0) / currState.length).toFixed(2)
        : 0;

    res.json({
      windowPrevState: prevState,
      windowCurrState: currState,
      numbers: fetchedNumbers,
      avg: parseFloat(avg),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch numbers.' });
  }
});

module.exports = router;
