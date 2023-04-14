const twoSum = require('../sum2-map');

test("Returns Sum2 Map [2,7,11,15]", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([1,0]);
});
test("Returns Sum2 Map [3,2,4]", () => {
    expect(twoSum([3,2,4], 6)).toEqual([2,1]);
});