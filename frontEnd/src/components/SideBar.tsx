import { PiUserCircleCheckLight } from "react-icons/pi"
import { useState } from "react"




function SideBar() {

    const [hover, setHover] = useState(true)

    //secondary test

  return (
    <>
        <div
            onMouseOver={() => setHover(false)}
            onMouseOut={() => setHover(true)}
            className={`side-bar-div  ${hover ? 'w-10' : 'w-50' }`}
        >
            <p className={`side-texts`}>
            <PiUserCircleCheckLight className="size-10" />
            Username
            </p>

            <div>
                <ul>

                </ul>
            </div>
        </div>
    </>
  )
}

export default SideBar