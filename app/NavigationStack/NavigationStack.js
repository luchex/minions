class NavigationStack {

    constructor() {

    }

    findShortestPath(startCoordinates, grid) {
        const distanceFromTop = startCoordinates[0];
        const distanceFromLeft = startCoordinates[0];
        const location = {
            distanceFromTop: distanceFromTop,
            distanceFromLeft: distanceFromLeft,
            path: [],
            status: 'Start'
        };

        const queue = [location];

        while (queue.length > 0) {
            const currentLocation = queue.shift();
            const directions = ["Up", "Right", "Down", "Left"];
            for (let dir in directions) {
                const newLocation = NavigationStack.exploreInDirection(currentLocation, directions[dir], grid);
                if (newLocation.status === 'Goal') {
                    return newLocation.path;
                } else if (newLocation.status === 'Valid') {
                    queue.push(newLocation);
                }
            }
        }
        return false;
    }

    static locationStatus(location, grid) {
        const gridSize = grid.length;
        const dft = location.distanceFromTop;
        const dfl = location.distanceFromLeft;

        if (location.distanceFromLeft < 0 ||
            location.distanceFromLeft >= gridSize ||
            location.distanceFromTop < 0 ||
            location.distanceFromTop >= gridSize) {
            return 'Invalid';
        } else if (grid[dft][dfl] === 'End') {
            return 'End';
        } else if (grid[dft][dfl] !== 'Empty') {
            return 'Blocked';
        } else {
            return 'Valid';
        }
    }

    static exploreInDirection(currentLocation, direction, grid) {
        const newPath = currentLocation.path.slice();
        newPath.push(direction);
        let dft = currentLocation.distanceFromTop;
        let dfl = currentLocation.distanceFromLeft;

        if (direction === 'Up') {
            dft -= 1;
        } else if (direction === 'Right') {
            dfl += 1;
        } else if (direction === 'Down') {
            dft += 1;
        } else if (direction === 'Left') {
            dfl -= 1;
        }
        const newLocation = {
            distanceFromTop: dft,
            distanceFromLeft: dfl,
            path: newPath,
            status: 'Unknown'
        };
        newLocation.status = NavigationStack.locationStatus(newLocation, grid);
        if (newLocation.status === 'Valid') {
            grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
        }
        return newLocation;
    }
}
module.exports = NavigationStack;
