# Technical Documentation

## Overview

This project is a responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. It presents personal information, project showcases, an inspirational quote section, and a contact form in a clean and modern interface.

During this assignment, the website was expanded with more interactive functionality, including:
- external API integration for quotes
- project search, filtering, and sorting
- persistent dark/light theme state using `localStorage`
- responsive layout improvements

The project is designed to remain lightweight, easy to run locally, and easy to maintain without any external frameworks or build tools.

---

## Technologies Used

- **HTML5** for semantic page structure and accessible form elements
- **CSS3** for layout, theming, responsiveness, hover effects, and transitions
- **JavaScript** for application logic, DOM updates, state management, filtering, sorting, API fetching, and user feedback
- **DummyJSON Quotes API** for fetching and displaying random inspirational quotes

---

## File Structure

- `index.html` — main page structure and content
- `css/styles.css` — all styling, theme variables, layout, responsiveness, and component styles
- `js/script.js` — interactivity and application logic
- `assets/images/` — project images used in the Projects section
- `docs/ai-usage-report.md` — AI usage documentation
- `docs/technical-documentation.md` — technical summary of the project
- `README.md` — project description, setup instructions, and summary of AI use

---

## Application Features

### 1. Responsive Layout
The website is responsive and adapts to different screen sizes using:
- CSS Grid for project cards and control layouts
- Flexbox for header, navigation, footer, and action rows
- media queries for smaller screen adjustments

The Projects grid displays in two columns on larger screens and one column on smaller screens. The project controls also stack vertically on smaller devices for better usability.

### 2. Sticky Header and Navigation
The header remains visible while scrolling using `position: sticky`. Navigation links allow users to jump directly to:
- About
- Projects
- Quote
- Contact

Smooth scrolling is enabled through CSS to improve navigation experience.

### 3. Theme Toggle with State Persistence
The site includes a dark/light theme toggle button. The current theme is stored in `localStorage`, allowing the user’s preference to persist across page refreshes.

#### Theme logic:
- on page load, JavaScript checks `localStorage` for a saved theme
- if `"light"` is saved, the `light` class is added to the `body`
- when the toggle button is clicked, the theme changes and the new value is saved again

This feature demonstrates state management because the application stores user preference and restores it later.

### 4. Projects Section: Search, Filter, and Sort
The Projects section supports multiple interactive operations at the same time:
- live text search
- category filtering
- alphabetical sorting

Each project card includes custom `data-*` attributes such as:
- `data-title`
- `data-description`
- `data-category`

#### Search
The search input checks whether the typed text matches the project title or description.

#### Filter
The category dropdown allows users to filter projects by category such as:
- All
- Productivity
- Weather

#### Sort
The sort dropdown allows users to reorder matching projects by:
- Default Order
- Name A–Z
- Name Z–A

#### Combined logic
The application processes the Projects section in multiple steps:
1. read the search input
2. read the selected category
3. read the selected sort option
4. filter all project cards based on search and category rules
5. sort the filtered results
6. update the DOM order
7. highlight search matches
8. show a no-results message if nothing matches

This is one of the main examples of complex application logic in the project.

### 5. Search Highlighting
When a user types in the search field, matching words in project titles and descriptions are highlighted using the `<mark>` element.

The highlighting logic:
- escapes special characters in the search text
- creates a case-insensitive regular expression
- wraps matched text with `<mark>`

This improves usability by making matches easier to see.

### 6. Inspirational Quote API Integration
A Quote section was added to satisfy the API integration requirement. It loads a random inspirational quote from an external API and displays:
- the quote text
- the author name

A “New Quote” button allows the user to fetch another quote without refreshing the page.

#### API used
The project uses the DummyJSON quotes endpoint:
- random quote endpoint returning quote text and author data

#### Quote logic:
- show a loading message while the request is in progress
- send a `fetch()` request to the external API
- check whether the response is valid
- update the quote text and author in the DOM
- disable the button during loading
- show a user-friendly fallback message if the request fails

This feature demonstrates asynchronous JavaScript, API usage, DOM manipulation, and error handling.

### 7. Contact Form Feedback
The Contact section includes a form with:
- Name field
- Email field
- Message field

The form uses built-in HTML validation with `required` fields and `type="email"` for basic email validation.

On successful submission:
- the default form submission is prevented
- a success message is shown
- the form is reset

The current form is a frontend demo only and does not send real messages to a backend server.

