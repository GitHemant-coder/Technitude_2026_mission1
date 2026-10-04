// ============================================================================
// TECHNITUDE 2026 — QUESTION BANK (MISSION 1)
// ============================================================================
import round1TechQuestions from './round1TechQuestions';
import round1NonTechQuestions from './round1NonTechQuestions';

export { round1TechQuestions } from './round1TechQuestions';
export { round1NonTechQuestions } from './round1NonTechQuestions';

// Legacy exports for backwards compatibility
export const techQuestions = round1TechQuestions;
export const nonTechQuestions = round1NonTechQuestions;
export const questions = [...round1TechQuestions, ...round1NonTechQuestions];

export default questions;