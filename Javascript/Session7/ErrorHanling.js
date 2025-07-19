/**
 * 
 * An error is a problem that occurs during the exeuction of program.
 * the way we handel error is by using few keyword
 * try and catch and finally
 * throw
 * error object
 *  - name
 *  - message
 *  - stack
 */

/**
 * running query in db.
 * first create a db connection
 * run the query.
 * close connection
*/





// console.log(divide(5));
// console.log("Next line of code");

// throw keyword is used for sending meaning full error message

function divide(n){
   // Open the connection
    try{
    // Run the query
     let a = n1/5;
     return a;
    }catch(err){
       throw err;
    }finally{
        console.log("this is a finally block")
    }

}

function fun1(n){
    try{
    divide(n);
    }catch(err){
        console.log("Error thrown from function1 "+err);
    }
}

fun1(3);

