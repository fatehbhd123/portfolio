import Image from 'next/image'
import React from 'react'
import Fateh from "../assets/images/fateh.jpg"
import { motion } from "framer-motion";
import { urlFor } from '../sanity'
import {
    staggerAccordionContainer,
    fadeInRight,
    staggerTextContainer,
    fadeInDown,
    fadeInUp
} from '../variants';

function About({ skills }) {

    return (
        <div className=' px-7 md:px-10 py-16' id='about'>
            <div className='main-title'>
                <h2>About <span>Me</span></h2>
            </div>

            <motion.div
                variants={staggerTextContainer}
                initial='initial'
                whileInView={'animate'}
                viewport={{ once: false, amount: 0.6 }}
                className='w-full mt-5 mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-12 justify-center  shadow-[0_0px_90px_-10px_rgba(0,0,0,0.3)] p-3 pt-10 rounded-xl '>
                <motion.div
                    variants={fadeInDown}
                    className='w-2/4 mx-auto relative sm:w-[250px] my-5 sm:my-10 rounded-md  '>
                    <Image src={Fateh} alt="" className='z-[2] mx-auto rounded-full ' />
                    <motion.div
                        whileInView={{ top: "-1.5rem", left: "1.5rem", opacity: 1 }}
                        transition={{ duration: .5, delay: 1.5 }}
                        className='w-full h-full absolute top-0 left-0  z-[1] rounded-full bg-blue-500'></motion.div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    className=' sm:w-1/2 sm:pt-3  text-lg sm:text-xl font-semibold text-[#1E283C]'>
                    <p>
                        Hello world ,i am Mohamed El Fateh ,a computer science student  who is very passionate  about web development. With a rich experience , i have acquired the skills and knowledge necessary to make your website  attractive and help you to grow your business. <br />  I enjoy every step of the design process, from discussion and collaboration to concept and execution, but i find the most satisfaction when we see the final product work as we discussed.
                    </p>
                    <div
                        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                        className='relative group animate-bounce w-fit mt-10 mb-14 sm:mb-0 px-8 py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#3981F1] cursor-pointer hover:text-white transition-all duration-200 text-xl'>MORE
                        <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                    </div>
                </motion.div>
            </motion.div>

            <div id='skills' className='main-title pt-[100px]'>
                <h2>My <span>Skills</span></h2>
            </div>
            <p className='my-4 text-center text-xl'>Check some of my skills </p>
            <motion.div
                variants={staggerAccordionContainer}
                initial='initial'
                whileInView={'animate'}
                viewport={{ once: false, amount: 0.4 }}
                className='mt-10  flex gap-10 flex-wrap items-center justify-center'>
                {skills.map((skill, i) => {
                    return (<motion.div className={`pt-4 flex flex-col items-center opacity-0   duration-200 ease-in drop-shadow-md hover:drop-shadow-2xl rounded-xl group h-36 w-36 bg-[#edeeef]`}
                        variants={fadeInRight}
                        key={skill.name}
                    >
                        <div className={`h-20 w-20 mx-auto border-none`}>
                            <img className='w-full h-full  group-hover:scale-110 duration-200 ease-in rounded-full' src={urlFor(skill.icon)} alt={skill.name} />
                        </div>
                        <p className={`mt-4 font-bold duration-200 ease-linear uppercase `}>{skill.name}</p>
                    </motion.div>)
                })}
            </motion.div>
        </div>
    )
}

export default About


