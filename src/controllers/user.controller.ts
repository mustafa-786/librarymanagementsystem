import express, {Request,Response} from 'express';
import userService from '../services/user.service';

const Login  =async (req:Request,res:Response)=>{
       try{
       const {user_name,password}= req.body;
       const login =await userService.Login(user_name,password);

       if(!login){
         return res.status(404)
         .json({
         code:404,
         status:"fail",
         message:'Incorrect username or password'      
         })
      }
      return res.status(200)
         .json({
         code:200,
         status:"success",
         message:'Login Successfull'      
         })

       } catch(e){
         console.log(e)      
       }       
}

export default {
 Login,              
}