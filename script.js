document.addEventListener('DOMContentLoaded', generateAdvice);

function generateAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const adviceNumberElement = document.getElementById('advice-number');
      const adviceContentElement = document.getElementById('advice-content');

      adviceNumberElement.textContent = data.slip.id;
      adviceContentElement.textContent = data.slip.advice;
    })
    .catch(error => console.error('Error fetching advice:', error));
}
