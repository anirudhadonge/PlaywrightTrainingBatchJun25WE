

//fun is next action i want to execute in Synchronus way.
 function fun1(fun){
    setTimeout(()=>{
    console.log("Start")
    fun()
    },3000)
}

function fun2(fun){
setTimeout(()=>{
    console.log("End")
    fun();
},1000)
}

function fun3(){
  setTimeout(()=>{
    console.log("Third Function")
},2000) 
}
// things were getting complicated using this Call Back Hell.
// fun1(()=>{
//     fun2(()=>{
//         fun3()
//     })
// })
/// fun1 gets trigger but we dont wait for fun1 to complete its execution
// fun2();/// fun2 directly without wait for fun1