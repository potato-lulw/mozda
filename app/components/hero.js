import React from 'react'

const Hero = () => {
    return (
        <div className="mt-6  mb-10 flex lg:flex-row flex-col w-full max-w-[1024px] text-white lg:px-0 px-10">
            <div className="lg:h-[400px] h-[240px]  justify-between items-center flex flex-col bg-gradient-to-b from-myPink to-myPurple lg:w-[35%]  lg:rounded-none lg:rounded-l-lg rounded-t-lg p-6 pt-6 gap-0">
                <div className="flex-grow space-y-5">
                    <h1 className="font-semibold md:text-3xl lg:text-4xl text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="border-t border-white w-full pt-3 font-medium text-center cursor-pointer">
                    Find out more!
                </span>
            </div>
            <div className=" bg-myPink lg:h-[400px] h-[240px] flex-grow lg:rounded-none lg:rounded-r-lg justify-center items-center rounded-b-lg flex p-6">
                poggeers
            </div>
        </div>
    )
}

export default Hero