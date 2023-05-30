

const db = require('./db')

//define logic to resolve register requset 
const register =(uname,email,pswd)=>{
   return db.User.findOne({
      email
    }).then((result)=>{
      console.log(result);
  
  if(result){
      return{
          statusCode:401,
          message:"user already exist"
      }
  }
  
  else{
      const newUser = new db.User({
          uname,
          email,
          pswd
          
      })
      //to store data in mongodb
      newUser.save()
      //send response to index.js
      return{
          statusCode:200,
          message:"Register successfully"
      }
   }
    })
  }


  const login =(uname,pswd)=>{
    //to check uname & pswd is avalible in db
    return db.User.findOne({
        uname,
        pswd
    }).then((result)=>{
        // console.log(result);
        //user exist
        if(result){
            return{
                statusCode:200,
                message:"login successfull",
                //sending loginned username to frontend
                 currentUname:result.uname
                //sending loginned pswd to front end
//                 currentPswd:pswd
            }
        }
        else{
            return{
                statusCode:404,
                message:"Invalid Username/password"
            }
        }
    })
}

  module.exports = {
    register,
    login
  }