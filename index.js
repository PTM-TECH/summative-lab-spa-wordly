const form = document.querySelector("#searchForm");
const wordInput = document.querySelector("#wordInput");
const results = document.querySelector("#results");

// Fetch word data from the Free Dictionary API
async function fetchWord(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const data = await response.json();
    displayWordData(data[0]);
  } catch (error) {
    results.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Display the fetched data dynamically on the display
function displayWordData(wordData) {
  const word = wordData.word;
  const pronunciation = wordData.phonetics?.[0]?.text || "N/A";
  const audioSrc = wordData.phonetics?.[0]?.audio || "";
  const definitions = wordData.meanings
    .map((meaning) => {
      const partOfSpeech = meaning.partOfSpeech;
      const defText = meaning.definitions
        .map(
          (def, i) =>
            `<li>${def.definition}${
              def.example ? ` <em>(Example: ${def.example})</em>` : ""
            }</li>`
        )
        .join("");
      return `<div class="result-definition"><strong>${partOfSpeech}</strong><ul>${defText}</ul></div>`;
    })
    .join("");

  const synonyms = wordData.meanings.flatMap((meaning) =>
    meaning.definitions.flatMap((def) => def.synonyms || [])
  );
  const synonymsText = synonyms.length
    ? synonyms.join(", ")
    : "No synonyms available";

  results.innerHTML = `
    <div class="result-word">${word}</div>
    <div class="result-pronunciation">Pronunciation: ${pronunciation}</div>
    ${
      audioSrc
        ? `<button class="audio-button" onclick="playAudio('${audioSrc}')">🔊 Listen</button>`
        : ""
    }
    ${definitions}
    <div class="result-synonyms"><strong>Synonyms:</strong> ${synonymsText}</div>
  `;
}

// Play audio pronunciation
function playAudio(src) {
  const audio = new Audio(src);
  audio.play();
}

// Add event listener for form submission and prevent browser's default behaviour
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (word) {
    results.innerHTML = "<p>Loading...</p>";
    fetchWord(word);
  }
});
