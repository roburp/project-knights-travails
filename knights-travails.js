import { Node } from "./node.js";

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

export function knightMoves(origin, destination) {
  if (!Array.isArray(origin) || !Array.isArray(destination) || origin.length !== 2 || destination.length !== 2) {
    throw new Error("Argument must be an array with 2 elements.");
  }

  if (
    origin.some((coord) => coord < 0 || coord > 7 || !Number.isInteger(coord)) ||
    destination.some((coord) => coord < 0 || coord > 7 || !Number.isInteger(coord))
  ) {
    throw new Error("Array elements must be integers from 0-7.");
  }

  if (origin[0] === destination[0] && origin[1] === destination[1]) {
    return [origin];
  }

  const root = new Node(origin, null);
  let queue = [root];
  let visited = [root.position];
  let result = [];

  while (queue.length > 0) {
    let curNode = queue.shift();
    let curPos = curNode.position;

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

      const node = new Node(newPos, curNode);

      if (newPos[0] === destination[0] && newPos[1] === destination[1]) {
        let tmp = node;

        while (tmp !== null) {
          result.push(tmp.position);
          tmp = tmp.parent;
        }
        return result.reverse();
      }

      visited.push(newPos);
      queue.push(node);
    }
  }
}
