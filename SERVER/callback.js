//exactlty or basic callback function/method

console.log("first")

function login(cb){
    setTimeout(() => {
        console.log("login")
        cb() //callback parameter
    },2000)
}

function userDetails(cb){
    setTimeout(() => {
        console.log("user details")
        cb()
    },1000)
}

function password(cb){
    setTimeout(() => {
        console.log("password") // we dont use cb or callback here beacuse its the last function in case if we will add cb in the last function it will make our computer confused
    },3000)
}

//callback hell

login(()=>{
    userDetails(()=>{
        password()
    })
})

console.log("END")