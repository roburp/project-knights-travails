import { knightMoves } from "./knights-travails.js";

const path = knightMoves([3, 3], [4, 3]);

console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);

for (let i = 0; i < path.length; i++) {
  console.log(path[i]);
}
