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
    const userCity = location.city;        // Get city from the geocoding API response

    // Define different addresses based on location
    let address;
    if (userCountry === "Nigeria") {
        if (userCity === "Lagos") {
            address = "123, Victoria Island, Lagos, Nigeria";
        } else if (userCity === "Abuja") {
            address = "456, Central Business District, Abuja, Nigeria";
        } else {
            address = "Default Nigeria Address, Nigeria";
        }
    } else if (userCity === "Milton Keynes") {
        address = "17, Capital drive, Linford wood, Milton Keynes, MK14 6NG";
    } else if (userCity === "London") {
        address = "12, Oxford Street, London, W1D 1AR";
    } else {
        address = "Default Global Address";
    }

    // Update the HTML content dynamically
    document.querySelector(".address-text").textContent = address;
}
