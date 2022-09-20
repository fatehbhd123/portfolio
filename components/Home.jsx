import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.8,
        }
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
            when: "beforeChildren",
        }
    },
};
const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

function Home() {
    return (
        <div id='home' className='min-h-screen flex  items-center  px-7 md:px   bg-cover bg-right  xl:bg-center bg-fixed bg-no-repeat relative '>
            <div className='overlay '></div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='w-full z-[2]'>
                <motion.p
                    variants={childVariants} className='text-blue-500 text-md'>Hi my name is
                </motion.p>
                <motion.h3
                    variants={childVariants} className=' text-xl md:text-4xl lg:text-6xl lg:leading-loose  font-bold my-4 leading-loose md:leading-loose text-white'>
                    Mohamed El Fateh <br />
                </motion.h3>
                <motion.span
                    variants={childVariants} className=' text-xl md:text-4xl lg:text-6xl lg:leading-loose  font-bold my-4 leading-loose md:leading-loose text-gray-400'>My superpower? Building Websites
                </motion.span>
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
