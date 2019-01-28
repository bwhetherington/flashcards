import fs from 'fs';
import util from 'util';
import readline from 'readline';

export const readFile = util.promisify(fs.readFile);

export function input(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => rl.question(prompt, ans => {
    rl.close();
    resolve(ans);
  }));
}