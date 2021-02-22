const got = require("got");

const req = "https://steamspy.com/api.php?request=all&page=1";

(async () => {
  try {
    let response = await got.get(req);
    let responseJSON = JSON.parse(response.body);
    for (var k in responseJSON) {
      console.log(responseJSON[k].appid);
    }
  } catch (error) {
    console.log(error.response.body);
  }
})();
