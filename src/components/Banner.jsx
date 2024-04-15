import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Banner = () => {

    
    let [text] = useTypewriter({
        words: ['React','Tailwind','Java Script','NEXT js','Bootstrap','SCSS'],
        loop: 0
      })

      AOS.init({
        duration: 1200,
      });


  return (
    <div className='px-[10px] lg:px-[0] pt-[90px]'>
      <div className="container mx-auto lg:pt-[50px] pt-[20px]">
        <div data-aos="fade-up" className="text-center lg:px-[50px] ">
            <h1 className='font-pops lg:text-[45px] sm:text-[38px] text-[32px] font-bold'>Hello, i am <span className='text-[#3C95FA] hover:text-black transition duration-500 ease-in-out'>Tonmoy.</span> I'm a freelance <span>Frontend Developer</span> with <span className='text-[#3C95FA]'>{text}</span> <Cursor cursorColor='#000' /> </h1>
        </div>
        </div>
    </div>
  )
}

export default Banner