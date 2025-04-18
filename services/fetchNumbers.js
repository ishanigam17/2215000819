const axios = require('axios');

const URL_MAP = {
  p: 'http://20.244.56.144/evaluation-service/primes',
  f: 'http://20.244.56.144/evaluation-service/fibo',
  e: 'http://20.244.56.144/evaluation-service/even',
  r: 'http://20.244.56.144/evaluation-service/rand',
};

const fetchNumbers = async (type) => {
  const url = URL_MAP[type];
  if (!url) return [];

  try {
    const response = await axios.get(url, { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching from ${type} API:`, error.message);
    return [];
  }
};

module.exports = fetchNumbers;
