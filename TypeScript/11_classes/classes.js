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
