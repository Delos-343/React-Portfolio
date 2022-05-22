import React from 'react'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#0a192f] text-center sm:text-left'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-semibold sm:text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Fachry
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] mt-10'>
                Frontend Developer
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I am a frontend developer specializing in building [and
                designing] exceptional digital experiences. Currently, I am focused on
                building responsive fullstack web applications and mobile UI designs.
            </p>
            <div className='m-0 justify-center items-center sm:my-10 sm:items-start'>
                <button className='text-white group border-2 px-6 py-3 mx-auto my-5 sm:my-3 sm:mx-0 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View My Work
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero