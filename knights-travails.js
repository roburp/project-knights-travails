const moves = [
  [1, 2],
  [-1, 2],
  [-2, 1],
  [2, 1],
  [-2, -1],
  [2, -1],
  [-1, -2],
  [1, -2],
];

function knightMoves(origin, destination) {
  let visited = [origin];
  let queue = [origin];

  if (!Array.isArray(origin) || !Array.isArray(destination) || origin.length !== 2 || destination.length !== 2) {
    throw new Error("Argument must be an array with 2 elements.");
  }

  if (
    origin.some((coord) => coord < 0 || coord > 7 || !Number.isInteger(coord)) ||
    destination.some((coord) => coord < 0 || coord > 7 || !Number.isInteger(coord))
  ) {
    throw new Error("Array elements must be integers from 0-7.");
  }

  while (queue.length > 0) {
    let curPos = queue.shift();

    for (let i = 0; i < moves.length; i++) {
      let alreadyVisited = false;

      let newPos = [curPos[0] + moves[i][0], curPos[1] + moves[i][1]];

      if (newPos[0] > 7 || newPos[0] < 0 || newPos[1] > 7 || newPos[1] < 0) {
        continue;
      }

      for (let j = 0; j < visited.length; j++) {
        if (visited[j][0] === newPos[0] && visited[j][1] === newPos[1]) {
          alreadyVisited = true;
          break;
        }
      }
      if (alreadyVisited) {
        continue;
      }

      visited.push(newPos);
      queue.push(newPos);

      if (newPos[0] === destination[0] && newPos[1] === destination[1]) {
      }
    }
  }
}
