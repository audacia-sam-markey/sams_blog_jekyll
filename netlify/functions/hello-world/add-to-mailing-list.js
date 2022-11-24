import fetch from "node-fetch";
const API_ENDPOINT = "https://api.gridfox.com/";
export async function handler(event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  const params = querystring.parse(event.body);
  const name = params.name;
  const data = {
    "Field Name": "Field Value",
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
      body: JSON.stringify(),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
}
