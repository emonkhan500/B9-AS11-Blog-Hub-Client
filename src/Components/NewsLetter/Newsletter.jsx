import { toast } from "react-toastify";
import img from "../../assets/Group 61.png";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleToast=(e)=>{
        e.preventDefault();
        const email=e.target.email.value
        if(email){
            toast.success('Thank you for subscribing to our newsletter!!')
            setEmail("");
        }


     }
     const handleChange = (e) => {
        setEmail(e.target.value);
      }
  return (
    <div className=" text-center px-1 md:px-8 lg:px-28 mt-10 ">
      <div className=" border-t-2 border-green-600 rounded-sm ">
        <img className="h-44 w-36 pt-10 mx-auto" src={img} alt="" />
        <h1 className="mt-5 text-3xl text-green-600 font-bold">Subscribe Newsletter</h1>
        <p className="mt-3 mb-6">
          Subscribe to the  newsletter and stay updated on the project
          progress, events, and latest news on <br /> Website
        </p>
        <div >
         <form onSubmit={handleToast} className="pb-10 md:pb-20">
         <input  className="bg-gray-200   rounded-s-xl py-3 px-5 md:px-8"  placeholder="user@gmail.com" 
          value={email}
              onChange={handleChange}
              name="email" required />
          <input className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 rounded-e-xl
               py-3" type="submit" id="id2" />
         </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
