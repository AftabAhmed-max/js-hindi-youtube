// const user = {
//     username : "Aftab",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// };

// console.log(user.username);
// user.getUserDetails();

// const promise1 = new Promise()
// const date = new Date()

function User(username, loginCount , isLoggedIn) {
    this.username = username; 
    this.loginCount = loginCount; 
    this.isLoggedIn = isLoggedIn;
    return this 
}