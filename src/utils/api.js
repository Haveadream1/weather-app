const KEY = process.env.API_KEY;
const url = "https://api.weatherapi.com/v1/forecast.json?";

export default async function fetchData(queryChoice) {
    console.log("API Fetch trigger !");
    
    const response = await fetch(
        `${url}key=${KEY}&q=${queryChoice}&days=3&aqi=no&alerts=no`,
        { mode: "cors" },
    );
    if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    return data;
};
