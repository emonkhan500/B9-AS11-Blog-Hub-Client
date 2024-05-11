
import { useContext, useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    useEffect(()=>{
        document.title='Register'
    },[])

const {createUser,updateUserProfile}=useContext(AuthContext)
    const[show,setShow]=useState(false)
    const [registerError,setRegisterError]=useState('')
    const notify = () => toast("Registered Successful !!");

    const navigate=useNavigate()

const handleRegister=e=>{
    e.preventDefault()
    const name=e.target.username.value;
   const email=e.target.email.value;
   const photo=e.target.photo.value;
   const password=e.target.password.value;
   console.log(email,password,name,photo)

   setRegisterError(' ')

   if(password.length<5){
setRegisterError('Password must be more than Five character !!')
return
   }
   else if(!/[A-Z]/.test(password)){
    setRegisterError('Password must have One Capital letter!!')
    return
   }
else if(!/[a-z]/.test(password)){
setRegisterError('Password must have One Small letter!!')
return
}
createUser(email,password)
.then(result=>{
  console.log(result)
  notify()
  updateUserProfile(name,photo)
 // navigate
 .then(()=>{
     navigate('/')
 })
 
})
.catch(error=>{
setRegisterError(error)
})


}

    return (
        <div className=' flex justify-center mt-10 '>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800">
 <h1 className="text-2xl font-bold text-center">Register</h1>
 <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
     <div className="space-y-1 text-sm">
         <label htmlFor="username" className="block text-gray-600">Username</label>
         <input type="text" name="username" id="username" placeholder="Username" required className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
     </div>
     <div className="space-y-1 text-sm">
         <label htmlFor="email" className="block text-gray-600">Email</label>
         <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"  />
         
     </div>
     <div className="space-y-1 text-sm">
         <label htmlFor="Photo" className="block text-gray-600">Photo URL</label>
         <input type="text" required name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
         
     </div>
     <div className="space-y-1 text-sm">
         <label htmlFor="password" className="block text-gray-600">Password</label>
         <div className='flex items-center'>
             <input required className="w-full  px-4 py-3 rounded-md border-gray-300 grow bg-gray-50 text-gray-800 focus:border-violet-600" type={show? "text":"password"} name="password"  placeholder="Password" /> <span onClick={()=>setShow(!show)} className="ml-4 text-xl"> {show? <IoMdEyeOff />:<IoMdEye />}</span>
             </div>
         
         
     </div>
     {
         registerError &&  <p className='text-red-600 text-lg'>{registerError}</p>
     }
     <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
 </form>
 
 
 <p className="text-xs text-center sm:px-6 text-gray-600"> Have an account?
 <Link to='/login' className="underline text-gray-800">Login</Link>
     
 </p>
</div>

     </div>
    );
};

export default Register;