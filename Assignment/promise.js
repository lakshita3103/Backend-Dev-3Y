function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login")
            resolve()
        },2000)
    })
}

function userDetails(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user details")
            resolve()
        },2000)
    })
}

function password(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("password")
        },3000)
    })
}

//callback promise -> then keyword is used to handle promise
/*login()
.then(() => {
    return userDetails();
})
.then(() => {
    return password();
})
.then(() => {
    console.log("END")
}).catch((error) => {
    console.log("Error")
})*/

//aysnc funtion -> await keyword is used to handle promise
async function run(){
    await login();
    await userDetails();
    await password();
    console.log("END async/await")
}