'use strict';

const NavigationStack = require('./NavigationStack/NavigationStack');

let navigationStack = new NavigationStack();

    let gridSize = 4;
    let grid = [];
    for (let i = 0; i <= gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = 'Empty';
        }
    }

    grid[0][0] = "Start";
    grid[2][2] = "End";
    grid[1][1] = "Obstacle";
    grid[2][1] = "Obstacle";
    grid[3][1] = "Obstacle";
    grid[1][2] = "Obstacle";

console.log(navigationStack.findShortestPath([0,0], grid));