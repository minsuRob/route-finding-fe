const axios = require("axios");
const searchQuerys = ["theclimb_yeonnam", "", "peakers_jongro"];

async function fetchData(searchQueries) {
  for (const [index, query] of searchQueries.entries()) {
    try {
      const response = await axios.get(
        `http://127.0.0.1:80/get_profile_pic?username=${query}`
      );
      console.log(`[${index + 1}]--[] ${response.data.profile_pic_url}`);
    } catch (error) {
      console.log(`[${index + 1}]--[] ERROR ${query}`);
    }
  }
}

fetchData(searchQuerys);
