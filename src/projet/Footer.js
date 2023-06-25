import React from 'react'
import { BsFacebook  } from "react-icons/bs";
import {AiFillGithub ,AiFillTwitterCircle ,AiFillInstagram} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'

const Footer = () => {
  return (
    <div >
      <section id='navbar' className=" bg-transparent pt-[-0px] md:pt-2 lg:pt-[100px]  ">
    <div className="max-w-screen-xl  mx-auto space-y-8  overflow-hidden sm:px-6 lg:px-8 ">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Blog
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Team
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Contact
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
                <a href='https://web.facebook.com/?_rdc=1&_rdr'><BsFacebook size={'20px'} className="text-gray-500 hover:scale-125 hover:text-white cursor-pointer" /></a>
                <AiFillGithub size={'20px'} className=" text-gray-500 hover:scale-125 hover:text-white cursor-pointer" />
                <ImLinkedin size={'20px'} className=" text-gray-500 hover:scale-125 hover:text-white cursor-pointer"  />
                <AiFillTwitterCircle size={'20px'} className=" text-gray-500 hover:scale-125 hover:text-white cursor-pointer" />
                <AiFillInstagram  size={'20px'} className="text-gray-500 hover:scale-125 hover:text-white cursor-pointer " />
        </div>
        <p className=" text-base leading-6 text-center text-gray-400">
            © 2023 fitness owen, Inc. All rights reserved.
        </p>
    </div>
</section>
    </div>
  )
}

export default Footer
