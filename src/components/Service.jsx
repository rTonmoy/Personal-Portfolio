import React from 'react'
import { PiFileMagnifyingGlassDuotone } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";
import { IoLogoTwitch } from "react-icons/io";
import { SiBandsintown } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <div id='services'>
          <div className="bg-[#EDF5FF] lg:py-[90px] py-[60px] lg:px-0 px-[15px] mt-[110px] font-pops">
        <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
            <div className="w-full text-center">
                <h2 data-aos="fade-up" className='lg:text-[40px] text-[28px] font-bold'>My <span className='text-[#3C95FA] hover:text-[black] transition duration-500'>services</span> as a <span className='text-[#3C95FA] hover:text-[black] transition duration-500'>freelance worker</span></h2>
            </div>
            <div className="w-full text-center">
            <p data-aos="fade-up" className='text-[15px] text-[#444444] lg:px-[300px] py-[20px] leading-6'>I usually make any kind of website using raw codes using React, as well as I do graphic projects such as logo design, banners etc. </p>
            </div>

            <div data-aos="fade-up" className="lg:w-[49%] w-full border-solid border-[1px] border-[#3C95FA] p-[15px] lg:mt-[60px] mt-[30px]">
            <div className=" bg-[#3C95FA] lg:py-[50px] py-[30px] px-[30px] lg:px-[50px] bg-[url('../src/assets/service1.png')] bg-right-bottom bg-cover ">
            <PiFileMagnifyingGlassDuotone className='lg:text-[90px] text-[70px] text-[#fff]' />
            <h2 className='lg:text-[32px] text-[30px] font-bold text-[#fff] py-[15px]'>Figma Website</h2>
            <p className='text-[14px] text-[#fff] lg:pr-[100px] leading-7'>From the CMS of web technology, I love to use Figma so much. I made more than 50+ websites using Figma CMS in these 2 years journey of website making. I know HTML, CSS, JS,  and other required technology to create any custom Figma website.</p>
            <a className='inline-block text-[15px] font-bold pt-[30px] text-[#fff]' href="#">	Read More<MdKeyboardArrowRight className='inline-block' /></a>
            </div>
            </div>

            <div data-aos="fade-up" className="lg:w-[49%] w-full border-solid border-[1px] border-[#fff] hover:border-[#3C95FA] p-[15px] lg:mt-[60px] mt-[20px] transition duration-300">
            <div className=" bg-[#fff] lg:py-[50px] py-[30px] px-[30px] lg:px-[50px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-300">
            <BsQrCodeScan className='lg:text-[90px] text-[70px] text-[#3C95FA]' />
            <h2 className='lg:text-[32px] text-[28px] font-bold text-[black] py-[15px]'>Website Design</h2>
            <p className='text-[14px] text-[#444] lg:pr-[40px] leading-7'>I know HTML, CSS, ReactJS, Tailwind, JS, Bootstrap, React Bootstrap, React framework and few other required technology to create any kind of custom websites. Previously I develop few custom websites as well for my Fiverr Clients. I’ve worked with 50+ Customly coded websites.</p>
            <a className='inline-block text-[15px] font-bold pt-[30px] text-[#000]' href="#">	Read More<MdKeyboardArrowRight className='inline-block' /></a>
            </div>
            </div>

            <div data-aos="fade-up" className="lg:w-[49%] w-full border-solid border-[1px] border-[#fff] hover:border-[#3C95FA] p-[15px] lg:mt-[25px] mt-[20px] transition duration-300">
            <div className=" bg-[#fff] lg:py-[50px] py-[30px] px-[30px] lg:px-[50px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-300">
            <IoLogoTwitch className='lg:text-[90px] text-[80px] text-[#3C95FA]' />
            <h2 className='lg:text-[32px] text-[30px] font-bold text-[black] py-[15px]'>Bootstrap Responsive</h2>
            <p className='text-[14px] text-[#444] lg:pr-[40px] leading-7'>Bootstrap's responsive design capabilities offer a multitude of benefits, primarily enhancing user experience across various devices. By utilizing Bootstrap, developers can create websites and applications that seamlessly adapt to different screen sizes, from desktops to smartphones and everything in between.</p>
            <a className='inline-block text-[15px] font-bold pt-[30px] text-[#000]' href="#">	Read More<MdKeyboardArrowRight className='inline-block' /></a>
            </div>
            </div>

            <div data-aos="fade-up" className="lg:w-[49%] w-full border-solid border-[1px] border-[#fff] hover:border-[#3C95FA] p-[15px] lg:mt-[25px] mt-[20px] transition duration-300">
            <div className=" bg-[#fff] lg:py-[50px] py-[30px] px-[30px] lg:px-[50px] hover:bg-[url('../src/assets/service2.png')] bg-right-bottom bg-cover transition duration-300">
            <SiBandsintown className='lg:text-[90px] text-[80px] text-[#3C95FA]' />
            <h2 className='lg:text-[32px] text-[30px] font-bold text-[black] py-[15px]'>SCSS Website</h2>
            <p className='text-[14px] text-[#444] lg:pr-[40px] leading-7'>One of the distinct advantages of using SCSS (Sassy CSS) for website development is its ability to streamline and organize CSS code. SCSS introduces features like variables, nesting, and mixins, enabling developers to write cleaner and more maintainable code. </p>
            <a className='inline-block text-[15px] font-bold pt-[30px] text-[#000]' href="#">	Read More<MdKeyboardArrowRight className='inline-block' /></a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Service