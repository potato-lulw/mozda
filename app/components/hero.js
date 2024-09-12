import React from 'react'

const Hero = () => {
    return (
        <div className="mt-6 rounded-md mb-10 flex lg:flex-row flex-col w-full max-w-[1024px] text-white">
            <div className="h-[400px] justify-between items-center flex flex-col bg-gradient-to-b from-myPink to-myPurple w-[35%] rounded-tl-md rounded-bl-md p-6 pt-6 gap-0">
                <div className="flex-grow space-y-5">
                    <h1 className="font-semibold text-4xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="border-t border-white w-full pt-3 font-medium text-center cursor-pointer">
                    Find out more!
                </span>
            </div>
            <div className=" bg-myPurple h-[400px] flex-grow rounded-tr-md rounded-br-md justify-center items-center flex p-6">
                poggeers
            </div>
        </div>
    )
}

export default Hero