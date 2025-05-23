import type React from "react"

interface props{
    children?: React.ReactNode
}


function FloatInfo({children} : props) {
  return (
    <>
     <div className="absolute p-3 shadow-md shadow-[#333] inline-flex gap-3 rounded-md">
                {children}
              <div>
                <p className="font-semibold text-blue-600">300K+</p>
                <p className=" text-[12px]">Over 300K successful sugeries</p>
              </div>
            </div>
    </>
  )
}

export default FloatInfo