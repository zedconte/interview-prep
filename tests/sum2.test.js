//import {sum2} from '../sum2.js';
const twoSum = require('../sum2');

test("Returns Sum2 [2,7,11,15]", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});
test("Returns Sum2 [3,2,4]", () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});