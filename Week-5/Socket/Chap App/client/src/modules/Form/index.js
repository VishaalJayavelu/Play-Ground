import { useNavigate } from "react-router-dom"
import Button from "../../components/buttons"
import Input from "../../components/input"
import { useState } from "react"

const Form = ({isSignInPage= true}) => {
     const [data, setData] = useState({
          ...(!isSignInPage && {
              fullName: ''
          }),
          email: '',
          password: ''
      })
      const navigate = useNavigate()
      const handelSubmit= (e)=>{
          e.preventDefault()
          console.log(data)
     }
     return (
          <div className='bg-primary h-screen flex justify-center items-center'>
               <div className=' bg-light w-[680px] h-[800px] shadow-lg flex flex-col justify-center items-center rounded-2xl'>
                    <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
                    <div className='text-xl mb-6'>{isSignInPage ? "Sign in to get explore":"Sign Up now to get started"}</div>
                    
                    <form className="w-[300px] justify-center items-center" onSubmit={(e)=>handelSubmit(e)}>
                         {!isSignInPage && <Input label="Full Name" name="name" placeholder="Enter your name.." className="mb-6" value={data.fullName} onChange={(e)=>{setData({...data,fullName:e.target.value})}}/>   }
                         <Input label="Email Address" type="email" name="email" placeholder="Enter your email address.." className="mb-6" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>   
                         <Input label="Password" name="password" type="password" placeholder="Enter your name.." className="mb-6" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>   
                         <Button  type='submit' label={isSignInPage ? "Sign In" : "Sign Up"} className="mb-3"/>
                         
                    </form>
                    <div className="text-center">{isSignInPage ? 'Does not have an account?' : 'Already have an account?' } 
                         <span className="text-center text-primary cursor-pointer underline" onClick={()=>navigate(`/user/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>
                              {isSignInPage ? 'Sign Up': 'Sign In'}
                         </span>
                    </div> 
               </div>
          </div>
     )
}

export default Form