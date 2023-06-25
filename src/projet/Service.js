import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Coach from './Coach';
import Joined from './Joind';
function Service() {


  useEffect(() => {
    Aos.init({
      duration: 3000
    });
  }, [])
  const images = [
    {
      url: './images/les-bonne.jpeg',
    },
    {
      url: './images/training-g943f67190_1920.jpg',
    },
    {
      url: './images/fit.jpg',
    },
    {
      url: './images/femme-gym3.jpg',
    },
    {
      url: './images/man-gym.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div id='Service' className=' bg-black h-max'>
      <div className=' z-10'>
        <div id='navbar'  className='container font-serif font-bold pb-3  text-white pt-10'>
          <h1 className=' text-3xl font-momo font-bold text-white'>Not sure where to start </h1>
          <p className='pt-4 text-gray-500'>
          Programs offre day-to-day guidance on an interactive calendar to keep you can on track.
          </p>
        </div>
        <div className='container grid grid-cols-1 md:grid-cols-2 md:pl-12 lg:grid-cols-4 gap-4' >
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-right" >
          <img src='./images/workout.jpg'  className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white font-serif font-bold pb-3'>Workout Vedios</h5>
            <div className=' text-gray-500'>
              Acces to hundreds of free.
              full-length workout vedios.
            </div>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-right" >
            <img src='./images/programme.jpg'  className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white font-serif font-bold pb-3'>Workout programs</h5>
            <div className=' text-gray-500'>
              Affordable and effective
              Workout programs.
            </div>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-left" >
          <img src='./images/robat.jpg' className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white  font-serif font-bold pb-3'>Meal Plans</h5>
            <div className=' text-gray-500'>
              Plans built with registerd
              dietitians and nutritioninsts.
            </div>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-left" >
  
          <img src='./images/all.jpg' className='h-36 w-52 mb-4'></img>
  
            <h5 className=' text-white font-serif font-bold pb-3'>Wo Plus ALL ACCESS</h5>
            <div className=' text-gray-500'>
              Add powerful features to
              your membership.
            </div>
          </div>
        </div>
        <div className='container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 text-white'>
          <div data-aos="fade-left">
            <h1 className='mt-12 pt-1 text-2xl md:text-3xl font-serif font-bold pb-14'>Work out fitness owen</h1>
            <p className=' text-slate-400 font-serif pb-5 '>
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of professional
              workouts, healthy recipes and informative articles, as well as one of
              the most positive communities on the web, you'll have everything you
              need to reach your personal fitness goals!
            </p>
              <a href='#' className=' text-[#5e32f2] font-bold bg-white px-6 py-2 rounded-md'> Read more  </a>
          </div>
          <div data-carousel="slide" className='w-[390px] text h-[400px] md:w-[600px] md:h-[400px] lg:w-[440px] lg:h-[450px] pr-20  m-auto py-20 px-8 md:py-16 md:px-4 relative group' data-aos="fade-right">
            <img
  
              src={images[currentIndex].url}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
              data-carousel-item
            />
            <div className='hidden group-hover:block absolute
                         top-[50%] -translate-x-0 translate-y-[-50%] 
                         left-10 md:left-8  text-2xl rounded-full p-2 bg-black/20
                          text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] 
             -translate-x-0 translate-y-[-50%] md:right-5 right-20 text-2xl 
             rounded-full p-2 bg-black/20 text-white cursor-pointer mr-2'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
              {images.map((slide, slideIndex) => (<div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl text-gray-200 cursor-pointer'
              >
                <RxDotFilled />
              </div>))}      
            </div>
          </div>
  
        </div>
        <Coach />
         <div className='container mt-10 text-white'>
          <h1 className=' font-bold text-3xl font-momo'>latest training</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' >
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-right" >
          <img src='./images/port.jpg'  className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white font-serif font-bold pb-3'>running</h5>
            <div className=' text-gray-500 '>
            Running fitness refers to the level of physical fitness and ability to perform activities related to running.
            </div>
            <button className='bg-white mt-10 hover:bg-slate-200 w-28 text-black rounded-md font-bold h-10'>Red More</button>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-right" >
            <img src='./images/jeune.jpg'  className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white font-serif font-bold pb-3'>lifting</h5>
            <div className=' text-gray-500'>
            It is important to approach lifting fitness with proper form and
             technique to avoid injury and maximize results
            </div>
            <button className='bg-white mt-10 hover:bg-slate-200 w-28 text-black rounded-md font-bold h-10'>Red More</button>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-left" >
          <img src='./images/yoga.jpg' className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white  font-serif font-bold pb-3'>yoga</h5>
            <div className=' text-gray-500'>
            Yoga is a physical, mental, and spiritual practice that originated
            in ancient India. It involves a combination of physical postures,
            </div>
            <button className='bg-white mt-5 hover:bg-slate-200 w-28 text-black rounded-md font-bold h-10'>Red More</button>
          </div>
          <div className=' bg-transparent rounded-md px-3 py-6 mt-10' data-aos="fade-left" >
          <img src='./images/workout.jpg' className='h-36 w-52 mb-4'></img>
            <h5 className=' text-white  font-serif font-bold pb-3'>calisthenics workout</h5>
            <div className=' text-gray-500'>
            Calisthenics workout refers to a form of exercise that uses body weight resistance to build strength, endurance, and flexibility
            </div>
            <button className='bg-white mt-5 hover:bg-slate-200 w-28 text-black rounded-md font-bold h-10'>Red More</button>
          </div>
        </div> 
  </div>
        </div>
        <Joined/>
</div>
   )
}
export default Service