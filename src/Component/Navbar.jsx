import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <>              
    <div className= "lg:flex lg:flex-row sm:grid-cols-1 md:grid-rows-1">
    <div className="flex flex-row sm:grid-rows-1">
    <div className=" -mt-10 md:ml-72 lg:ml-56 ml-64"><img src="https://media.licdn.com/dms/image/C560BAQEr6EFwGmCKgQ/company-logo_200_200/0/1598972717451?e=2147483647&v=beta&t=E8j-VITF6CBIFm3ee5pMFbu7qbhdO-2aRvsXIpkeyhc" alt="" /> </div>  
    <div className="bg-[#800080] text-white font-medium h-8 w-36 rounded-2xl text-center flex flex-row pl-4 mt-10 pt-1 md:ml-20 lg:hidden ml-8">ProfileName<KeyboardArrowDownIcon sx={{color:"white"}}/></div>
    </div>

   
    <div className="  hello sm:hidden md:hidden  lg:flex lg:flex-row justify-center">
    <div className=" text-[#DFBFDF] text-xl ml-96 mt-5   ">My Assignment</div>
    <div className=" text-[#DFBFDF] text-xl ml-10  mt-5">Chat with Mentor</div>
    <div className=" text-[#800080] ml-10  mt-5 "><AccountCircleIcon/></div>
    <div className="text-[#800080] text-xl  mt-5">ProfileName</div>
    <div className="text-[#800080]  mt-5"><KeyboardArrowDownIcon/></div>
    </div>
    
    </div>

    
    </>
  )
}

export default Navbar
