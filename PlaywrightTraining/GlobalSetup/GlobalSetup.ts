import dotenv from 'dotenv'

export default function SetEnvironmentVariables(){
    console.log("---------------------------------------------------------------");
    console.log(process.env.NODE_ENV);
    console.log(process.env);
    console.log("---------------------------------------------------------------");
    dotenv.config({
        path:"./ENV/."+process.env.NODE_ENV+".env", // ./.dev.env
        override:true
    })
    console.log("---------------------------------------------------------------");
    console.log(process.env);
    console.log("---------------------------------------------------------------");
}
