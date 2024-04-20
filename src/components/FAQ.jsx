import React, { useState } from "react";
import faq from "../assets/FAQ1.png"
import 'flowbite';
import AOS from 'aos';
import 'aos/dist/aos.css';



const FAQ = () => {

  AOS.init({
    duration: 1200,
  });

  return (
    <div className="lg:px-0 px-[15px] bg-[url('../src/assets/FAQ.jpg')] bg-left-bottom bg-cover">
          <div className="container mx-auto font-pops">
      <div className="lg:mt-[170px] mt-[130px]">
        <div className="flex flex-wrap">
            <div className="lg:w-[60%] lg:order-1 order-2 w-full ">
                <img className='lg:w-[80%] w-full' src={faq} alt="" />
            </div>
            <div className="lg:w-[40%] lg:order-2 order-1 w-full">
                 <div className="">
                    <h2 data-aos="fade-up" className='lg:text-[42px] text-[28px] font-bold lg:mt-[130px] mt-[50px]'>Nothing Can Substitute <span className='text-[#3C95FA] hover:text-[black] transition duration-500'>Experience</span></h2>
                    <p data-aos="fade-up" className='text-[16px] text-[#444444] font-medium py-[25px]'>Experiencing lots of things to gain wisdom. I’ve been awarded as a <span className='font-bold'>Frontend Developer</span> on <span className='font-bold'>Fiverr</span> for making websites and banners. Beside this, I have some other identities as well. I’m passioniate about technology and businesses. So I’m <span className='font-bold'>investing</span> on <span className='font-bold'>opportunities</span> and building <span className='font-bold'>businesses</span>.</p>
                </div>


<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button data-aos="fade-up" type="button" class="flex items-center justify-between w-full p-5 font-bold text-[black] border-b-[1px] border-[#00000030]  text-[18px] rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
      <span>Tonmoy - As a freelance website maker.</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 ">
      <p class="mb-2 text-[14px] text-[#444444]">Although I started my freelancing career as a graphic designer in 2017 after 1 year of practice. After that, I started making websites for my fiverr clients. Within these 4 years, I’ve built 600+ websites for small and medium businesses with total 1250+ projects completion on Fiverr. Also got maximum badge (Top Rated Seller) -a seller can achieve as a freelancer on Fiverr. </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button data-aos="fade-up" type="button" class="flex items-center justify-between w-full p-5 font-bold text-[18px] border-b-[1px] border-[##00000030] text-[black]  rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Tonmoy - As a Designer.</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 ">
      <p class="mb-2 text-[14px] text-[#444444]">I used to be a reputed tutor before starting my freelancing career. I taught high school students and have taken extra classes in a high school too. I enjoy to teach people from my experiences and after serving my skillsets to international clients, I started my mentoring career in September, 2018. Within 3 years, I got 1100+ paid students and 5k+ free students. Among paid students 400+ champs started making money from freelancing and within short time 200+ badges on marketplaces. </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button data-aos="fade-up" type="button" class="flex items-center justify-between w-full p-5 font-bold border-b-[1px] border-[#00000030] text-[18px] text-[black] gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Tonmoy - As a Developer.</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 ">
      <p class="mb-2 text-[14px] text-[#444444]">Doing business is in my family tradition. I made my own empire by gaining knowledge and skills, but I was used to be a middle class guy. I remember selling watermelons, coconuts etc in front of our resturant(family business) in my childhood. However after making some handcash I started learning about technology businesses. In 2019, I established my first IT firm called IdeasyCorp with 5 peoples for graphic designs and website developments services. 
Then in 2020, we fully started our offline operations in a rented flat at Aftabnagar in Dhaka. After survibing in Covid Impact we are now at Uttara with 16+ experts under the same roof. Also holding the CEO position in our web agency called EnvyWebStudio.    </p>
     
    </div>
  </div>

  <h2 id="accordion-collapse-heading-4">
    <button data-aos="fade-up" type="button" class="flex items-center justify-between w-full p-5 font-bold border-b-[1px] border-[#00000030] text-[18px] text-[black] gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span>Tonmoy - As an investor</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
    <div class="p-5 ">
      <p class="mb-2 text-[14px] text-[#444444]">Alhamdulillah that I’m making enough money for living a happy life by selling my time and skills. Every month also saving some money for investing in various businesses. I’ve invested in lots of businesses so far such as Dropshipping, Local E-Commerce, F-Commerce, Edu Tech Startups,  Charities.</p>
     
    </div>
  </div>
</div>


           
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FAQ