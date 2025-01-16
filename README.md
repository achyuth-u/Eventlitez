# EventLitez

## Files and Their Functionalities

### `index.html`

The `index.html` file provides the main structure of the site, including navigation, event creation form, and event listing section.

### `styles.css`

The `styles.css` file defines the layout, design, and theme styles, including light and dark mode.

### `script.js`

The `script.js` file handles the functionality for form submissions, theme toggling, and date picking using Flatpickr.

## Usage

### Creating an Event

1. Fill out the event creation form with the following details:
   - **Event Name**
   - **Host**
   - **Date** (using the functional calendar)
   - **Time** (using AM/PM format)
   - **Location**

2. Click **"Add Event"** to add the event to the list.

### Viewing Upcoming Events

- Click **"Upcoming Events"** in the navigation bar to view the list of events.

### Switching Themes

- Use the theme toggle button (🌙/☀️) in the top-right corner to switch between light and dark modes.

## Customization

### Event Creation Form

- **Event Name** and **Host** fields are included.
- **Date** input with a functional calendar.
- **Time** input fields only accept numbers, with dedicated AM and PM switches.
- **Location** field.

### Light/Dark Mode

- Toggle button positioned on the side of the page.
- Changes text and button colors based on the selected theme.

## Dependencies

- **Flatpickr**: A lightweight and powerful date picker library used for selecting event dates.
