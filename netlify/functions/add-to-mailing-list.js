const API_ENDPOINT = "https://api.gridfox.com/data/Subscribers";
export async function subscribeToMailingList(event, context) {
  const fetch = require("node-fetch");
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  const data = {
    Email: params.email,
  };
  return fetch(API_ENDPOINT, {
    headers: {
      Accept: "application/json",
      "gridfox-api-key":
        "Blog.vGeMqiQu2GtwEVgWOSe9dcjSnMEV4n7xFd7yfyQWBWC6d5HmBFDyyTqM2Fi1prMV",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}
