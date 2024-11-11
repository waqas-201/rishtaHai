import React from 'react'
import { P } from '../ui/typography/P'
import { Mobiles } from './mobile'
import { TypographyH1 } from '../ui/typography/TypegraphtH1'

const Folks = () => {
    return (
        <div className="flex flex-col 2xl:flex-row items-center justify-between gap-8 ">

            {/* Text Section */}
            <div className="flex-1 text-center flex md:block flex-col items-center justify-center lg:text-left self-start px-4  w-full  ">
                <TypographyH1 className="text-primary text-center text-xl">
                    Match with genuine folks with complete security!
                </TypographyH1>

                <P className=" text-center w-full">
                    Rishta hai is Pakistan’s most trusted matrimonial site which has helped thousands of people like you to find their perfect life partner.
                </P>
            </div>

            {/* Mobiles Section */}
            <div className="flex flex-1 justify-center lg:justify-end w-full h-full ">
                <Mobiles className="max-w-full max-h-full" />
            </div>




        </div>
    )
}

export default Folks
