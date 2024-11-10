import React from 'react'
import { P } from '../ui/typography/P'
import { TypographyH1 } from '../ui/typography/TypegraphtH1'
import { SecureMobiles } from './secureMobile'





export const SecureFolks = () => {
    return (
        <div className="flex flex-col 2xl:flex-row items-center justify-between  gap-8  w-full  ">


            {/* Mobiles Section */}
            <div className="flex flex-1 justify-center lg:justify-end w-full h-full">

                <SecureMobiles className="max-w-full max-h-full" />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-center flex md:block flex-col items-center justify-center lg:text-left self-start px-4  sm:px-0 w-full ">
                <TypographyH1 className="">
                    Free chat and video calls
                </TypographyH1>

                <P className=" w-[75%] md:w-full">
                    Use our free chat messenger and video calling services to talk to your prospect.
                </P>
            </div>






        </div>
    )
}

export default SecureFolks