document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const eventList = document.getElementById('event-list-items');
    const createEventSection = document.getElementById('event-creation');
    const eventListSection = document.getElementById('event-list');
    const createEventNav = document.getElementById('create-event-nav');
    const upcomingEventsNav = document.getElementById('upcoming-events-nav');
    const themeToggle = document.getElementById('theme-toggle');

    createEventNav.addEventListener('click', () => {
        window.location.hash = 'event-creation';
        createEventSection.style.display = 'block';
        eventListSection.style.display = 'none';
    });

    upcomingEventsNav.addEventListener('click', () => {
        window.location.hash = 'event-list';
        createEventSection.style.display = 'none';
        eventListSection.style.display = 'block';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventHost = document.getElementById('event-host').value;
        const eventDate = document.getElementById('event-date').value;
        const eventHour = document.getElementById('event-hour').value;
        const eventMinute = document.getElementById('event-minute').value;
        const eventAMPM = document.querySelector('input[name="ampm"]:checked').value;
        const eventLocation = document.getElementById('event-location').value;

        const li = document.createElement('li');
        li.innerHTML = `<strong>${eventName}</strong><br>Host: ${eventHost}<br>Date: ${eventDate}<br>Time: ${eventHour}:${eventMinute} ${eventAMPM}<br>Location: ${eventLocation}`;

        eventList.appendChild(li);

        form.reset();
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    flatpickr("#event-date", {
        dateFormat: "Y-m-d",
        minDate: "2000-01-01",
        maxDate: "2069-12-31",
    });
});
