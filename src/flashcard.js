import { readFile } from './util';

export async function readFromFile(file) {
  const text = await readFile(file);
  const data = JSON.parse(text);
  return data;
}

export function isCorrectDe(card, guess) {
  return card.de === guess;
}

export function isCorrectEn(card, guess) {
  return card.en === guess;
}

export function randomCard(cards) {
  const index = Math.trunc(Math.random() * cards.length);
  return cards[index];
}