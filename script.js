// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('itinerary-form');
    const resultsDiv = document.getElementById('itinerary-results');

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

        // Scroll to results section after generating itinerary
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
