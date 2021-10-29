import React from 'react'

const BigHeader = ({title, subTitle, alignedLeft}) => {
    const textAlignment = alignedLeft ? "text-left" : "text-right"
    const floatHr = alignedLeft ? "float-left" : "float-right"
    return (
            <div className=''>
              <h1 className={`font-bold text-3xl lg:text-6xl uppercase ${textAlignment}`}>{title}</h1>
              <hr className={`w-11/12 lg:w-full border-2 mb-6 ${floatHr}`}/>
            <h2 className={`text-4xl lg:text-6xl swhong-font ${textAlignment}`}> {subTitle} </h2>
        </div>
    )
}

export default BigHeader
