// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('itinerary-form');
    const resultsDiv = document.getElementById('itinerary-results');
    let map;

    // Initialize Google Map
    function initMap() {
        map = new google.maps.Map(document.getElementById('google-map'), {
            center: { lat: 0, lng: 0 },
            zoom: 2, // Initial zoom level
        });
    }

    // Call initMap once the DOM is loaded
    initMap();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        resultsDiv.innerHTML = ''; // Clear previous results

        const destination = document.getElementById('destination').value;
        const days = parseInt(document.getElementById('days').value);

        if (!destination || isNaN(days) || days <= 0) {
            alert('Please enter a valid destination and number of days.');
            return;
        }

        // Simulate itinerary generation (replace with real API call or calculation)
        for (let i = 1; i <= days; i++) {
            const dayHeader = document.createElement('h3');
            dayHeader.textContent = `Day ${i}`;

            const activitiesList = document.createElement('ul');
            activitiesList.innerHTML = `
                <li>Explore ${destination}</li>
                <li>Visit local attractions</li>
                <li>Try local cuisine</li>
            `;

            const dayDiv = document.createElement('div');
            dayDiv.classList.add('itinerary-day');
            dayDiv.appendChild(dayHeader);
            dayDiv.appendChild(activitiesList);

            resultsDiv.appendChild(dayDiv);
        }

        // Update map center based on destination (replace with real geocoding)
        updateMap(destination);

        // Scroll to results section after generating itinerary
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Function to update map based on destination (replace with real geocoding)
    function updateMap(destination) {
        // Simulate geocoding (replace with real geocoding API call)
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: destination }, function(results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: destination
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
});
