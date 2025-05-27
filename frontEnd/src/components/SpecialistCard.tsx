import { FaAngleDoubleRight } from "react-icons/fa"


interface props {
    children?: React.ReactNode;
    name?: string;
    title?:string;
    subTitle?:string;
}

function SpecialistCard({ 
    children, 
    name, 
    title, 
    subTitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nesciunt molestias similique ' 
}: props) {
  return (
    <>
        <div className="bg-white w-[45vw] lg:w-[20vw] rounded-md">
            {children}

            <div className="p-3">
                <p className="font-bold text-xl mb-2">{name}</p>
                <p className="text-gray-500 font-bold mb-2 text-lg">{title}</p>
                <p>{subTitle}</p>
                <button className="inline-flex p-4 items-center gap-3">
                    Learn more
                    <FaAngleDoubleRight />
                </button>
            </div>
        </div>    
    </>
  )
}

export default SpecialistCard