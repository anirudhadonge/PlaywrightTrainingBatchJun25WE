/**
 * A promise is an object representing the eventual Completion or failure of an asynchronus operator
 * let <variableName> = new Promise((resolve,reject)=>{
 * async Operation.
 * })
 * Three state
 * Pending: Initial State 
 * Fulfilled : The operation is completed successfully
 * Rejected: The Operation fail
 */
let flag = true
 async function fun1(){
    return new Promise((resolve, reject)=>{setTimeout(()=>{
    console.log("Start")
    if(flag){
    resolve("Success")
    }else{
        reject("Failed");
    }
    },3000)
    })
}

async function fun2(){
return new Promise((resolve,reject)=>{setTimeout(()=>{
    console.log("End")
    resolve("success")
},1000)
})
}

async function fun3(){
return new Promise((resolve,reject)=>{setTimeout(()=>{
    console.log("This is the third function")
    resolve("success")
},2000)
})
}

// Chaining the promises 
// fun1().then((message)=>{
//     //console.log(message);
//     fun2().then((message)=>{
//         // console.log(message);
//         fun3().then((message)=>{
//             console.log(message);
//         })
//     })
// }).catch((message)=>{
//     console.log(message);
// })
//async - await go hand in hand.
// async function parentFunction(){
// await fun1()
// await fun2()
// await fun3()
// }

// parentFunction();


function fun1(){
    console.log("this is fun1");
}

function fun2(fun){
    console.log("this is fun2");
    fun();
}

fun2(()=>{
    fun1()
})