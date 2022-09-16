import Image from 'next/image'
import React from 'react'
import Fateh from "/public/fateh.jpg"
import { motion } from "framer-motion";
import { urlFor } from '../sanity'
import {
    staggerTextContainer,
    fadeInRight,

    fadeInDown,

} from '../variants';

function About({ skills }) {

    return (
        <div className='px-7 md:px-10 py-16' id='about'>
            <div className='main-title'>
                <h2>About <span>Me</span></h2>
            </div>

            <motion.div
                variants={staggerTextContainer}
                initial='initial'
                whileInView={'animate'}
                viewport={{ once: true, amount: 0.4 }}
                className='w-full mt-5  mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-12 justify-center  shadow-[0_0px_90px_-10px_rgba(0,0,0,0.3)] p-3 pt-10 rounded-xl '>
                <div
                    className='w-2/4 mx-auto relative sm:w-1/3 md:w-[250px] my-5 sm:my-10 rounded-md  '>
                    <Image src={Fateh} alt="" className='z-[2] mx-auto rounded-full ' />
                    <motion.div
                        whileInView={{ top: "-1.5rem", left: "1.5rem", opacity: 1 }}
                        transition={{ duration: .5, delay: 1.5 }}
                        className='w-full h-full absolute top-0 left-0  z-[1] rounded-full bg-blue-500'></motion.div>
                </div>
                <motion.div
                    variants={fadeInDown}
                    className='sm:w-2/3 md:w-1/2 sm:pt-3  text-lg md:text-xl font-semibold text-[#1E283C]'>
                    <p>
                        Hello world ,i am Mohamed El Fateh ,a computer science student  who is very passionate  about web development. With a rich experience , i have acquired the skills and knowledge necessary to make your website  attractive and help you to grow your business. <br />
                        I believe that if the website is fast, easy to use, beautiful, accessible to all, and frustration-free, regardless of your specific business requirements, will give you a great chance of finding success online, and i will work to solve these challenges for you!! </p>
                    <div
                        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                        className='relative group animate-bounce w-fit mt-10 mb-14 sm:mb-0 px-8 py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#3981F1] cursor-pointer hover:text-white transition-all duration-200 text-xl'>MORE
                        <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                    </div>
                </motion.div>
            </motion.div>
            <div id='skills' className='main-title '>
                <h2>My <span>Skills</span></h2>
            </div>
            <p className='my-4 text-center text-xl'>Check some of my skills </p>
            <motion.div
                variants={staggerTextContainer}
                initial='initial'
                whileInView={'animate'}
                viewport={{ once: true, amount: 0.2 }}
                className='mt-10  flex gap-10 flex-wrap items-center justify-center'>
                {skills.map((skill, i) => {
                    return (<motion.div
                        className={`flex items-center gap-4 justify-between px-2 rounded-xl group h-14 w-72 bg-[#eee]  `}
                        variants={fadeInRight}
                        key={skill.name}
                    >
                        <div className={`h-10 w-10  border-none`}>
                            <img className='w-full h-full  group-hover:scale-110 duration-200 ease-in ' src={urlFor(skill.icon)} alt={skill.name} />
                        </div>
                        <p className={` font-bold duration-200 ease-linear uppercase `}>{skill.name}</p>
                    </motion.div>)
                })}
            </motion.div>
        </div>
    )
}

export default About


