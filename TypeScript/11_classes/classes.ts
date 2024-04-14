class User {
    email: string;
    name: string;
    readonly city: string = 'Kolkata';
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const user = new User('<EMAIL>', '<NAME>');
console.log(user.email); // <EMAIL>
console.log(user.city); // Kolkata
// user.city = 'Mumbai'; // Error: Cannot assign to 'city' because it is a read-only property.
console.log(user);

// function twoSum(nums: number[], target: number): number[] {

//     console.log(nums.filter((num),(nums.map(function(currentval,indexvalue,nums){return (currentval + nums[indexvalue])}) == target)));
       
    
//     };
