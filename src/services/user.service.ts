import pool from "../config/db"

const login = `select * from users where username=? AND password =MD5(?)`;

const Login =async (user_name:string,password:string)=>{
       try{
        const [result] =await pool.query(login,[user_name,password])
        return result;
       } catch(e){

       }       
}
export default{
  Login,             
}