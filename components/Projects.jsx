import React from 'react'
import { urlFor } from '../sanity'
import { motion } from "framer-motion";
import {
    staggerTextContainer,
    fadeInRight,
} from '../variants';

const openInNewTab = url => {
    window.open(url, '_blank');
};


function Projects({ projects }) {
    return (
        <div id='projects' className=' px-7 md:px-10 '>
            <div className='main-title pt-[60px]'>
                <h2>My <span>projects</span></h2>
            </div>
            <p className='text-center pt-3 font-medium'>Check out some of my work here!</p>
            {projects && <motion.div
                variants={staggerTextContainer}
                initial='initial'
                whileInView={'animate'}
                viewport={{ once: true, amount: 0 }}
                className='flex gap-x-8 gap-y-14 flex-wrap items-center md:justify-start justify-center  mt-10'>
                {projects.map((project, i) => {
                    const { usedSkills } = project;
                    return (
                        <motion.div
                            className='bg-[#1E283C] group shadow-gray-900 shadow-2xl rounded-lg  sm:w-[380px] overflow-hidden'
                            variants={fadeInRight}
                            whileHover={{
                                scale: 1.1,
                            }}
                            transition={{ duration: .3 }}
                            key={i}
                        >
                            <div className='relative h-40 overflow-hidden'>
                                <img src={urlFor(project.imgUrl)} alt="project" className='w-full h-full ' />
                                <div className='flex justify-evenly items-center px-2  absolute h-full translate-y-[-100%] group-hover:translate-y-0 overlay w-full top-0 left-0 duration-300'>
                                    <div
                                        onClick={() => {
                                            openInNewTab(project.codeLink)
                                        }}
                                        className='px-3 py-2 text-sm font-semibold text-black bg-white rounded-xl hover:text-white hover:bg-blue-500 duration-200 ease-in cursor-pointer' >
                                        CODE
                                    </div>
                                    <div onClick={() => {
                                        openInNewTab(project.projectLink)
                                    }} className='px-3 py-2 text-sm font-semibold text-black bg-white rounded-xl hover:text-white hover:bg-blue-500 duration-200 ease-in cursor-pointer' >
                                        DEMO
                                    </div>
                                </div>
                            </div>
                            <div className='p-3'>
                                <h3 className='font-semibold text-white group-hover:text-blue-500 duration-200 ease-in '>{project.title}</h3>
                                <div className='flex gap-2 mt-2'>
                                    {usedSkills.map((e, i) => {
                                        return (
                                            <div key={i}
                                                className='text-white text-sm bg-[#0E1628] px-4 py-2 w-fit rounded-lg'>
                                                {e}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>}
        </div>
    )
}

export default Projects
