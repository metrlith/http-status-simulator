import './styles.css';

import { httpStatusCodes } from './data/httpStatusCodes.js';

const app = document.getElementById('app');

function createCodeCard(codeObj) {
  const card = document.createElement('div');
  card.className = 'code-card';

  card.innerHTML = `
    <h2>${codeObj.code} - ${codeObj.message}</h2>
    <p>${codeObj.description}</p>
  `;

  return card;
}

function render() {
  httpStatusCodes.forEach(code => {
    const card = createCodeCard(code);
    app.appendChild(card);
  });
}

render();