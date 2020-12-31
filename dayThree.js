const fs = require('fs')
const data = fs.readFileSync('three.txt', 'utf8')

class coordinate {
    constructor(x, y, gifts) {
        if (arguments.length === 0) {
            this.x = 0;
            this.y = 0;
            this.gifts = 0;
        } else if (arguments.length === 1) {
            this.x = 0;
            this.y = 0;
            this.gifts = x; // the only value is stored in the x position
        } else if (arguments.length === 2) {
            this.x = x;
            this.y = y;
            this.gifts = 0;
        } else {
            this.x = x;
            this.y = y;
            this.gifts = gifts;
        }
    }

    equals(object) {
        if (this === object) return true;
        if (object === null || typeof this !== typeof object) return false;
        return this.x === object.x && this.y === object.y;
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }

    setY(y) {
        this.y = y;
    }

    getY() {
        return this.Y;
    }

    setGifts(gifts) {
        this.gifts = gifts;
    }

    getGifts() {
        return this.gifts;
    }
}

let houses = new Set;
houses.add(new coordinate(1))

//part 1
// let x = 0, y = 0;

let santaX = 0, santaY = 0;
let robotX = 0, robotY = 0;
let santaExists = false, robotExists = false;
for (let i = 0; i < data.length; i++) {
    santaExists = false;
    robotExists = false;
    if (i % 2 === 0) {
        if (data.charAt(i) === '^') {
            santaY++;
        } else if (data.charAt(i) === '>') {
            santaX++;
        } else if (data.charAt(i) === 'v') {
            santaY--;
        } else if (data.charAt(i) === '<') {
            santaX--;
        }
        for (let item of houses) {
            if (item.equals(new coordinate(santaX, santaY))) {
                item.setGifts(item.getGifts() + 1)
                santaExists = true;
            }
        }
        if (!santaExists)
            houses.add(new coordinate(santaX, santaY, 1))
    } else {
        if (data.charAt(i) === '^') {
            robotY++;
        } else if (data.charAt(i) === '>') {
            robotX++;
        } else if (data.charAt(i) === 'v') {
            robotY--;
        } else if (data.charAt(i) === '<') {
            robotX--;
        }

        for (let item of houses) {
            if (item.equals(new coordinate(robotX, robotY))) {
                item.setGifts(item.getGifts() + 1)
                robotExists = true;
            }
        }
        if (!robotExists)
            houses.add(new coordinate(robotX, robotY))
    }

    //part 1
    // if (data.charAt(i) === '^') {
    //     y++;
    // } else if (data.charAt(i) === '>') {
    //     x++;
    // } else if (data.charAt(i) === 'v') {
    //     y--;
    // } else if (data.charAt(i) === '<') {
    //     x--;
    // }
    // for (let item of houses) {
    //     if (item.equals(new coordinate(x, y))) {
    //         item.setGifts(item.getGifts() + 1)
    //         exists = true;
    //     }
    // }
    // if (!exists)
    //     houses.add(new coordinate(x, y, 1))
}
console.log(houses.size)