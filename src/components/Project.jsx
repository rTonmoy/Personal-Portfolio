import React from 'react'
import finsweet from "../assets/finsweet.png"
import bwfc from "../assets/bwfc.png"
import petrol from "../assets/petrol.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    AOS.init({
        duration: 1200,
      });
  return (
    <div id='project'>
            <div className="container mx-auto font-pops lg:px-0 px-[15px]">
        <div className="flex flex-wrap justify-between mt-[70px]">
            <div className="lg:w-1/2 w-full">
                <h2 data-aos="fade-up" className='lg:text-[40px] text-[30px] font-bold lg:pr-[100px] lg:text-start text-center'>Some of my very <span className='text-[#3C95FA] hover:text-[black] transition duration-500 '>successful projects</span></h2>
            </div>
            <div className="lg:w-1/2 w-full">
                <p data-aos="fade-up" className='text-[14px] text-[#444] lg:pr-[60px] lg:text-start text-center lg:mt-0 mt-[30px]'>I usually work until the clients’ satisfaction. So every project I’ve completed so far was successful. I’d love to say that these few snaps are my favorite projects where I got my satisfactions.</p>
            </div>
        </div>

        <div className="flex flex-wrap justify-between">
            <a data-aos="fade-up" className='lg:w-[32%] w-full mt-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' href="https://tonmoy166.netlify.app" target='_blank'>
                <img src={finsweet} className='w-full' alt="" />
                <h3 className='bg-[#fff] text-[#3C95FA] py-[15px] text-center font-bold text-[18px]'>10 Page Project</h3>
            </a>
            <a data-aos="fade-up" className='lg:w-[32%] w-full mt-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' href="https://fancy-sundae-0236ed.netlify.app" target='_blank'>
                <img src={bwfc} className='w-full' alt="" />
                <h3 className='bg-[#fff] text-[#3C95FA] py-[15px] text-center font-bold text-[18px]'>BWFC Project</h3>
            </a>
            <a data-aos="fade-up" className='lg:w-[32%] w-full mt-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]' href="https://spiffy-gelato-8ea5ee.netlify.app" target='_blank'>
                <img src={petrol} className='w-full' alt="" />
                <h3 className='bg-[#fff] text-[#3C95FA] py-[15px] text-center font-bold text-[18px]'>Petrol Project</h3>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Project