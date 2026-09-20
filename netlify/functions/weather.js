// Serverless proxy
// Instead of calling the API directly from the browser, we create a Netlify function
    // Acts as a middleman
// Frontend call the Netlify function
// Netlify function calls API (secure access) and return the data

exports.handler = async (event) => {
    // only allow GET requets
    if (event.httpMethod !== "GET") return { statusCode: 405, body: "Method Not Allowed" };

    const {city} = event.queryStringParameters;
    if (!city) return { statusCode: 400, body: JSON.stringify({ error: "Required city parameter" })};

    try {
        const KEY = process.env.API_KEY;
        const URL = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${encodeURIComponent(city)}&aqi=no`;

        const response = await fetch(URL);
        if (!response.ok)  throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                // Cache the response for limited time in order to save API calls
                "Cache-Control": "public, max-age=300"
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data" })
        };
    }
}