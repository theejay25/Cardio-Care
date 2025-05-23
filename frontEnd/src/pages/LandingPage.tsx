import axios from "axios"
import { useEffect, useState } from "react"
import Logo from '../assets/img/logo.png'
import Doctor from '../assets/img/DoctorPic1.png'
import { BsMenuButtonWide } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import FloatInfo from "../components/FloatInfo";
import { FaChild } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
// import { CiSearch } from "react-icons/ci";

function LandingPage() {

  const [dropDown, setDropDown] = useState(true)

  useEffect(() => {


    const fetchData = async () => {

      try{

      const response = await axios.get('http://localhost:8080/fruits');
      
      console.log(response)

      } catch (error) {
        console.error('error message:', error)
      }

    }

    fetchData()

  }, [])

  return (
    <div className="overflow-hidden">

      {/* NavBar section */}
      <div className="bg-blue-100 p-4 inline-flex w-full justify-between border-b-1 lg:py-0">
       
        <div className=" inline-flex items-center">
          <img src={Logo} alt="" className="size-12"/>
          <p className="text-blue-600 font-bold tracking-wider text-xl">Cardio Care</p>
        </div>

        <div
          className="h-full flex justify-center cursor-pointer ml-20 lg:hidden"
          onClick={() => {setDropDown(!dropDown)}}
        >
          { dropDown ? 
          (<BsMenuButtonWide className="size-10" />)
          :(<FaRegWindowClose className="size-10" />)
        }
        </div>

        <ul className={`ul ${ dropDown ? '' : 'mt-16 opacity-100'}`} >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li><button className="bg-blue-600 w-30 p-3 text-white">Get Started</button></li>
        </ul>

      </div>

      {/* Hero section */}
      
      <div>

        <div className="bg-[#e2fafb] p-5 lg:w-full lg:inline-flex">
          <div className="lg:w-[100%] bg-amber-400">
            <form action="" className="mt-4 mb-3">
              <input 
                type="text" 
                name="" id="" 
                className=" p-4 bg-white w-full rounded-md outline-none border-1"
                placeholder={` Search here`}
              />
                <input 
                  type="submit" 
                  value="Search" 
                  className=" bg-blue-600 text-white p-1.5 cursor-pointer rounded-md w-16 absolute mt-3 ml-[-16vw]"
              />
            </form>
            <p className="font-semibold text-2xl">Welcome to where <br /> Your Health Matters Most</p>
          </div>

          <div className="lg:w-[100%] lg:ml-112 bg-red-900">
           
           <FloatInfo 
              title={`300k+`} 
              subTitle="Over 300K successful sugeries"
              classname="float-info p-3 gap-3 mt-12"
              >
              <FaHeartbeat className="text-white bg-blue-600 size-11 p-2"/>
              </FloatInfo>
           
           <FloatInfo 
              title={`50k+`} 
              subTitle="Over 50K pediatricians"
              classname="float-info p-3 gap-3 mt-45 ml-0"
              >
              <FaChild className="text-white bg-blue-600 size-11 p-2"/>
           </FloatInfo>
           
           <FloatInfo 
              title={`500`} 
              subTitle="Over 500 Hospitals"
              classname="float-info p-3 gap-3 mt-80 ml-0"
              >
              <GiHealthNormal className="text-white bg-blue-600 size-11 p-2"/>
           </FloatInfo>



            <img src={Doctor} alt=""  className="ml-29"/>
          </div>

        </div>
      
      </div>


    </div>
  )
}

export default LandingPage