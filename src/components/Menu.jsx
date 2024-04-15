import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Menu = () => {

  let [show ,setShow] = useState(false)

  let handleMenu = ()=>{
      setShow(!show)
  }

  AOS.init({
    duration: 1200,
  });

      return (

<nav  data-aos="fade-down" className='lg:px-[0] px-[10px]  fixed top-0 left-0 w-full z-50 bg-[#ffffff8e]'>
    <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="py-[18px]">
                    <img  className='lg:w-[220px] lg:h-[60px] w-[120px] h-[40px] '  src={logo} alt="logo" />
                </div>
                <div className=" mx-auto">
                    <ScrollspyNav 
                                        scrollTargetIds={["about","services", "project", "contact"]}
                                        offset={100}
                                        activeNavClass="is-active"
                                        scrollDuration="1000"
                                        headerBackground="true">
                    <ul    className={`text-start lg:pl-[0] pl-[20px]  w-full z-50  lg:flex   absolute lg:static ${show == true ? 'top-[0px] left-0 bg-[white]  ease-in duration-300' : 'top-[0px] left-[-100%]  ease-in duration-300' }`}>
                        <img src={logo} className='lg:hidden w-[150px] pt-[30px] lg:pb-[40px] pb-[30px] pl-[20px]' alt="" />
                        <li><a className='block font-pops lg:text-black text-[#444444] font-semibold :hover hover:text-[#3C95FA] ease-in duration-200 px-[25px] lg:py-[0] py-[10px]' href="/">Home</a></li>
                        <li><a className='block font-pops lg:text-black text-[#444444]  font-semibold :hover hover:text-[#3C95FA] ease-in duration-200 px-[25px] lg:py-[0] py-[10px]'  href="#about">About</a></li>
                        <li><a className='block font-pops lg:text-black text-[#444444]  font-semibold :hover hover:text-[#3C95FA] ease-in duration-200 px-[25px] lg:py-[0] py-[10px]' href="#services">Services</a></li>
                        <li><a className='block font-pops lg:text-black text-[#444444]  font-semibold :hover hover:text-[#3C95FA] ease-in duration-200 px-[25px] lg:py-[0] py-[10px]' href="#project">Projects</a></li>
                        <li><a className='block font-pops lg:text-black text-[#444444]  font-semibold :hover hover:text-[#3C95FA] ease-in duration-300 px-[25px] lg:py-[0] py-[10px]' href="#contact">Contact</a></li>
                    </ul>
                    </ScrollspyNav>
                </div>

                <div   className="text-end">
                <a className='text-white bg-[#3C95FA] lg:px-5 lg:py-3 px-4 py-3  font-bold text-center hover:bg-[#050408] ease-in duration-200 lg:mr-[0] mr-[20px]' href="#contact">GET IN TOUCH</a>
                </div>

                <div  className="lg:hidden relative z-50 py-[18px]" onClick={handleMenu}>
                {show == true ? <RxCross2 className='text-[#3C95FA] mt-[15px] mr-[12px] font-pops text-[30px]' /> : <FaBarsStaggered className='text-black mr-[12px]  mt-[7px] font-pops text-[30px]' />}
                </div>
            </div>
        </div>
    </nav>


  )
}

export default Menu