import round1TechQuestions from '../data/round1TechQuestions.json';
import round1NonTechQuestions from '../data/round1NonTechQuestions.json';
import { obfuscateString } from './obfuscate';

const HISTORY_KEY_TECH = 'lost_treasure_question_history_tech';
const HISTORY_KEY_NONTECH = 'lost_treasure_question_history_nontech';

/**
 * Gets a question randomly from the selected category bank ('tech' or 'non-tech'),
 * avoiding questions that were already used until all questions in that bank have been cycled through.
 * Automatically obfuscates the password so plain text is not visible in storage or memory.
 */
export function getNextQuestion(category = 'tech') {
  const isNonTech = category === 'non-tech';
  const pool = isNonTech ? round1NonTechQuestions : round1TechQuestions;
  const historyKey = isNonTech ? HISTORY_KEY_NONTECH : HISTORY_KEY_TECH;

  let usedIds = [];
  try {
    const raw = localStorage.getItem(historyKey);
    if (raw) {
      usedIds = JSON.parse(raw);
      if (!Array.isArray(usedIds)) usedIds = [];
    }
  } catch (e) {
    usedIds = [];
  }

  // Filter available questions in this category pool
  let available = pool.filter(q => !usedIds.includes(q.id));

  // If all questions in this category pool have been used, reset the cycle
  if (available.length === 0) {
    usedIds = [];
    available = [...pool];
  }

  // Pick random question from available pool
  const randomIndex = Math.floor(Math.random() * available.length);
  const selectedQuestion = available[randomIndex];

  // Record in history
  try {
    usedIds.push(selectedQuestion.id);
    localStorage.setItem(historyKey, JSON.stringify(usedIds));
  } catch (e) {
    console.error('Failed to update question history:', e);
  }

  // Return obfuscated question object so plain text password is not exposed in localStorage or state
  const secureQuestion = {
    id: selectedQuestion.id,
    clues: selectedQuestion.clues,
    encryptedPassword: obfuscateString(selectedQuestion.password)
  };

  return secureQuestion;
}

/**
 * Resets question history for both categories
 */
export function resetQuestionHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY_TECH);
    localStorage.removeItem(HISTORY_KEY_NONTECH);
  } catch (e) {
    // Ignore
  }
}
