import React from 'react'

const BigHeader = ({title, subTitle, alignedLeft}) => {
    const textAlignment = alignedLeft ? "text-left" : "text-right"
    return (
            <div className=''>
              <h1 className={`font-bold text-xl lg:text-6xl uppercase ${textAlignment}`}>{title}</h1>
              <hr className="w-full border-2 mb-6"/>
            <h2 className={`text-sm lg:text-6xl swhong-font ${textAlignment}`}> {subTitle} </h2>
        </div>
    )
}

export default BigHeader
