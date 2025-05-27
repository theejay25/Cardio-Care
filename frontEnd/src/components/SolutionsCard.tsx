import { useState } from "react";

interface props {
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
}


function SolutionsCard({ 
    title, 
    subTitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit', 
    children 
}: props) {
    
    const [hover, setHover] = useState(false)

  return (
    <>
        <div 
            className={`bg-[#83e7ef] w-46 p-3 lg:p-5 rounded-md duration-100 cursor-pointer ${hover ? 'bg-blue-500 text-white' : ''}`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {children}
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <p>{subTitle} </p>
        </div>
    </>
  )
}

export default SolutionsCard