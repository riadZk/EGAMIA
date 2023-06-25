import React,{useState} from "react"
import axios from "axios";
import Footer from "./Footer";


function Joined(){
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coach, setCoach] = useState('');
    
const url = "./images/wave-haikei.png";

    const handSubmit = (e)=>{
        e.preventDefault();
        if(lastName === "" || firstName === "" || email === "" || phone === "" || coach === "" ){
            return alert('error')
        }else{
            const url = 'http://localhost/projet/joind.php';
            let fData = new FormData();
            fData.append('nom', lastName);
            fData.append('prenom', firstName);
            fData.append('email', email);
            fData.append('mobile', phone);
            fData.append('coach', coach);
            axios.post(url, fData)
            .then(response=> alert(response.data))
            .catch(error=> alert(error))
        }
    }
    return(
      <div id='Join' className='lg:h-[170vh] md:h-[100vh] h-[150vh] pb-5  bg-cover bg-center bg-repeat bg-fixe pt-10  ' style={{
        backgroundImage: `url(${url})`,
      }}>
     <form >
     <div  className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-momo 
                  font-bold title-font mb-4 text-gray-100">
              Joind
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
                    Last name
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300  text-base
                      outline-none text-gray-700 mt-2 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                   First Name
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300  text-base 
                     outline-none text-gray-700 mt-2 py-1 px-3 leading-8 transition-colors 
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
                    Email
                  </label>
                  <input
                    type="Email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300  text-base 
                     outline-none text-gray-700 py-1 mt-2 px-3 leading-8 transition-colors 
                     duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    className="w-full bg-gray-100 rounded border
                     border-gray-300  text-base 
                     outline-none text-gray-700 mt-2 py-1 px-3 leading-8 transition-colors 
                     duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mt-5">
                        <label className=" text-gray-600">select coach</label>
                        <select 
                                value={coach}
                                onChange={e => setCoach(e.target.value)}
                                name="coach"
                                className="bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" className="text-gray-600">select</option>
                                <option value="HABBAT" className="text-gray-600">HABBAT</option>
                                <option value="MEHDI" className="text-gray-600">MEHDI</option>
                                <option value="SABER" className="text-gray-600" >SABER</option>
                        </select>
                </div>
              </div>
              <div className="p-2 w-full">
                <button  
                onClick={handSubmit}
                type="submit"
                 className="flex mx-auto
                 text-navg font-bold bg-gray-100 border-0 
                 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  Button
                </button>
              </div>
              
            </div>
          </div>
        </div>
     </form>
     <Footer />
    </div>
    )
}
export default Joined