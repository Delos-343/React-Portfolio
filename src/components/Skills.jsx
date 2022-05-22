import React from 'react'
import NextJS from '../assets/next-js.png'
import Tailwind from '../assets/tailwind-css.svg'
import ReactLogo from '../assets/react.svg'
import Flutter from '../assets/flutter.svg'
import Figma from '../assets/figma.svg'
import Sass from '../assets/Sass.svg'
import Firebase from '../assets/firebase.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>My Skills</p>
              <p className='py-5'>My Tech Stack &amp; Tools</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-20 mx-auto' src={NextJS} alt="NEXT icon" />
                  <p className='my-3'>NEXT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-3'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                  <p className='my-3'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-14 mx-auto' src={Flutter} alt="Flutter icon" />
                  <p className='my-3'>FLUTTER</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-14 mx-auto' src={Figma} alt="Figma icon" />
                  <p className='my-3'>FIGMA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-28 mx-auto' src={Sass} alt="Sass icon" />
                  <p className='my-3'>SASS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                  <img className='w-20 mx-auto' src={Firebase} alt="Firebase icon" />
                  <p className='my-3'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills
