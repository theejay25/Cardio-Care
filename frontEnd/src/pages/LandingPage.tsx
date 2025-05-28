import axios from "axios"
import { useEffect, useState } from "react"

//icon imports
import { BsMenuButtonWide } from "react-icons/bs";
import { FaRegHeart, FaRegWindowClose } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaChild, FaPersonPregnant } from "react-icons/fa6";
import { GiHealthNormal, GiHeartBeats } from "react-icons/gi";
import { MdElderly, MdLocalHospital, MdSelfImprovement } from "react-icons/md";

// component import
import FloatInfo from "../components/FloatInfo";
import SolutionsCard from "../components/SolutionsCard";
import SpecialistCard from "../components/SpecialistCard";

// image imports
import MedWriteUp from '../assets/img/med write up image1.jpeg'
import MedWriteUp2 from '../assets/img/med write up image2.jpeg'
import Doctor from '../assets/img/DoctorPic1.png'
import WeDo from '../assets/img/we do bg2.jpeg'
import Logo from '../assets/img/logo.png'
import makine from '../assets/img/makine.png'
import arisu from '../assets/img/arisu.png'
import deng from '../assets/img/deng.png'
import chisato from '../assets/img/chisato.png'

function LandingPage() {

  const [dropDown, setDropDown] = useState(true)

  const doctors = ['Select a Specialist', 'Doctor Makine', 'Doctor Arisu', 'Doctor Deng']

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

        <div className="p-5 lg:inline-flex mb-5">

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

          <img src={WeDo} alt="" className="rounded-md md:ml-40"/>

        </div>

        {/* Team Section */}

      <div className="bg-[#e2fafb] mb-4 py-4">
        
        <div className="flex flex-col items-center">
          <h2 className="text-center text-blue-500 font-semibold text-lg mb-4">Our Team</h2>
          <h2 className="text-center text-black font-semibold text-xl mb-4">Meet Our Team of Specialists</h2>

          <p className="text-center text-gray-700 lg:w-[750px]">
            Our team of board-certified cardiologists, surgeons, 
            and healthcare professionals brings decades of combined experience to deliver exceptional cardiac care. 
            We work collaboratively to ensure you receive the most advanced, personalized treatment—because your heart deserves 
            the best.
          </p>
        </div>

        <div className="mt-5 p-1 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:ml-11">
          <SpecialistCard name="Doctor Chisato" title="Pediatrician">
            <img src={chisato} alt="Chill"  className="mb-4 h-45 lg:h-50 w-full bg-gray-400"/>          
          </SpecialistCard>
          <SpecialistCard name="Doctor Arisu" title="Cardiographer">
            <img src={arisu} alt="Chill"  className="mb-4 h-45 lg:h-50 w-full bg-gray-400"/>          
          </SpecialistCard>
          <SpecialistCard name="Doctor Deng" title="Cardio surgeon">
            <img src={deng} alt="Chill"  className="mb-4 h-45 lg:h-50 w-full bg-gray-400"/>          
          </SpecialistCard>
          <SpecialistCard name="Doctor Makine" title="Consultant">
            <img src={makine} alt="Chill"  className="mb-4 h-45 lg:h-50 w-full bg-gray-400"/>          
          </SpecialistCard>
        </div>
          
     
      </div>

      {/*contact and about*/}

      <div className="p-4 lg:inline-flex lg:gap-3 mb-4">
        <div className="lg:w-[50%]">

          <h2 className="font-bold text-center text-lg mb-4">Helping Patients From Around The World</h2>

          <p className="text-center mb-4">
            At Cardio-Care, we are committed to providing exceptional healthcare 
            to patients from all corners of the globe. Our mission is to deliver 
            world-class medical treatment, personalized care, and compassionate 
            support to every individual who walks through our doors, regardless of where they come from.
          </p>

          <h2 className="text-blue-500 font-semibold text-center mb-2">Why Patients Trust Us</h2>

          <ul className="list-disc p-4">
            <li className="mb-3">
              <h2 className="font-semibold">Internationally Recognized Expertise</h2>  
              Our team of highly skilled specialists is trained in the latest medical advancements, ensuring the best possible outcomes.
            </li>
            <li className="mb-3">
              <h2 className="font-semibold">Multilingual Support</h2>
              We break language barriers with multilingual staff and translation services, making healthcare accessible to all.
            </li>
            <li className="mb-3">
              <h2 className="font-semibold">Seamless Medical Travel Assistance</h2>
              From visa support to accommodation arrangements, we make international medical journeys smooth and stress-free.
            </li>
            <li className="mb-3">
              <h2 className="font-semibold">Cutting-Edge Technology</h2>
              Equipped with state-of-the-art facilities, we offer advanced diagnostics and treatments tailored to each patient’s needs.
            </li>
          </ul>
  
        </div>

        <div className="lg:w-[50%] lg:mt-15">

          <h2 className="font-semibold text-center mb-5">Book An Appointment</h2>

          <div className="mr-5">
            <form action="" className="grid grid-cols-2 gap-4">
              <div className="w-46 sm:w-86 xl:w-82 lg:w-58">
                <label htmlFor="name" className="font-semibold block mb-1">Patient Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="" 
                  className="bg-[#fcf9f9] w-full p-3 rounded-md border-1 truncate"
                  placeholder="Name"
                  />
              </div>
              <div className="w-46 sm:w-86 xl:w-82 lg:w-58">
                <label htmlFor="email" className="font-semibold block mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="" 
                  className="bg-[#fcf9f9] w-full p-3 rounded-md border-1 truncate"
                  placeholder="Email"
                  />
              </div>
              <div className="w-46 sm:w-86 xl:w-82 lg:w-58">
                <label htmlFor="Phone Number" className="font-semibold block mb-1">Phone Number</label>
                <input 
                  type="email" 
                  name="Phone Number" 
                  id="" 
                  className="bg-[#fcf9f9] w-full p-3 rounded-md border-1 truncate"
                  placeholder="Phone"
                  />
              </div>
              <div className="w-46 sm:w-86 xl:w-82 lg:w-58">
                <label htmlFor="Date" className="font-semibold block mb-1">Date</label>
                <input 
                  type="date" 
                  name="Date" 
                  id="" 
                  className="bg-[#fcf9f9] w-full p-3 rounded-md border-1 truncate"
                  />
              </div>
            
              <div className="col-span-2">
                <label htmlFor="Doctor" className="font-semibold mb-2">Select a Specialist</label>
                <select name="Doctor" id="" className="w-full h-10 text-center bg-[#fcf9f9] border-1 rounded-md">
                  {doctors.map( (doctor, i ) => (
                    <option key={i} value={doctor} className="text-center">{doctor}</option>
                  ))}                  
                </select>
              </div>

              <div className="col-span-2">
                <label htmlFor="Text-area" className="block font-semibold mb-1">More Information</label>
                <textarea
                  name="Text-area"
                  id=""
                  placeholder="Input your bio..."
                  className="bg-[#fcf9f9] p-3 w-full border-1"
                />
              </div>

              <input 
                type="submit" 
                value="Submit"
                className="col-span-2 bg-blue-500 text-white p-3 cursor-pointer text-xl hover:bg-blue-700 duration-100"
               />
              
            </form>
          </div>

        </div>

      </div>

      {/* footer */}

      <div className="bg-[#7dd7ec] p-5">

        <div className="mb-4">
          <h2 className="font-bold text-center text-lg mb-2">Compassionate Care for Your Heart, Close to Home</h2>

          <p className="text-center">
            At Cardio-Care, we are dedicated to providing exceptional cardiac care with expertise, innovation, and compassion. 
            Whether you need preventive screenings, advanced treatments, or personalized rehabilitation, 
            our team is here to support your heart health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-12 lg:ml-10">

        <ul className="text-center lg:text-left lg:w-fit lg:ml-24">
          <h2 className="font-bold text-center mb-2 lg:text-left">Contact Us</h2>
          <li className="mb-2">📍 [Clinic/Hospital Address]</li>
          <li className="mb-2">📞 [Phone Number]</li>
          <li className="mb-2">✉ [Email Address]</li>
          <li className="mb-5">🕒 [Operating Hours]</li>
        </ul>
        <ul className="text-center lg:text-left lg:w-fit">
          <h2 className="font-bold text-center mb-2 lg:text-left ">Emergency & Support</h2>
          <li className="mb-2">🩺 24/7 Cardiac Helpline: +1 234-568</li>
          <li className="mb-2">🚑 Urgent Appointments: Same-day for urgent cases</li>
          <li className="mb-5">💙 Support Groups: Join our heart health community</li>
        </ul>
        <ul className="text-center lg:text-left lg:w-fit">
          <h2 className="font-bold text-center mb-2 lg:text-left">Resources & Education</h2>
          <li className="mb-2">📖 Heart Health Guides – Free downloadable eBooks</li>
          <li className="mb-2">🎥 Patient Webinars – Live Q&As with cardiologist</li>
          <li className="mb-5">❤️ Recovery Tips – Nutrition, exercise, and stress management</li>
        </ul>
        <ul className="text-center lg:text-left lg:w-fit">
          <h2 className="font-bold text-center mb-2 lg:text-left">Visit or Connect</h2>
          <li className="mb-2">🏥 Location: [Address] – [Map Link]</li>
          <li className="mb-2">📧 Email: [Contact@HeartCare.com]</li>
          <li className="mb-2">📱 Follow Us: [FB/IG/Twitter Icons]</li>
        </ul>

        </div>

      </div>


    </div>
  )
}

export default LandingPage