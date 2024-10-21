if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Call a geocoding service with latitude and longitude
    fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
    .then(response => response.json())
    .then(data => {
        console.log("Geocoding API Response:", data);  // Log the response for debugging
        updateAddress(data);
    });
}

function updateAddress(location) {
    const userCountry = location.country;  // Get country from the geocoding API response
    console.log("User's Country Detected:", userCountry);  // Log country for debugging

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

// Optional: Handle geolocation errors
function showError(error) {
    console.log("Geolocation Error: ", error.message);
}
