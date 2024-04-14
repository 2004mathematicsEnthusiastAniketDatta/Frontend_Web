var User = /** @class */ (function () {
    function User(email, name) {
        this.city = 'Kolkata';
        this.email = email;
        this.name = name;
    }
    return User;
}());
var user = new User('<EMAIL>', '<NAME>');
console.log(user.email); // <EMAIL>
console.log(user.city); // Kolkata
// user.city = 'Mumbai'; // Error: Cannot assign to 'city' because it is a read-only property.
console.log(user);
// function twoSum(nums, target) {
//     console.log(nums.filter((num) , (nums.map(function (currentval, indexvalue, nums) { return (currentval + nums[indexvalue]); }) == target)));
// };
// twoSum([1,2,3],3);