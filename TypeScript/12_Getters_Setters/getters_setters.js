var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseContent = 1;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    User.prototype.deleteToken = function () {
        console.log("deleteToken");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseContent", {
        get: function () {
            return this._courseContent;
        },
        set: function (courseValue) {
            if (courseValue <= 1) {
                throw new Error("Course Count should be more than one");
            }
            this._courseContent = courseValue;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("user@gmail.com", "user");
