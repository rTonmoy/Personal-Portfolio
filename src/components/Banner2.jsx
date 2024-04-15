import React from 'react'
import banner from "../assets/banner.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner2 = () => {

  AOS.init({
    duration: 1200,
  })


  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#3C95FA]">
    <div className="container mx-auto  relative">
      <img src={banner} className='lg:w-[35%] w-[75%] mx-auto' alt="" />

      {/* <div data-aos="fade-up" className="absolute sm:top-[560px] sm:left-[112px] lg:top-[190px] lg:left-[350px] top-[290px] left-[110px] leading-6 bg-[white] sm:py-[10px] sm:px-[150px] lg:py-[18px] py-[9px] px-[45px] lg:px-[73px] md:left-[310px] md:top-[630px] rounded-[50px] text-center block z-10">
        <h4 className='font-pops text-[18px] font-semibold '>Designer</h4>
        <h6>4 Years+</h6>
      </div>

      <div data-aos="fade-up"  className="hidden lg:block absolute top-[400px] right-[310px] leading-6 bg-[white] py-[15px] px-[45px] rounded-[50px] text-center z-10">
            <h4 className='font-pops text-[18px] font-semibold'>Website Maker</h4>
            <h6>5 Years+</h6>
       
      </div> */}
    </div>
    </div>


  )
}

export default Banner2


{/* 
        <div className="absolute sm:top-[570px] sm:left-[240px] lg:top-[160px] lg:left-[390px] top-[525px] left-[100px] leading-6 bg-[white] sm:py-[10px] lg:py-[18px] py-[9px] px-[45px] lg:px-[73px] md:left-[310px] md:top-[630px] rounded-[50px] text-center ">
        <h4 className='font-pops text-[18px] font-semibold '>Designer</h4>
        <h6>4 Years+</h6>
        </div>

        <div  className="hidden lg:block absolute top-[320px] right-[360px] leading-6 bg-[white] py-[15px] px-[45px] rounded-[50px] text-center">
            <h4 className='font-pops text-[18px] font-semibold'>Website Maker</h4>
            <h6>5 Years+</h6>
        </div> */}