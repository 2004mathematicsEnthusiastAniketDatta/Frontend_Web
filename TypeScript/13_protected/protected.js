"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseContent = 1;
        this._courseContent = 1;
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("deleteToken");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseContent() {
        return this._courseContent;
    }
    set courseContent(courseValue) {
        if (courseValue <= 1) {
            throw new Error("Course Count should be more than one");
        }
        this._courseContent = courseValue;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseContent = 4;
    }
}
const user = new User("user@gmail.com", "user");
