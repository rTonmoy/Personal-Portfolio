import React from 'react'
import { SlCalender } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";
import { MdOutlineRateReview } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init({
        duration: 1200,
      });

  return (
    <div id='about'>
            <div className='bg-[#050408] lg:pt-[140px] pt-[70px] pb-[250px] px-[20px] text-center'>
        <div className="container mx-auto relative ">
            <div className="flex flex-wrap justify-between ">
            <div data-aos="fade-up" className="lg:w-[24%] w-[46%] text-white">
            <div className="lg:flex ">
                <div className=" lg:px-0 sm:px-[125px] px-[60px]"><SlCalender className='lg:text-[55px] text-[45px]' /></div>
            <div className="lg:px-[30px]">
            <h2 className='lg:text-[25px] text-[18px] lg:pt-0 pt-4 font-bold'>Website Built</h2>
            <p className='lg:text-[18px] text-[16px] text-[#444444] font-semibold lg:px-[0] px-[10px]'>- Made 50+ Websites</p>
            </div>
            </div>
            </div>
            <div  data-aos="fade-up" className="lg:w-[24%] w-[46%] text-white lg:text-start">
            <div className="lg:flex">
                <div className=" lg:px-0 sm:px-[115px] px-[50px]"><RiComputerLine className='lg:text-[55px] text-[55px]' /></div>
            <div className="lg:px-[30px]">
            <h2 className='lg:text-[25px] text-[18px] lg:pt-0 pt-2 font-bold'>Graphics Made</h2>
            <p className='lg:text-[18px] text-[16px] text-[#444444] font-semibold lg:px-[0] px-[10px]'>- Made 150+ Designs</p>
            </div>
            </div>
            </div>
            <div  data-aos="fade-up" className="lg:w-[24%] w-[46%] text-white lg:text-start  lg:pt-0 pt-8">
            <div className=" lg:flex">
                <div className=" lg:px-0 sm:px-[125px] px-[60px]"><VscProject className='lg:text-[55px] text-[45px]' /></div>
            <div className="lg:px-[30px]">
            <h2 className='lg:text-[25px] text-[18px] lg:pt-0 pt-4 font-bold'>Projects Done</h2>
            <p className='lg:text-[17px] text-[16px] text-[#444444] font-semibold lg:px-[0] px-[10px]'>-45+ Project Completed</p>
            </div>
            </div>
            </div>
            <div  data-aos="fade-up" className="lg:w-[24%] w-[46%] text-white lg:text-start lg:pt-0 pt-8">
            <div className=" lg:flex">
                <div className=" lg:px-0 sm:px-[115px] px-[55px]"><MdOutlineRateReview className='lg:text-[55px] text-[55px]' /></div>
            <div className="lg:px-[30px]">
            <h2 className='lg:text-[25px] text-[18px] lg:pt-0 pt-2  font-bold'>Testimonials</h2>
            <p className='lg:text-[17px] text-[16px] text-[#444444] font-semibold'>- 40+ Reviews Complete</p>
            </div>
            </div>
            </div>
            </div>

            <div className="">
            <div className="bg-[#3C95FA]  absolute lg:top-[150px] top-[400px] left-0 font-pops">
                <div className="bg-[url('../src/assets/section_overlay.png')] bg-center bg-cover lg:px-[110px]  lg:pt-[90px] pt-[35px] lg:pb-[120px]
                pb-[50px]">
                <h2 data-aos="fade-up" className='lg:text-[48px] text-[32px] font-bold text-white lg:px-0 px-[40px]'>Let's work together and make a big change</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About