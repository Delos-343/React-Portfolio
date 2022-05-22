import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>
                  <span className='text-pink-600'>Hello there,</span>
                  <br />
                  nice to meet you.
                  <br /><br />
                  <span className='text-xl'>
                    Kindly take a look around.
                  </span>
                </p>
            </div>
            <div>
              <p>
                I am very passionate about building excellent software that improves
                the lives of those around me.
                <br /><br />
                I specialize in creating web and mobile applications for clients ranging from
                individuals and small-businesses to large enterprise-scale business magnates.
              </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
