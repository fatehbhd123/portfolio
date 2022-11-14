import React, { useState } from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai"
import { SiFiverr } from "react-icons/si"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const { username, email, message } = formData;
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [messageErr, setMessageErr] = useState(false)

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (!formData.username) {
            setNameErr(true)
        }
        if (!formData.email || !formData.email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setEmailErr(true)
        }
        if (!formData.message) {
            setMessageErr(true)
        }

        if (formData.username && formData.email && formData.email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            && formData.message) {
            toast("Sending  .  .  . !");
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
            setFormData({ username: '', email: '', message: '' })
            toast('Sent ! i will respond soon')
            return json;
        }


    };
    const openInNewTab = url => {
        window.open(url, '_blank');
    };
    return (
        <div id='contact' className=' mt-20 px-7 md:px-10 pt-16 '>
            <div className='main-title '>
                <h2 >Contact <span >me</span></h2>
            </div>
            <p className='my-2 md:my-4 text-center text-xl'>I would love to help you ! </p>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
            />
            <form
                className='flex  flex-col md:flex-row  md:pt-10'>
                <div
                    data-aos="fade-right"
                    data-aos-duration='1500' className='flex flex-col  w-full md:w-1/2 '>
                    <p className={`text-red-500 text-sm  duration-200 ease-in ${!nameErr ? 'opacity-0' : 'opacity-1'} mx-auto`}>This is required!</p>
                    <input
                        onChange={(e) => {
                            handleChangeInput(e)
                            setNameErr(false)
                        }}
                        name='username'
                        value={username}
                        type="text"
                        placeholder='Your Name'
                        className='outline-none duration-200 p-2 w-2/3 mx-auto  bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg' />
                    <p className={`text-red-500 text-sm  duration-200 ease-in ${!emailErr ? 'opacity-0' : 'opacity-1'} mx-auto`}>This is required! and make sure its valid.</p>
                    <input
                        onChange={(e) => {
                            handleChangeInput(e)
                            setEmailErr(false)
                        }}
                        value={email}
                        name='email'
                        type="text"
                        placeholder='Your Email'
                        className='outline-none duration-200 p-2 w-2/3 mx-auto bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg' />
                    <p className={`text-red-500 text-sm  duration-200 ease-in ${!messageErr ? 'opacity-0' : 'opacity-1'} mx-auto`}>This is required!</p>
                    <textarea
                        onChange={(e) => {
                            handleChangeInput(e)
                            setMessageErr(false)
                        }}
                        name="message"
                        value={message}
                        className='outline-none h-[140px] duration-200 p-2 w-2/3 mx-auto mb-1 bg-white focus:placeholder:opacity-0 focus:placeholder:duration-200 border border-gray-400 rounded-lg'
                        placeholder="Your Message"></textarea>
                    <div
                        onClick={handleSubmit}
                        className='z-[2] relative group animate-bounce w-2/3 mt-10 text-center py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#fff] cursor-pointer  transition-all duration-200 text-xl'>
                        Send
                        <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                    </div>
                </div >
                <div
                    data-aos="fade-left"
                    data-aos-duration='1000'
                    className=' w-full md:w-1/2 my-8 md:my-0 flex flex-col items-center'>
                    <div className='text-2xl sm:text-4xl font-bold text-[#1E283C]'>Or you can find me on:</div>
                    <div className='flex gap-10 mt-8'>
                        <div
                            onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100081117486445')}
                            className='hover:text-blue-500 p-2 md:p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                            <AiFillFacebook />
                        </div>
                        <div
                            onClick={() => openInNewTab('https://twitter.com/MeBhd')}
                            className='hover:text-blue-500 p-2 md:p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                            <AiOutlineTwitter />
                        </div>
                        <div
                            onClick={() => openInNewTab('https://www.linkedin.com/in/ben-elhadj-djelloul-mohamed-elfateh/')}
                            className='hover:text-blue-500 p-2 md:p-4 rounded-full bg-white hover:scale-125 duration-200 text-4xl text-[#1E283C] ease-in cursor-pointer'>
                            <AiFillLinkedin />
                        </div>
                        <div
                            onClick={() => openInNewTab('https://www.fiverr.com/fatehbhd')}
                            className='hover:text-blue-500 p-2 md:p-4 rounded-full bg-white hover:scale-125 duration-200 text-3xl sm:text-4xl text-[#1E283C] ease-in cursor-pointer'>
                            <SiFiverr />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact
