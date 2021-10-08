export default function handler(req, res) {
  console.log("key: ", process.env.SECRET_KEY);
  let headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Basic ${process.env.SECRET_KEY}`,
  };
  var options = {
    host: "onesignal.com",
    port: 443,
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
  var req = https.request(options, function (res) {
    res.on("data", function (data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });

  req.on("error", function (e) {
    console.log("ERROR:");
    console.log(e);
  });

  req.write(JSON.stringify(data));
  req.end();
  res.status(200).json({ user: "Ada Lovelace" });
}
