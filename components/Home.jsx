import React from 'react'
import { motion } from 'framer-motion'

function Home() {
    return (
        <div id='home' className='min-h-screen flex  items-center  px-7 md:px  bg-home bg-cover bg-right  xl:bg-center bg-no-repeat relative'>
            <div className='overlay '></div>
            <motion.div
                initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2, type: 'spring' }}
                className='w-full z-[2]'>
                <p className='text-blue-500 text-md'>Hi my name is </p>

                <h3 className=' text-xl md:text-4xl lg:text-6xl lg:leading-loose  font-bold my-4 leading-loose md:leading-loose text-white'>
                    Mohamed El Fateh <br />
                    <span
                        className=' text-gray-400'>My superpower? Building Websites
                    </span>
                </h3>
                <div
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className='relative group animate-bounce w-fit mt-10 px-8 py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#3981F1] cursor-pointer font-semibold hover:text-white transition-all duration-200 text-xl'>MORE
                    <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                </div>
            </motion.div>
        </div>
    )
}




export default Home
