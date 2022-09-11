import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { staggerTextContainer, fadeInRight, fadeInLeft } from "../variants"
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"
import { SiFiverr, SiUpwork } from "react-icons/si"

function Contact() {
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const { username, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {

        const contact = {
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };
        const result = await fetch(`/api/sendMessage`, {
            body: JSON.stringify(contact),
            method: 'post'
        })
        const json = await result.json()
        console.log(json)
        return json;
    };
    const openInNewTab = url => {
        window.open(url, '_blank');
    };
    return (
        <motion.div id='contact' className=' mt-20 px-7 md:px-10 pt-16 '>
            <div className='main-title z-[2]'>
                <h2 className='z-[2]'>Contact <span className='z-[2]'>me</span></h2>
            </div>
            <p className='my-4 text-center text-xl'>I would love to help you ! </p>
            <div className='  '>
                <motion.form
                    variants={staggerTextContainer}
                    initial='initial'
                    whileInView={'animate'}
                    viewport={{ once: false, amount: 0.6 }}
                    className='flex z-[2] flex-col sm:flex-row pt-10'>
                    <motion.div
                        variants={fadeInRight}
                        className='flex flex-col gap-5 w-full sm:w-1/2 z-[2]'>
                        <input
                            onChange={handleChangeInput}
                            name='username'
                            value={username}
                            type="text"
                            placeholder='Your Name'
                            className='outline-none duration-200 p-3 w-2/3 mx-auto mb-1 bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg' />
                        <input
                            onChange={handleChangeInput}
                            value={email}
                            name='email'
                            type="text"
                            placeholder='Your Email'
                            className='outline-none duration-200 p-3 w-2/3 mx-auto mb-1 bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg' />
                        <textarea
                            onChange={handleChangeInput}
                            name="message"
                            value={message}
                            className='outline-none h-[140px] duration-200 p-3 w-2/3 mx-auto mb-1 bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg'
                            placeholder="Your Message"></textarea>
                        <div
                            onClick={handleSubmit}
                            className='z-[2] relative group animate-bounce w-2/3 mt-10 text-center py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#fff] cursor-pointer  transition-all duration-200 text-xl'>
                            Send
                            <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                        </div>
                    </motion.div >
                    <motion.div
                        variants={fadeInLeft}
                        className='z-[2]   w-full sm:w-1/2 my-8 sm:my-0 flex flex-col items-center'>
                        <div className='text-2xl sm:text-4xl font-bold text-[#1E283C]'>Or you can find me on:</div>
                        <div className='flex gap-10 mt-8'>
                            <div
                                onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100081117486445')}
                                className='hover:text-blue-500  p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                                <AiFillFacebook />
                            </div>
                            <div
                                onClick={() => openInNewTab('https://twitter.com/MeBhd')}
                                className='hover:text-blue-500  p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                                <AiOutlineTwitter />
                            </div>
                            <div
                                onClick={() => openInNewTab('https://www.linkedin.com/in/ben-elhadj-djelloul-mohamed-elfateh-b5215a226/')}
                                className='hover:text-blue-500  p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                                <AiFillLinkedin />
                            </div>
                            <div
                                onClick={() => openInNewTab('https://www.fiverr.com/fatehbhd?up_rollout=true')}
                                className='hover:text-blue-500  p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                                <SiFiverr />
                            </div>
                        </div>
                    </motion.div>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
