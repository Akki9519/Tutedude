import React from "react";
import Navbar from "./Navbar";
import {
  CurrencyRupeeOutlined,
  CurrencyRupeeRounded,
} from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <>
      <div className="">
        
        <Navbar />
      </div>
      <Link to="/">
        <div className="ml-72 pb-3 -mt-12">
          <ArrowBackIcon sx={{ color: "violet" }} />
          <span className="text-[#881088] font"> go back</span>
        </div>
      </Link>

      <div className=" font-medium text-black ml-72 text-xl ">
        UI/UX <KeyboardArrowLeftIcon /> Refer & Earn <KeyboardArrowLeftIcon />
        Friends Referred
      </div>

      <div className=" lg:flex lg:flex-row   justify-around mt-4 md:grid-cols-1 sm:grid-cols-1  lg:ml-1 md:ml-72 ml-72 ">
        <div className="flex flex-col  ">
          <div className="text-[#881088] font-medium">Your Referral Code</div>
          <div className="border-2 border-[gray] h-8 w-40 flex flex-row font-medium rounded-lg justify-center mt-2">
            <div className="text-[black]">E</div>
            <div className="text-[black] pl-2">D</div>
            <div className="text-[black]  pl-2">C</div>
            <div className="text-[black]  pl-2">H</div>
            <div className="text-[black]  pl-2">5</div>
            <div className="text-[black]  pl-2">4</div>
          </div>
        </div>

        <div className="shadow-lg h-20 w-40 flex flex-col rounded-xl  lg:md-none md:mt-5 mt-3   ">
          <div className=" text-[#881088] text-center pt-2 font-medium ">
            Wallet Balance
          </div>
          <div className="text-center font-bold">
            <CurrencyRupeeOutlined />
            500
          </div>
        </div>
      </div>

      <div className="text-[#881088] font-bold ml-72 mt-10 text-2xl">
        Friend who enrolled <span className="text-[gray] font-medium">(3)</span>
      </div>

      <div className=" lg:flex lg:flex-row md:grid-cols-1 sm:grid-cols-1">
        <div className="  bg-gradient-to-r from-[#F9804F] to-[#8B0C7B] h-60 w-80  rounded-3xl text-white ml-72 mt-4">
          <div className="flex flex-row justify-between pt-3 ">
            <div className="pl-5 font-semibold text-xl">Dhiraj Saxena</div>
            <div className="pr-4">14 Sep,2022</div>
          </div>
          <div className="pl-5 pt-3">Course Enrolled(6)</div>

          <div className="flex flex-col pt-3 sm:flex-col md:flex-col">
            <div className="flex flex-row ml-6 sm:flex-col md:flex-col">
              <div className="h-8 w-20 border border-[black] rounded-2xl pl-3  ">
                UI/UX
              </div>
              <div className="h-8 w-24 border border-[black] rounded-2xl pl-3 ml-3 ">
                Photoshop
              </div>
              <div className="h-8 w-20 border border-[black] rounded-2xl pl-3 ml-3">
                Illustator
              </div>
            </div>

            <div className="flex flex-row ml-6 sm:flex-col md:flex-col">
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3  mt-2">
                Python
              </div>
              <div className="h-8 w-24 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                MERN
              </div>
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                Java
              </div>
            </div>
          </div>

          <div className="p-3 ">
            Referral Amount
            <CurrencyRupeeRounded />{" "}
            <span className="font-medium text-xl"> 185</span>
          </div>
        </div>

         <div className=" ">
        <div className="  bg-gradient-to-r from-[#F9804F] to-[#8B0C7B] h-60 w-80  rounded-3xl text-white md: ml-72 lg:ml-10 sm:ml-72 mt-4 ">
          <div className="flex flex-row justify-between pt-3  ">
            <div className="pl-5 font-semibold text-xl">Subhash Mishra</div>
            <div className="pr-4">15 Sep,2022</div>
          </div>
          <div className="pl-5 pt-3">Course Enrolled(23)</div>

          <div className="flex flex-col pt-3 sm:flex-col md:flex-col">
            <div className="flex flex-row ml-6">
              <div className="h-8 w-20 border border-[black] rounded-2xl pl-3  ">
                UI/UX
              </div>
              <div className="h-8 w-24 border border-[black] rounded-2xl pl-3 ml-3 ">
                Photoshop
              </div>
              <div className="h-8 w-20 border border-[black] rounded-2xl pl-3 ml-3">
                Illustator
              </div>
            </div>

            <div className="flex flex-row ml-6 sm:flex-col md:flex-col">
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3  mt-2">
                Python
              </div>
              <div className="h-8 w-24 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                MERN
              </div>
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                Java
              </div>
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                C++
              </div>
            </div>
          </div>


          <div className="p-3 ">
            Referral Amount
            <CurrencyRupeeRounded />{" "}
            <span className="font-medium text-xl"> 485</span>
          </div>
        </div>
        </div>

        <div className="  bg-gradient-to-r from-[#F9804F] to-[#8B0C7B] h-60 w-80  rounded-3xl text-white md: ml-72 lg:ml-10 sm:ml-72 mt-4">
          <div className="flex flex-row justify-between pt-3 ">
            <div className="pl-5 font-semibold text-xl">Prafull Kumar</div>
          </div>
          <div className="pl-5 pt-3">Course Enrolled(23)</div>

          <div className="flex flex-col pt-3">
            <div className="flex flex-row ml-6 sm:flex-col md:flex-col">
              <div className="h-8 w-20 border border-[black] rounded-2xl pl-3 ml-3 ">
                UI/UX
              </div>
              <div className="h-8 w-24 border border-[black] rounded-2xl pl-3 ml-3 ">
                Photoshop
              </div>
              <div className="h-8  border border-[black] rounded-2xl pl-3 ml-3 ">
                Illustator
              </div>
            </div>

            <div className="flex flex-row ml-6 sm:flex-col md:flex-col">
              <div className="h-8 w-20 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                Python
              </div>
              <div className="h-8 w-24 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                MERN
              </div>
              <div className="h-8 w-14 border border-[black]  rounded-2xl pl-3 ml-3 mt-2">
                Java
              </div>
            </div>
          </div>

          <div className="p-3 ">
            Referral Amount
            <CurrencyRupeeRounded />{" "}
            <span className="font-medium text-xl"> 485</span>
          </div>
        </div>
      </div>

      <div className="text-[#881088]  font-medium m-4 pl-64">
        Term & Conditions
      </div>
    </>
  );
};

export default Page2;
