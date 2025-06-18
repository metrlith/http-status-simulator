let currentScenarioId = 'intro';
const seenScenarios = new Set();

export function getCurrentScenarioId() {
  return currentScenarioId;
}

export function setCurrentScenarioId(id) {
  currentScenarioId = id;
}

export function markScenarioSeen(id) {
  seenScenarios.add(id);
}

export function hasSeenScenario(id) {
  return seenScenarios.has(id);
}