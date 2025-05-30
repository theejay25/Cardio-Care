import { PiUserCircleCheckLight } from "react-icons/pi"




function SideBar() {

  return (
    <>
        <div
            className={`side-bar-div`}
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