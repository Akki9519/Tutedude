import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SellIcon from "@mui/icons-material/Sell";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="pl-72 mt-5">
        <div className="font-bold text-xl text-[#881088] pb-4">
          How does it work?
        </div>

        <div className=" lg:flex lg:flex-row md:grid-cols-1 sm:grid-cols-1">
          <div className="flex flex-col">
            <div className="flex flex-row ">
              <div className="h-14 w-14 rounded-full bg-[#F5F5F5] mr-3">
                <div className="text-center pt-3 ">
                  <GroupsIcon sx={{ color: "purple" }} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[black] font-medium">
                  Invite Your Friends
                </div>
                <div className="text-[gray]">
                  Share the link tudedude.com with <br />
                  your friends
                </div>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="h-14 w-14 rounded-full bg-[#F5F5F5] mr-3 mt-4 ">
                <div className="text-center pt-3">
                  <CurrencyRupeeIcon sx={{ color: "purple" }} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[black] font-medium mt-4">
                  You get ₹ 200 as referral money
                </div>
                <div className="text-[gray]">
                  On total purchase the friend
                  <br /> makes, into your wallet
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="h-14 w-14 rounded-full bg-[#F5F5F5] mr-3 mt-4 ">
                <div className="text-center pt-3">
                  <SellIcon sx={{ color: "purple" }} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[black] font-medium mt-4">
                  Friend purchases any course
                </div>
                <div className="text-[gray]">
                  Using your REFERRAL CODE
                  <br /> in the payments page
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-col  lg:ml-14  ">
             <div className="flex flex-row ">
              <div className="h-14 w-14 rounded-full bg-[#F5F5F5] mr-3 ">
                <div className="text-center pt-3">
                  <AccountBalanceWalletIcon sx={{ color: "purple" }} />
                </div>
              </div>
              <div className="flex flex-col md:mt-3 sm:mt-3">
                <div className="text-[black] font-medium">
                  Transfer money from wallet
                </div>
                <div className="text-[gray]">
                  When the wallet balance reaches
                  <br />
                  ₹200 or more, you can withdraw it
                </div>
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="h-14 w-14 rounded-full bg-[#F5F5F5] mr-3 mt-4 ">
                <div className="text-center pt-3">
                  <GroupsIcon sx={{ color: "purple" }} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-[black] font-medium mt-4">
                  Your Friend gets ₹ 200 Off{" "}
                </div>
                <div className="text-[gray]">
                  On his overall fee on successful
                  <br /> purchase using your referral code{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Link to="/page2">
            <div className="text-[#881088] font-semibold mt-6 ">
              Friends who enrolled
            </div>
          </Link>
          <div className="text-[#881088] font-semibold mt-4 mb-4">
            Terms & Conditions
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
