const input = document.getElementById("input-area");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("character-count");

const countWord = () => {
    const text = input.value;

    wordCount.textContent = (() => {
        return text.split(/\s+/).filter(word => word.length > 0).length;
    })();

    charCount.textContent = (() => {
        return text.replace(/\s/g, ' ').length;
    })();
};

input.addEventListener("input", countWord);