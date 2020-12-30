const fs = require('fs');
const readline = require("readline");
let total = 0;

const readInterface = readline.createInterface({
    input: fs.createReadStream('two.txt'),
});

//part 1
// readInterface.on('line', function (line) {
//     let nums = line.split('x');
//
//     total += ((2 * nums[0] * nums[1]) + (2 * nums[0] * nums[2]) + (2 * nums[2] * nums[1]) + lowestSide(nums));
//     console.log(total)
// })

readInterface.on('line', function (line) {
    let nums = line.split('x');
    for (let i = 0; i < nums.length; i++)
        nums[i] = parseInt(nums[i])
    total += lowestPerimeter(nums) + (nums[0] * nums[1] * nums[2]);
    console.log(total);
});

function lowestSide(nums) {
    let lowest = nums[0] * nums[1];
    if (nums[0] * nums[2] < lowest)
        lowest = nums[0] * nums[2];
    if (nums[1] * nums[2] < lowest)
        lowest = nums[1] * nums[2];
    return lowest;
}

function lowestPerimeter(nums) {
    let lowest = 2 * (nums[0] + nums[1]);
    if (2 * (nums[0] + nums[2]) < lowest)
        lowest = 2 * (nums[0] + nums[2]);
    if (2 * (nums[2] + nums[1]) < lowest)
        lowest = 2 * (nums[2] + nums[1]);
    return lowest;
}


