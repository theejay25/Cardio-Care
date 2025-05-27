import axios from "axios"
import { useEffect, useState } from "react"
import Logo from '../assets/img/logo.png'
import Doctor from '../assets/img/DoctorPic1.png'
import { BsMenuButtonWide } from "react-icons/bs";
import { FaRegHeart, FaRegWindowClose } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import FloatInfo from "../components/FloatInfo";
import { FaChild, FaPersonPregnant } from "react-icons/fa6";
import { GiHealthNormal, GiHeartBeats } from "react-icons/gi";
import MedWriteUp from '../assets/img/med write up image1.jpeg'
import MedWriteUp2 from '../assets/img/med write up image2.jpeg'
import SolutionsCard from "../components/SolutionsCard";
import { MdElderly, MdLocalHospital, MdSelfImprovement } from "react-icons/md";
import WeDo from '../assets/img/we do bg2.jpeg'
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
      <div className="bg-blue-100 p-4 inline-flex w-full justify-between fixed z-100 border-b-1 lg:py-0">
       
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

        <ul className={`ul mt-14 opacity-0  ${ dropDown ? '' : 'mt-16 opacity-100'}`} >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li><button className="bg-blue-600 w-30 p-3 text-white">Get Started</button></li>
        </ul>

      </div>

      {/* Hero section */}
      
      <div>

        <div className="bg-[#e2fafb] p-5 lg:w-full lg:inline-flex mt-17">
        <div className="lg:w-[100%] lg:flex lg:gap-3">
          
          <div className="lg:w-[100%] ">
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
                  className=" hero-search-button"
              />
            </form>
            <p className="font-semibold text-2xl lg:text-4xl sm:text-3xl">Welcome to where <br /> Your Health Matters Most</p>
          </div>

          <div className="lg:w-[100%]">
           
           <FloatInfo 
              title={`300k+`} 
              subTitle="Over 300K successful sugeries"
              classname="float-info p-3 gap-3 mt-12 lg:ml-[10vw] sm:ml-[30vw]"
              >
              <FaHeartbeat className="text-white bg-blue-600 size-11 p-2"/>
              </FloatInfo>
           
           <FloatInfo 
              title={`50k+`} 
              subTitle="Over 50K pediatricians"
              classname="float-info p-3 gap-3 mt-45 ml-0 lg:ml-[10vw] sm:ml-[17vw]"
              >
              <FaChild className="text-white bg-blue-600 size-11 p-2"/>
           </FloatInfo>
           
           <FloatInfo 
              title={`500`} 
              subTitle="Over 500 Hospitals"
              classname="float-info p-3 gap-3 mt-80 ml-0 lg:ml-[10vw] sm:ml-[27vw]"
              >
              <GiHealthNormal className="text-white bg-blue-600 size-11 p-2"/>
           </FloatInfo>



            <img src={Doctor} alt=""  className="ml-29 lg:ml-[20vw] sm:ml-[47vw]"/>
          </div>
        </div>

        </div>
      
      </div>

      {/* Medical write up */}

      <div className="p-3 lg:p-8 lg:inline-flex lg:gap-17">

        <div className="flex flex-col">
        <h2 className="text-blue-500 text-xl mb-3">About Us</h2>

        <h1 className="text-2xl font-bold mb-3">
          Your Heart Deserves the Best Care
        </h1>

        <p className="mb-1 lg:w-[750px]">
              At Cardio-care, we believe a healthy heart is the key to a longer, stronger life. Whether you're managing high blood pressure, recovering from a cardiac event, or simply prioritizing heart health,
              our expert cardiology team is here to guide you every step of the way.
              With cutting-edge diagnostics, personalized treatment plans, and compassionate care, we help you take control of 
              your cardiovascular health. From prevention to recovery, your heart is in the best hands.
        </p>
        <h2 className="mb-1 font-bold text-lg">
          Book your heart check-up today.
        </h2>
        <p className="mb-5">Because every beat matters.</p>
        </div>

        <div className="p-5">
          <img src={MedWriteUp2} alt="" className="size-[57%] rounded-md ml-35 z-10" />
          <img src={MedWriteUp} alt="" className="size-[50%] rounded-md border-10 mt-[-5%] z-30 border-white" />
        </div>


      </div>

      {/*Solutions center */}

        <div className="bg-[#e2fafb] p-5 lg:w-full mt-17 flex flex-col justify-center items-center">
          <h1 className="text-blue-400 text-center text-lg mb-2 font-semibold">Our service</h1>

          <p className="text-center font-bold text-lg mb-4">comprehensive heart-care solutions<br /> for you </p>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4 2xl:w-fit lg:h-[65vh] sm:grid-cols-3 sm:w-[75vw] ">
          <SolutionsCard title="Cardio health">
            <FaHeartbeat className= {`icons-div`} />
          </SolutionsCard>

          <SolutionsCard title="child health">
            <FaChild className= {`icons-div`} />
          </SolutionsCard>

          <SolutionsCard title="Elderly health">
            <MdElderly className= {`icons-div`} />
          </SolutionsCard>

          <SolutionsCard title="Antenatal Care">
            <FaPersonPregnant className= {`icons-div`} />
          </SolutionsCard>

         <SolutionsCard title="Post-Surgery Recovery">
          <MdLocalHospital className= {`icons-div`} />
         </SolutionsCard>

         <SolutionsCard title="Heart Wellness Checkups">
          <FaRegHeart className= {`icons-div`} />
         </SolutionsCard>

         <SolutionsCard title="Fitness for Heart Health">
          <GiHeartBeats className= {`icons-div`} />
         </SolutionsCard>

         <SolutionsCard title="Stress & Heart Health">
          <MdSelfImprovement className= {`icons-div`} />
         </SolutionsCard>
          </div>
        </div>

        {/*What we do*/}

        <div className="p-5 lg:inline-flex">

        <div className="mb-5 lg:mt-25 p-1">

          <h2 className="text-blue-500 capitalize text-lg font-bold mb-4">what we do</h2>

          <h1 className="font-bold text-xl lg:text-2xl">Precision Heart Care for You</h1>

          <p className="mt-4 text-gray-700">  
            We deliver advanced, personalized cardiovascular care to protect and strengthen your heart. Our expert team combines cutting-edge diagnostics, evidence-based treatments, and compassionate support to ensure optimal heart health—because every heartbeat matters.  
          </p>

          <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">  
            <li><span className="font-semibold">Preventive Cardiology:</span> Tailored screenings and lifestyle plans to reduce risks.</li>  
            <li><span className="font-semibold">Advanced Diagnostics:</span> State-of-the-art imaging and testing for accurate results.</li>  
            <li><span className="font-semibold">Minimally Invasive Treatments:</span> Faster recovery with precision procedures.</li>  
            <li><span className="font-semibold">Chronic Condition Management:</span> Comprehensive care for hypertension, arrhythmias, and more.</li>  
          </ul>

        </div>

          <img src={WeDo} alt="" className="rounded-md"/>

        </div>



    </div>
  )
}

export default LandingPage