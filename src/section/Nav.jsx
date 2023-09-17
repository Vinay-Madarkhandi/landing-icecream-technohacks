import logo from '../assets/asset/logo.png'
import { useState } from 'react'
import {HiOutlineSortDescending,HiSortAscending} from 'react-icons/hi'

const Nav = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <header className=" padding-x py-8 absolute z-10 w-full ">
      <nav className='flex justify-between items-center max-container  '>
        <a href="/">
          <img src={logo} alt="logo" width={50} height={50} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><a href="/" className='font-montserrat leading-normal text-lg text-slate-gray'>Home</a></li>
          <li><a href="/" className='font-montserrat leading-normal text-lg text-slate-gray'>Products</a></li>
          <li><a href="/" className='font-montserrat leading-normal text-lg text-slate-gray'>ABout us</a></li>
          <li><a href="/" className='font-montserrat leading-normal text-lg text-slate-gray'>Contacts</a></li>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <a href='/' >sign in / Explore now</a>
        </div>
        <div className='hidden max-lg:block max-lg:items-end'>
         {!toggle ? <HiOutlineSortDescending onClick={()=>setToggle(!toggle)} className=" text-[30px] cursor-pointer"/>
          :<HiSortAscending onClick={()=>setToggle(!toggle)} className="text-[30px] cursor-pointer" />  }
          {toggle? 
          
           <div className='absolute left-0 min-h-screen w-[100vw] z-20 backdrop-blur-lg'>
               <h1 className=" text-[24px] mb-6 flex justify-center items-center mt-3" >
              Home
            </h1>
            <h1 className=" text-[24px] mb-6 flex justify-center items-center mt-3" >
              Products
            </h1>
            <h1 className=" text-[24px] mb-6 flex justify-center items-center mt-3" >
              About us
            </h1>
            <h1 className=" text-[24px] mb-6 flex justify-center items-center mt-3" >
              Contacts
            </h1>
            <h1 className=" text-[24px] mb-6 flex justify-center items-center mt-3" >
              sign in / Explore now
            </h1>
           </div>           
          :null}
        </div>              
      </nav>
    </header>
  )
}

export default Nav