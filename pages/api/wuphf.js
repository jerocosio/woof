export default function handler(req, res) {
  let headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Basic ${process.env.SECRET_KEY}`,
  };
  var options = {
    host: "onesignal.com",
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers,
  };

  let data = {
    app_id: "8f9b57f7-4cd8-4eff-ad18-1dfd18f7ce17",
    contents: {
      en: `🐶 Your friend ${req.body.name} is sending you a WUPHF! 🐶`,
    },
    included_segments: ["Subscribed Users"],
  };

  let https = require("https");
  var request = https.request(options, function (res) {
    res.on("data", function (data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });

  request.on("error", function (e) {
    console.log("ERROR One Signal:");
    console.log(e);
  });

  request.write(JSON.stringify(data));
  request.end();
  res.status(200);
}
