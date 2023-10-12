const ApiError = require("../error/ApiError")

const getForm=(req,res)=>{
     console.log(req.body)
     res.status(200).send("vijhbvjk")
}
const postForm=(req,res,next)=>{
     const msg = req.body
     
     if(isEmpty(msg)){
          next(ApiError.badRequest('field is required'))
          return
     }

     if(!isEmpty(msg.id)) return res.status(200).send("//created")
     else {
          next({}) 
          return
     }
}

function isEmpty(obj) {
     if (obj == null) return true;
     if (obj == undefined) return true;
     if (obj.length && obj.length > 0) return false;
     if (obj.length === 0)  return true;
     for (var key in obj) {
         if (hasOwnProperty.call(obj, key)) return false;
     }
  
     return true;
 }

module.exports = {getForm,postForm} 