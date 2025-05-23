import type React from "react"

interface props{
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
    classname?: string;
}


function FloatInfo({children, classname, title, subTitle} : props) {
  return (
    <>
     <div className={classname}>
                {children}
              <div>
                <p className="font-semibold text-blue-600">{title}</p>
                <p className=" text-[12px]">{subTitle}</p>
              </div>
            </div>
    </>
  )
}

export default FloatInfo