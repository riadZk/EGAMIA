import React , {useState} from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
// import {AiFillGithub ,AiFillTwitterCircle ,AiFillInstagram} from 'react-icons/ai'
// import {ImLinkedin} from 'react-icons/im'
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

 function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const url ='./images/wave-haikei.png'

  const navigate = useNavigate()
  const handleSubmit = () => {
    if(email.length === 0){
     alert("Error");
   }
   else if(name.length === 0){
     alert("Error");
   }
   else if(phone.length === 0){
    alert("Error");
  }
  else if(message.length === 0){
    alert("Error");
  }
   else{
     const url = 'http://localhost/projet/message.php';
     let fData = new FormData();
     fData.append('name', name);
     fData.append('phone', phone);
     fData.append('email', email);
     fData.append('message', message);
     axios.post(url, fData)
     .then(response=> alert(response.data))
     .catch(error=> alert(error))
      navigate('/')
    }
  }
  return (
    <div id='navbar' className='lg:h-[170vh] md:h-[100vh] h-[150vh]  bg-cover bg-center bg-repeat bg-fixe pt-10  ' style={{
      backgroundImage: `url(${url})`,
    }}>
        <Link to={'/'} className=" text-white"> 
            <BsArrowLeftCircleFill className="ml-10 " size={"20px"} />
      </Link>
      <section  className="text-gray-400 body-font mb-10 relative ">
        <div  className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-momo 
                  font-bold title-font mb-4 text-gray-100">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300 focus:border-indigo-500 text-base
                      outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300 focus:border-indigo-500 text-base 
                     outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                     duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="phone"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300 focus:border-indigo-500 text-base 
                     outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                     duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    className="w-full bg-gray-100 rounded border 
                    border-gray-300 focus:border-indigo-500 h-32 text-base 
                    outline-none text-gray-700 py-1 px-3 resize-none leading-6
                     transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button  onClick={handleSubmit}
                 className="flex mx-auto
                 text-navg font-bold bg-gray-100 border-0 
                 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  Button
                </button>
              </div>
              
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    </div>
  );
}
export default Contact