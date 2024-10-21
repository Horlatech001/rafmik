if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Call a geocoding service with latitude and longitude
    fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
    .then(response => response.json())
    .then(data => updateAddress(data));
}

function updateAddress(location) {
    const userCountry = location.country;  // Get country from the geocoding API response

    // Define the Nigeria and London addresses
    let address;
    if (userCountry === "Nigeria") {
        // Display Nigeria address if the user is in Nigeria
        address = "1 Corporate Ave, Victoria Island, Lagos, Nigeria";
    } else {
        // Display London address for users from any foreign country
        address = "12, Oxford Street, London, W1D 1AR";
    }

    // Update the HTML content dynamically
    document.querySelector(".address-text").textContent = address;
}
