import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Body1 from './Body1'
import Footer from './Footer'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const Page1 = () => {
  return (
    <>
     <Navbar/>
     <div className=" font-medium text-black ml-72 text-xl -mt-10 ">UI/UX <KeyboardArrowLeftIcon/> Refer & Earn </div> 
    <div className="lg:flex lg:flex-row md:grid-cols-1 sm:grid-cols-1 -mt-5">
    <Body/>
 
    <Body1/>
    </div>
    <Footer/>
    </>
  )
}

export default Page1