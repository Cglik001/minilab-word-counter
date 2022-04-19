const textArea = document.getElementById('text-area');
const button = document.getElementById('btnCount');
const allWords = document.getElementById('word-count-total');

button.addEventListener('click', () => {
  if (textArea.value.length !== 0) {
    wordCount = textArea.value.split(" ").length;
    allWords.innerText = `${wordCount}`;
  }
});
