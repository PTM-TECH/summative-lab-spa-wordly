# Wordly Dictionary SPA

**Wordly** is an interactive Single Page Application (SPA) dictionary that allows users to search for words, view definitions, pronunciations, synonyms, and listen to audio pronunciations, all without refreshing the page. This project is built using **HTML, CSS, and JavaScript**, and integrates the **Free Dictionary API** for word lookup.

## Features

- Search for any English word.
- Display word pronunciation, part of speech, definitions, synonyms, and example usage.
- Play audio pronunciation if available.
- Dynamic single-page interface (no page reloads).
- Error handling for invalid words or API failures.
- Responsive and user-friendly design.

## Technologies Used

- **HTML** – Semantic markup for structure.
- **CSS** – Styling, layout, and responsive design.
- **JavaScript** – DOM manipulation, API fetch requests, and event handling.
- **Free Dictionary API** – Fetch word data including definitions, synonyms, and pronunciation.

## Project Structure

├─ index.html # Main HTML file
├─ index.css # CSS for layout and styling
└─ index.js # JavaScript for fetching and displaying word data

---

## Setup & Usage

1. Fork & Clone the repository:

fork & git clone 2. Open index.html in your web browser.

3. Type a word into the search bar and click Search.

4. View the results dynamically on the same page.

## How It Works

- The user enters a word in the search bar.

- JavaScript intercepts the form submission and calls the Free Dictionary API.

- The API returns word data, including definitions, pronunciation, synonyms, and examples.

- The app dynamically updates the DOM to display the information.

- If audio pronunciation exists, a Listen button appears to play the word.

- If the word is not found, an error message is displayed.

## Key JavaScript Functions

- fetchWord(word) – Fetches word data from the API.

- displayWordData(wordData) – Parses API response and updates the DOM.

- playAudio(src) – Plays audio pronunciation.

- Event listener on form submission to trigger search without page reload.

## Error Handling

- Displays an error if the word does not exist.

- Handles cases where pronunciation, synonyms, or examples are missing.

- Provides default messages like "N/A" when data is unavailable.

## Future Enhancements

- Save Favorites: Allow users to save and highlight favorite words locally.

- Dark Mode / Theme Switcher: Improve readability for night-time usage.

- History: Show recently searched words.

- Multiple Languages: Expand dictionary support beyond English.

## Author: Patrick Mutua
