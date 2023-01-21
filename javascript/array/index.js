const nums = [1, 2, 3, 4, 5];

// An array is an ordered collection of values
// insert/remove at end O(1)
// insert/remove at start O(n)  because the index has to be reset for every element in the array
// push/pop O(1)
// shift/unshift/concat/slice/splice O(n)
// forEach/map/filter/reduce O(n)

console.log(nums, nums.length);
console.log(nums[nums.length - 1]);
console.log(nums[nums.length]);

// insert at end
console.log(nums.push(6));
console.log((nums[nums.length] = 7));
console.log(nums, nums.length);

// remove at end
console.log(nums.pop());
console.log(nums, nums.length);

// inset at start
console.log(nums.unshift(0));
console.log(nums, nums.length);

// remove at start
console.log(nums.shift());
console.log(nums, nums.length);

// using delete method only remove the value of the index
console.log(delete nums[nums.length - 1]);
console.log(nums, nums.length);
console.log((nums[nums.length - 1] = 6));
console.log(nums, nums.length);
