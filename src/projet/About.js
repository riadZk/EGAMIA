import React from 'react'

function About() {
    return (
        <div className='h-max bg-black text-white '>
            <div className='container'>
                <h1>ABOUT uS</h1>
                <p>Some may call it a tagline, but for us, it’s a way of life.
                    It’s our Monday-thru-every-day mantra. An unfiltered philosophy
                    that drives us to create a community and a gym for all.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-48 ml-9'>
                <div className='container mt-6'>
                    <h1 className='text-3xl font-momo font-bold'>Welcome to Our Family</h1>
                    <p className=' font-medium pt-11'>
                        There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way.

                        What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.
                        What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.
                    </p>
                </div>
                <div className='ml-20 '>
                    <img src='./images/femme-gym.jpg' className=' rounded-md '></img>
                </div>
            </div>
        </div>
    )
}

export default About