### 8. Footer and Dynamic Year
The footer displays the current year dynamically using JavaScript. This avoids manually updating the copyright year.

---

## JavaScript Logic Summary

The main JavaScript file handles the following features:

### Footer Year
Automatically inserts the current year into the footer.

### Theme Management
Controls theme switching and stores the selected state in `localStorage`.

### Project Search, Filter, and Sort
Updates visible project cards based on:
- current search text
- selected category
- selected sorting rule

### Text Highlighting
Highlights matching search terms inside project titles and descriptions.

### Quote API Fetching
Loads random quotes asynchronously and handles both success and failure states.

### Contact Form Submission
Prevents default submission and shows user feedback for demo purposes.

---

## CSS Structure Summary

The stylesheet is organized into clear sections:
- theme variables
- global styles
- layout and container styles
- header and navigation
- buttons
- sections and headings
- cards and grid
- project images
- form styling
- project controls
- quote section
- footer
- responsive media queries

### Theme System
CSS custom properties are used to define:
- background colors
- panel colors
- text colors
- muted text
- accent color
- border
- shadow
- radius

The dark theme is defined in `:root`, and the light theme overrides are applied with `body.light`.

This makes theme switching efficient and easy to maintain.

---

## State Management

State management in this project is handled simply and effectively through `localStorage`.

### Implemented state:
- selected theme (dark/light)

The application:
- stores the user’s theme selection
- restores it when the page loads again
- keeps the interface consistent across sessions

This ensures the user experience remains reliable and personalized.

---

## Complex Logic

The strongest example of complex logic in the project is the Projects section.

The logic combines:
- text matching
- category conditions
- sorting rules
- DOM reordering
- conditional no-results display
- live search highlighting

Instead of performing a single action, the application evaluates multiple conditions together before deciding what to show and in what order.

---

## API Integration Details

### Feature Added
Inspirational Quote section

### Purpose
To connect the portfolio website to an external API and display dynamic content that changes during use.

### Request Flow
1. user opens the page or clicks “New Quote”
2. loading state is shown
3. app sends a request to the quote API
4. JSON response is parsed
5. quote text and author are displayed
6. if the request fails, a friendly error message is shown

### Error Handling
If the API request fails or returns invalid data, the application displays a user-friendly message instead of leaving the section empty.

Example fallback:
- “Sorry, the quote could not be loaded right now.”
- “Please try again later.”

---

## Performance Considerations

The project was kept lightweight for good performance:
- no frameworks or external JavaScript libraries were used
- HTML, CSS, and JavaScript are separated clearly into their own files
- reusable CSS classes reduce repetition
- JavaScript uses focused event listeners and reusable functions
- project images were optimized by converting them to WebP format for improved loading efficiency

Because the project is built with plain frontend technologies, it loads faster and is easier to run than projects that depend on package managers or build pipelines.

---

## Accessibility and Usability Notes

The website includes several usability improvements:
- semantic HTML structure using `header`, `main`, `section`, `footer`, `nav`, `article`, and `form`
- labels for form fields
- `aria-label` for important controls
- `aria-live="polite"` for dynamic status messages
- visible hover and focus styling
- clear feedback messages for search and form actions

These choices improve readability and make interaction clearer for users.

---

## Setup and Running Locally

This project does not require:
- `npm`
- `package.json`
- build tools
- frameworks

### To run locally:
1. download or clone the project
2. open it in VS Code or another editor
3. open `index.html` directly in a browser, or run it with Live Server

Using Live Server is recommended for easier testing and refreshing during development.

---

## Testing

The project was tested manually by:
- opening the website on desktop and smaller screen sizes
- using browser responsive/device tools
- testing theme persistence after refresh
- checking project search, filtering, sorting, and highlight behavior
- testing the no-results message
- testing quote loading and quote refresh button
- testing quote API failure handling
- testing contact form validation and submission feedback
- checking updated image paths after converting project images to WebP

---

## Limitations

- The contact form is a demo and does not send real emails
- The Projects section currently contains sample portfolio projects only
- The quote feature depends on the availability of the external API
- No backend or database is included
- State persistence is currently used only for the theme setting

---

## Conclusion

This portfolio project demonstrates core frontend web development skills using HTML, CSS, and JavaScript. It includes responsive design, state management, API integration, client-side validation, user feedback, and multi-step application logic. The final result is a lightweight and interactive portfolio website that satisfies the assignment requirements while remaining clean, readable, and easy to maintain.