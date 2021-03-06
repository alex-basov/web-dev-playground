const numberInput = document.querySelector('#numberInput');
const resultDisplay = document.querySelector('#resultDisplay');
resultDisplay.style.color = '#cecece';

numberInput.addEventListener('change', function() {
  resultDisplay.textContent = script(Number(this.value));
  resultDisplay.style.color = 'red';
});

function script(input) {
  if (typeof input !== 'number') return NaN;
  else if (input % 5 === 0 && input % 3 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  else return input;
}
