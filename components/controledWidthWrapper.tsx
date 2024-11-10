import React from 'react'

const ControledWidthWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="xl:w-[75%] lg:w-[80%] md:w-[90%] w-[95%] flex flex-col items-center justify-center  " >

                {children}

            </div>
        </div>
    )
}

export default ControledWidthWrapper