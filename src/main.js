// ESM syntax is supported.

import { readFromFile, randomCard, isCorrectEn, isCorrectDe } from './flashcard';
import { input } from './util';

async function main() {
  const original = await readFromFile('./cards.json');
  let cards = [...original];

  let total = 0;
  let correct = 0;

  // English
  console.log('GERMAN -> ENGLISH');
  while (cards.length > 0) {
    total++;
    const card = randomCard(cards);
    const ans = await input(`${card.de}: `);
    const isCorrect = isCorrectEn(card, ans);
    if (isCorrect) {
      console.log('Correct!');
      correct++;
    } else {
      console.log(`Incorrect. The correct answer was "${card.en}".`);
    }
    cards = cards.filter(item => item != card);
  }

  // German
  console.log('ENGLISH -> GERMAN');
  cards = [...original];
  while (cards.length > 0) {
    total++;
    const card = randomCard(cards);
    const ans = await input(`${card.en}: `);
    const isCorrect = isCorrectDe(card, ans);
    if (isCorrect) {
      console.log('Correct!');
      correct++;
    } else {
      console.log(`Incorrect. The correct answer was "${card.de}".`);
    }
    cards = cards.filter(item => item != card);
  }

  console.log(`Score: ${(correct / total) * 100}%`);
}

main();
