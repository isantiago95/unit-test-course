import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResults } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(e) {
  e.preventDefault();

  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResults(numberInputs);

  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
