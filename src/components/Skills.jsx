import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  AOS.init({
    duration: 1200,
  });

  return (
    <div className="container mx-auto font-pops">
        <div className="flex flex-wrap justify-between">
          <div className="lg:w-[50%] w-full">
            <h2 data-aos="fade-up" className='lg:text-[42px] sm:text-[27px] text-[32px] font-bold py-[40px] lg:py-[80px] lg:text-start text-center'>My <span className='text-[#3C95FA] hover:text-[black] transition duration-500'>skills</span> are formed from years of <span className='text-[#3C95FA] hover:text-[black] transition duration-500'>experience</span></h2>
          </div>
          <div className="lg:w-[50%] w-full">
            <p data-aos="fade-up" className='text-[16px] text-[#444444] lg:pt-[145px] lg:pb-[80px] lg:text-start text-center lg:px-0 px-[15px]'>Doesn’t matter how much money I’m making per month. All that matters to me, ‘Am I being better than last month for being the next billionaire?’ </p>
          </div>

          <div data-aos="fade-up" className="bg-[url-['../src/assets/service1.png'] lg:w-[23%] w-full bg-[#EDF5FF] py-[50px] px-[40px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-500 lg:mt-0 mt-[50px]">
            <h5 className='text-[14px]'>2023-2024 <span className='text-[#3C95FA]'>Website Designer</span></h5>
            <h3 className='text-[24px] font-bold py-[15px]'>Fiverr</h3>
            <h4 className='text-[14px] text-[#444444] leading-7'>Find the perfect freelance services for your business</h4>
            <a className='inline-block text-[15px] font-bold pt-[25px]' href="#">Hire me at Fiverr <MdKeyboardArrowRight className='inline-block' /></a>
          </div>

          <div data-aos="fade-up" className="bg-[url-['../src/assets/service1.png'] lg:w-[23%] w-full bg-[#EDF5FF] py-[50px] px-[40px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-500 lg:mt-0 mt-[20px]">
            <h5 className='text-[14px]'>2022-2023 <span className='text-[#3C95FA]'>Logo Designer</span></h5>
            <h3 className='text-[24px] font-bold py-[15px]'>Upwork</h3>
            <h4 className='text-[14px] text-[#444444] leading-7'>Learn effective things to make money online.</h4>
            <a className='inline-block text-[15px] font-bold pt-[25px]' href="#">	Success Stories<MdKeyboardArrowRight className='inline-block' /></a>
          </div>

          <div data-aos="fade-up" className="bg-[url-['../src/assets/service1.png'] lg:w-[23%] w-full bg-[#EDF5FF] py-[50px] px-[40px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-500 lg:mt-0 mt-[20px]">
            <h5 className='text-[14px]'>2018-2024 <span className='text-[#3C95FA]'>Graphics Designer</span></h5>
            <h3 className='text-[24px] font-bold py-[15px]'>Freelancer</h3>
            <h4 className='text-[14px] text-[#444444] leading-7'>Find the perfect freelance services for your business</h4>
            <a className='inline-block text-[15px] font-bold pt-[25px]' href="#">	Read More<MdKeyboardArrowRight className='inline-block' /></a>
          </div>

          <div data-aos="fade-up" className=" lg:w-[23%] w-full bg-[#3C95FA] py-[50px] px-[40px] bg-[url('../src/assets/service1.png')] bg-right-bottom bg-cover lg:mt-0 mt-[20px] ">
            <div className="">
            <h5 className='text-[14px]'>2019-2020 <span className='text-[#fff]'>Investor</span></h5>
            <h3 className='text-[24px] font-bold py-[15px] text-[#fff]'>Fiverr</h3>
            <h4 className='text-[14px] text-[#fff] leading-7'>Find the perfect freelance services for your business</h4>
            <a className='inline-block text-[15px] font-bold pt-[25px] text-[#fff]' href="#">Hire me at Fiverr <MdKeyboardArrowRight className='inline-block' /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills