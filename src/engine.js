import { scenarios } from './scenarios.js';
import { getCurrentScenarioId, setCurrentScenarioId, markScenarioSeen } from './state.js';

const app = document.getElementById('app');

export function startGame() {
  const initial = getCurrentScenarioId();
  const scenario = scenarios.find(s => s.id === initial);
  renderScenario(scenario);
}

function renderScenario(scenario) {
  app.innerHTML = ''; // Clear UI

  const title = document.createElement('h2');
  title.textContent = scenario.title;

  const desc = document.createElement('p');
  desc.textContent = scenario.description;

  app.appendChild(title);
  app.appendChild(desc);

  markScenarioSeen(scenario.id);

  if (scenario.ending) {
  const endMsg = document.createElement('p');
  endMsg.style.fontWeight = 'bold';
  endMsg.textContent = `🏁 ${scenario.ending.message}`;
  app.appendChild(endMsg);

  const restartBtn = document.createElement('button');
  restartBtn.textContent = 'Restart';
  restartBtn.onclick = () => {
    setCurrentScenarioId('intro');  // or whatever your starting scenario id is
    const startScenario = scenarios.find(s => s.id === 'intro');
    renderScenario(startScenario);
  };
  app.appendChild(restartBtn);

  return;
}

  scenario.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice.text;
    btn.onclick = () => {
      setCurrentScenarioId(choice.next);
      const next = scenarios.find(s => s.id === choice.next);
      renderScenario(next);
    };
    app.appendChild(btn);
  });
}