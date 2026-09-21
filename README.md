# Knights Travails

A JavaScript implementation of the **Knight's Travails** problem from [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

The program finds the **shortest path** a knight can take between two positions on a standard 8×8 chessboard.

## How It Works

The solution uses **Breadth-First Search (BFS)** to explore the board.

Each board position is represented by a `Node` containing:

- `position` — the knight's current `[x, y]` coordinates
- `parent` — the previous node in the path

A queue is used to process positions level by level. This guarantees that the first time the destination is reached, the path found is the shortest possible path.

Once the destination is found, the program follows the `parent` references back to the starting position and reverses the resulting array to produce the path in the correct order.

## Example

```js
knightMoves([3, 3], [4, 3]);
```

Output:

```text
You made it in 3 moves! Here's your path:
[ 3, 3 ]
[ 4, 5 ]
[ 2, 4 ]
[ 4, 3 ]
```

## Project Structure

```text
knights-travails/
├── knightMoves.js    # BFS algorithm
├── node.js           # Node class
├── main.js           # Runs the program and displays the result
└── README.md
```

## Features

- Finds the shortest knight's path between two positions
- Uses Breadth-First Search (BFS)
- Tracks visited positions to avoid unnecessary processing
- Uses parent nodes to reconstruct the final path
- Validates board coordinates
- Handles the case where the starting and destination positions are the same

## Concepts Practiced

This project reinforces several data structure and algorithm concepts:

- Graph traversal
- Breadth-First Search
- Queues
- Nodes and parent references
- Path reconstruction
- Visited-node tracking
- Classes and object references
- Coordinate-based graph representation

## Running the Project

Clone the repository and run the JavaScript file with Node.js:

```bash
node main.js
```

## Assignment

This project is part of **The Odin Project — JavaScript Course**, focusing on applying data structures and algorithms to solve a graph traversal problem.
