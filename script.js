document.getElementById("processBtn").addEventListener("click", function () {
    const textarea = document.getElementById("inputTextarea");
    const text = textarea.value;

    // Extract words inside quotes
    const matches = text.match(/"([^"]*)"/g);

    // Check if any matches are found
    if (matches) {
        const result = matches.map(match => match.replace(/"/g, '')).join(' ');
        textarea.value = result;
    } else {
        // No matches found, keep the original text
        textarea.value = text;
    }
});