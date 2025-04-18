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
    const response = await axios.get(url, {
      timeout: 500,
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU1MzgxLCJpYXQiOjE3NDQ5NTUwODEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImFiZmI1MjMyLTYyYWQtNDJiMi1iMzU1LWMyNWY1ZTcxMjQwNSIsInN1YiI6ImlzaGEubmlnYW1fY3MyMkBnbGEuYWMuaW4ifSwiZW1haWwiOiJpc2hhLm5pZ2FtX2NzMjJAZ2xhLmFjLmluIiwibmFtZSI6ImlzaGEgbmlnYW0iLCJyb2xsTm8iOiIyMjE1MDAwODE5IiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiYWJmYjUyMzItNjJhZC00MmIyLWIzNTUtYzI1ZjVlNzEyNDA1IiwiY2xpZW50U2VjcmV0IjoieWF4VGJOQVhGZ0dnZmNtUiJ9.Jpwvyx0TiqlLv26frsDsfRplWiXtA33TBA3Y86kHkM4",
 // Replace with your actual token
      },
    });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching from ${type} API:`, error.message);
    return [];
  }
};

module.exports = fetchNumbers;
