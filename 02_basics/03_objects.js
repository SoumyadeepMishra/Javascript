// singleton

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "soumyadeep",
    age: 20,
    location: "kharagpur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]);

JsUser.greetings = function()
{
    console.log("hello js User");
}

console.log(JsUser.greetings());

JsUser.greetingsTwo = function()
{
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetingsTwo());