import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Nav from './nav/Nav';
import Service from './Service';

function Home(props) {
  const imageURL = "./images/man-gym.jpg"
  const title = React.createRef();
  const para = React.createRef();

  useEffect(() => {
    gsap.to(title.current, { color: "#fff", duration: 3 })
    Aos.init({ duration: 3000 });
  }, [title, para]
  )
  return (
    <div id='home' >
      <Nav />
      
        <div className='h-[130vh] bg-cover bg-center bg-no-repeat bg-fixe ' style={{
          backgroundImage: `url(${imageURL})`,
        }}>
          <div className=' pt-72 md:pl-20 pl-0  '>
            <h3 ref={title} className=' md:text-5xl text-xl pl-2 font-bold font-serif pb-3 dark:text-white text-black'>
              BRING OUT YOUR BEST
              <span className='span text-gray-800 dark:text-white'> SHAPE</span>
            </h3>
            <p className='pt-10 text-gray-100 font-bold para text-sm md:text-lg pl-2 pb-12 ' >
              Our site strives to provide the best resources and tools <br />
              that will help you achieve your sporting goals.
            </p>
            <button className=" bg-white text-gray-700 font-serif font-bold
                            h-10 w-28 ml-2 md:h-10  md:w-32 rounded  hover:bg-navg
                             hover:text-white duration-500 shadow-md
                              shadow-black hover:shadow-sm hover:shadow-white
                              dark:bg-blak dark:text-white"
            >
              Get Started
            </button>
            <div className='flex gap-10 mt-10 ml-5 md:ml-0'>
              <div>
                <h3 className='text-2xl md:text-3xl font-serif font-bold text-gray-400  text-center'> 5+</h3>
                <span className='  text-sm md:text-lg text-white font-bold'>EXPERTS COACHES</span>
              </div>
              <div >
                <h3 className='text-2xl md:text-3xl font-serif font-bold text-gray-400  text-center'> 200+</h3>
                <span className=' text-sm md:text-lg text-white font-bold'>MEMBERS JOINED</span>
              </div>
            </div>
          </div>
        </div>

      <Service />
    </div>
  )
}
export default Home