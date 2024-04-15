var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        // private _courseContent = 1;
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
var Subuser = /** @class */ (function (_super) {
    __extends(Subuser, _super);
    function Subuser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    Subuser.prototype.changeCourseCount = function () {
        this._courseContent = 4;
    };
    return Subuser;
}(User));
var user = new User("user@gmail.com", "user");
