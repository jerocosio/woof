export default async function handler(req, res) {
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
  const notification = await fetch(
    "https://onesignal.com/api/v1/notifications",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Basic ${process.env.SECRET_KEY}`,
      },
      body: JSON.stringify(data),
    }
  );
  res.status(200).json(notification);
}
