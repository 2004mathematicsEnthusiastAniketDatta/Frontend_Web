class User {
    
    private _courseContent = 1;

    readonly city: string = "Jaipur";
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }
    private deleteToken(){
        console.log("deleteToken")
    }
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courseContent(): number {
        return this._courseContent;
    }
     set courseContent(courseValue) {
        if (courseValue <= 1){
            throw new Error("Course Count should be more than one")
        }
        this._courseContent = courseValue;
    }
}
const  user = new User("user@gmail.com", "user");

console.log(user);