import logo from '../assets/asset/logo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube  } from 'react-icons/bs' 

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">  
        <div className=' flex flex-col items-start'>    
          <img src={logo} alt="logo" width={60} height={60} />
          <p className=' mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            A better place to find a ice cream in your city ever ! So make sure to visit it now!
          </p>
          <div className='flex items-center gap-5 mt-8'>
          < BsFacebook  className='flex justify-center items-center w-12 h-12 bg-white rounded-full' />
          < BsInstagram  className='flex justify-center items-center w-12 h-12 bg-white rounded-full' />
          < BsTwitter  className='flex justify-center items-center w-12 h-12 bg-white rounded-full' />
          < BsYoutube  className='flex justify-center items-center w-12 h-12 bg-white rounded-full' />
          </div>
        </div>

        <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '> 
            <div>
              <h1 className=' font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>Products</h1>
              <ul className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                  <li>Vanilla</li>
                  <li>Chocolate</li>
                  <li>Strawberry</li>
                  <li>Butter Pecan</li>
                  <li>Mango</li>
                  <li>Pista</li>              
              </ul>
            </div>
            <div>
                <h1 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>Help</h1>
                <ul className=" mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray ">
                  <li>About Us</li>
                  <li>FAQ's</li>
                  <li>Order Status</li>
                  <li>Payment-issue</li>
                  <li>How-it-Works</li>
                </ul>
            </div>
            <div>
              <h1 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>Contact</h1>
              <ul className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                <li>contact@icecream.com</li>
                <li>+918856094992</li>
              </ul>
            </div>
        </div>    
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
         <p> &#169; Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer