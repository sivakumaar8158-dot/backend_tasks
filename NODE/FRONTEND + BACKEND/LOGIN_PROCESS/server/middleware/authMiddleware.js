import jwt from 'jsonwebtoken'
export const verifyUserData = (req,res,next)=>{


   const token = req.headers.authorization

   if(!token){
      return res.status(404).json({msg:"Your Not a Valid user go out"})
   }


try {


   const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
   

   //console.log(decode);
   
   req.jwtuser = decode

   next()

} catch (error) {

  return res.status(404).json({msg:"Not Valid Use Try again"})
   //console.log('error',error);
   
   
}



}