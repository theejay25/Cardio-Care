import verify from '../assets/img/authpics/img/verify.png'

function VerfiyPage() {
  return (
    <>
        <div className="flex justify-center items-center bg-[#f8f5f5] h-[100dvh]">
            <div className="bg-white flex flex-col justify-center items-center p-5">
                <div>
                    <h2 className="text-black text-center font-bold">Verify Your Account</h2>
                    <img src={verify} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default VerfiyPage