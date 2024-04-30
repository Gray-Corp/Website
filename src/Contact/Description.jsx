
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import ContactInputs from './ContactInputs'


export default function Description() {
  return (
    <div className='w-full flex justify-center pb-5'>
    <div className='md:w-9/12  mob:w-full flex mob:flex-col'>
    <div className='flex flex-col items-center justify-center md:w-1/2'>
      <div className="px-4 sm:px-0 w-full mob:text-center">
      <h3 className="text-xl font-semibold leading-7 text-[#333333]">Contact Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-[#666666]">Reach out for inquiries and applications.</p>  
        </div>
      <div className="mt-6 border-t w-full border-gray-100 mob:flex mob:justify-center">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[#333333]">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-[#666666] sm:col-span-2 sm:mt-0">15, Kannathiddy road, Jaffna – SL</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[#333333]">Hotline</dt>
            <dd className="mt-1 text-sm leading-6 text-[#666666] sm:col-span-2 sm:mt-0"><a href='https://wa.me/+94704852889'>+94 70 4852889 </a></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[#333333]">Hotline</dt>
            <dd className="mt-1 text-sm leading-6 text-[#666666] sm:col-span-2 sm:mt-0"><a href='tel:+94704852889'>+94 70 4852889 </a></dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[#333333]">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-[#666666] sm:col-span-2 sm:mt-0">info@graycorp.io</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-[#333333]">Reach us on social medias</dt>
            <dd className="mt-1 text-sm leading-6 text-[#666666] sm:col-span-2 sm:mt-0 flex gap-3
            text-xl">
            <a href='https://wa.me/+94704852889'><FaWhatsapp/> </a>    
            <a href='https://www.facebook.com/company/thegraycorp/' target='_blank'><FaFacebook/></a>
            <a href='https://www.twitter.com/company/thegraycorp/' target='_blank'><FaXTwitter/></a>
            <a href='https://www.instagram.com/thegraycorp/' target='_blank'><FaInstagram/></a>
            </dd>
          </div>
         
        
        </dl>
      </div>
    </div>
    <ContactInputs/>
    </div>
    </div>
  )
}
/*

 
    
    
    
    

*/