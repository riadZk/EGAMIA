import React, { useState  } from 'react'
import { useNavigate , Link  } from 'react-router-dom';
import {  Link as ScrollLink } from 'react-scroll';


const Nav = () => {    

     let [open,setOpen]=useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const navigate = useNavigate()
      function scrollValue() {
        const navbar = document.getElementById('navbar');
        const scroll = window.scrollY;
        if (scroll < 200) {
            navbar.classList.remove('BgColour');
        } else {
            navbar.classList.add('BgColour');
        }
    }
    window.addEventListener('scroll', scrollValue);
     const handleModeChange = (e) => {
      setDarkMode(
        e.target.checked
      )
    }

  return (
<div className={darkMode && "dark"}>
         <div className= ' w-96 md:w-full z-10 fixed top-0 left-0 bg-transparent font-serif font-bold' >
           <div id='navbar' className='md:flex items-center justify-between text-white   py-4 md:px-10 px-7 '>
           <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
           text-white '>
             <img src='./images/Group.png' width={"30px"} />
             <ScrollLink to="home"  className=' font-mono font-bold pl-3'>FITNESS OWEN</ScrollLink>
           </div>
           <div onClick={()=>setOpen(!open)} className='
           md:text-5xl text-3xl  text-white absolute right-8 md:right-32 md:mb-10 pr-2 top-4 cursor-pointer lg:hidden'>
           <ion-icon name={open ? 'close':'menu'}></ion-icon>
           </div>
           <ul className={`lg:flex nav-links lg:items-center lg:pb-0 pt-9 lg:pt-0 pb-12 absolute lg:static 
                          bg-navg lg:bg-transparent lg:z-auto z-[-1] left-0 w-full font-mono
                          lg:w-auto h-[400px] md:pt-24  lg:h-auto pl-9 transition-all duration-500 ease-in
                          ${open ? '-bottom-[330px]':'top-[-490px]'}`}>
             <li className="list md:mb-5 lg:mb-0 "><ScrollLink to='home' spy={true} smooth={true} offset={50} duration={500}  className='text-white md:text-2xl lg:text-lg hover:text-gray-400 duration-500 cursor-pointer' >Home</ScrollLink></li>
             <li className='list md:mb-5 lg:mb-0'><ScrollLink to="Service" spy={true} smooth={true} offset={50} duration={500} className='text-white md:text-2xl lg:text-lg hover:text-gray-400 duration-500 cursor-pointer' >service</ScrollLink></li>
             <li className='list md:mb-5 lg:mb-0'><ScrollLink to="Join" spy={true} smooth={true} offset={50} duration={500}  className='text-white md:text-2xl lg:text-lg hover:text-gray-400 duration-500 cursor-pointer' >Join</ScrollLink></li>
             <li className='list md:mb-5 lg:mb-0'><Link to="/Contact" className='text-white md:text-2xl  lg:text-lg hover:text-gray-400 duration-500' >Contact</Link></li>
             <button 
             onClick={()=>navigate('Sign')} 
             className='bg-white text-black font-[Poppins] 
                             py-1 px-6 rounded md:ml-8 hover:bg-navg
                              hover:text-white  dark:bg-navg
                              dark:text-white
                               duration-500 hover:shadow-md  hover:shadow-black'>
           SIGN IN
         </button>
         {/* <label className=" ml-2 border-gray-700 bg-gray-100 dark:bg-darkbg cursor-pointer relative w-12  h-6 rounded-full">
               <input type="checkbox" className="sr-only peer" onChange={handleModeChange} />
               <span className="w-2/5 h-4/5 dark:bg-slate-100 bg-darkbg absolute rounded-full left-1 top-[2.5px] peer-checked:left-6 transition-all duration-500">
               </span>
        </label> */}
           </ul>
           </div>
         </div>
</div>
  )
}

export default Nav
