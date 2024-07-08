function setUsername(username){
    this.username = username ;
}

function createuser(username,password,email) {
    setUsername(username)
    this.email = email;
    this.password = password;
}

const chai = new createuser("chai","@hitesh","123");
console.log(chai);