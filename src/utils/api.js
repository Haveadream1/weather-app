export default async function fetchData(city) {
    const URL = `/.netlify/functions/weather?city=${encodeURIComponent(city)}`;

    console.log("API Fetch trigger !");
    
    const response = await fetch(URL);
    if (!response.ok) throw new Error(`HTTP error, status: ${response.status}`);

    const data = await response.json();
    console.log(data);

    return data;
};