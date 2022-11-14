import React from 'react'

function Home() {
    return (
        <div id='home' className='min-h-screen flex  items-center  px-7 md:px-10   bg-cover bg-right  xl:bg-center bg-fixed bg-no-repeat relative '>
            <div className='overlay '></div>
            <div
                className='w-full z-[2]'>
                <p
                    data-aos="fade-right"
                    data-aos-duration='1000'
                    className='text-blue-500 text-md'>Hi my name is
                </p>
                <h3
                    data-aos="fade-right"
                    data-aos-duration='1000'
                    data-aos-delay="1000"
                    className=' text-xl md:text-4xl lg:text-6xl lg:leading-loose  font-bold my-4 leading-loose md:leading-loose text-white'>
                    Mohamed El Fateh <br />
                </h3>
                <span
                    data-aos="fade-right"
                    data-aos-duration='1000'
                    data-aos-delay="2000"
                    className=' text-xl md:text-4xl lg:text-6xl lg:leading-loose  font-bold my-4 leading-loose md:leading-loose text-gray-400'>My superpower? Building Websites
                </span>
                <div
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className='relative group animate-bounce w-fit mt-10 px-8 py-2 mx-auto block border-4 border-[#3981F1] rounded-md text-[#3981F1] cursor-pointer font-semibold hover:text-white transition-all duration-200 text-xl'>MORE
                    <div className='h-full w-0 ease-in duration-200 bg-[#3981F1] group-hover:w-full absolute top-0 left-0 z-[-1]'></div>
                </div>
            </div>
        </div>
    )
}




export default Home
