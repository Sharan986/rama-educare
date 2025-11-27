import React from 'react'
import Image from 'next/image'
import Welcome from '@/components/Welcome'
import Values from '../components/Value'
import ServicesSection from '../components/Service'
import Pattern from '../components/Pattern'
import FAQsSection from '../components/Faqs'
import Work from '../components/Work'
import WhyEdu from '../components/Whyedu'


const Page = () => {
  return (
    <>
<nav className="flex justify-between items-center px-24 pt-6 pb-10"> 
         <h1 className='text-3xl font-semibold'>
          Rama Educare
         </h1>
         <div className="flex justify-between items-center gap-12 text-2xl">
          <h1>About</h1>
          <h1>Service</h1>
          <h1>Faqs</h1>
          <h1>Contact us</h1>
         </div>
        </nav>
    <div className='flex justify-between '>
     <div className='pt-60 pl-24 '>
      <p className='text-6xl font-semibold pb-4'>We will help you to study </p>
      <p className='text-6xl font-semibold pb-10 '>at your dream University.</p>
      <p className='text-xl pb-2'>From choosing the right university to acing your application, we’ve got you </p>
      <p className='text-xl'>covered. Let’s make your dream a reality—stress-free and hassle-free!</p>
     <button className='border-2 text-lg rounded-full p-4 w-50 mt-10 text-center '>View Services</button>
     <button className='border-2 text-lg rounded-full p-4 w-50 ml-6'>Contact Us</button>
     
     </div>



      <div >
      <Image 
        src="/hero.png"  
        alt="Description"
        width={420} 
        height={250}
        
        className="object-cover w-150 h-180"
        
      />
    </div>

   </div>
   
   <div className='px-24'>
     <Welcome/>
     <Values/>
    
     <ServicesSection/>
    <Work/>
      <Pattern/>
      <FAQsSection/>

   </div>
   
    </>
  
  )
}

export default Page