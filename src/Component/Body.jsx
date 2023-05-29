import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Body = () => {
  return (
    <>
    
 <div className=" shadow-2xl h-40  rounded-md ml-72 mt-14 flex flex-row pt-3 justify-center " style={{width:"450px"}}>
<div className="flex flex-col">
<div className="text-[#881088] font-semibold ">Referral Earning</div>
<div className="font-semibold text-3xl "><CurrencyRupeeIcon/>2500</div>
</div>
<div className="flex flex-col">
<div className="text-[#881088] pl-4  font-semibold">Total Referrals</div>
<div className="font-semibold text-3xl pl-4">7</div>

<div className="border border-[black] rounded-3xl bg-[#881088] h-9 pr-2 pl-2 pt-1 pb-1 mt-4 text-white ">Withdraw Balance</div>

</div>
<div className="flex flex-col pl-4">
<div className="text-[#881088] font-semibold">Wallet Balance</div>
<div className="font-semibold text-3xl">500</div>
</div>
 </div>


 
    </>
  )
}

export default Body