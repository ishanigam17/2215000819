const axios = require('axios');

const getToken = async () => {
  try {
    const response = await axios.post('http://20.244.56.144/token', {
      companyName: "Affordmed",
      "clientID": "abfb5232-62ad-42b2-b355-c25f5e712405",
    "clientSecret": "yaxTbNAXFgGgfcmR",                       // ✅ Also a string
      ownerName: "isha nigam",
      ownerEmail: "isha.nigam_cs22@gla.ac.in",
      rollNo: "2215000819"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const token = response.data.access_token;
    console.log("✅ Access Token:\n", token);
    return token;
  } catch (error) {
    console.error("❌ Failed to get token:\n", error.response?.data || error.message);
  }
};

getToken();
