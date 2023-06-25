import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import axios from "axios"
function Sign () {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = () => {
           if(email.length === 0){
            alert("Error");
          }
          else if(password.length === 0){
            alert("Error");
          }
          else{
            const url = 'http://localhost/projet/projet.php';
            let fData = new FormData();
            fData.append('email', email);
            fData.append('password', password);
            axios.post(url, fData)
            .then(response=> alert(response.data))
            .catch(error=> alert(error))
             if(email==="Administrateur@gmail.com"){
                navigate('/tables')
             }
             else if(email==="admin@gmail.com"){
                navigate('/Admin')
             }
             else{
                navigate('/')
             }
          
      }}
    return (
        <div className=' h-screen  bg-black'>
              <div id='navbar' className="relative  flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700  ">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='email'
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='email'
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-gray-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button onClick={handleSubmit} className="w-full px-4
                         py-2 tracking-wide text-white 
                         transition-colors duration-200
                          transform bg-ray-700 rounded-md
                           bg-gray-600 focus:outline-none
                            focus:bg-gray-400
                            hover:bg-slate-800">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-gray-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
        </div>
        )
      }
export default Sign
