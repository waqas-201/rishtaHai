import React from 'react'
import { TypographyH2 } from '../ui/typography/h2'
import { P } from '../ui/typography/P'

const Special = () => {
    return (
        <section className="flex   justify-between flex-wrap  gap-8  md:gap-12 lg:16 xl=w[65%] w-[90%] ">
            <div className="flex-1 xl:basis-[40%] basis-[80%] min-w-[300px]">
                <TypographyH2 className="text-primary">
                    Find your Special SomeOne from RishtaHai.com
                </TypographyH2>
                <P className="text-justify">
                    RishtaHai.com has been solely developed for helping the Muslim community in all over India to find suitable Muslim brides and grooms. We are a complete Muslim Matrimony site where all can easily find their life partners without any hassles.
                </P>
            </div>

            <div className="flex-1 xl:basis-[50%] basis-[80% min-w-[300px]">
                <TypographyH2 className=" text-primary">
                    Why Choose RishtaHai
                </TypographyH2>
                <P className="text-justify">
                    RishtaHai.com team has the best Relationship Managers from the field, who will be available to you for offering assistance, so that you could make the right choice. We will always be there to help you until you find the perfect match. Our relationship managers will make it easier for you to take decisions and end up with the right life partner. Our users can get a wide range of profiles according to the preferences. Our dedicated customer care will always help to find your life partner.
                </P>
            </div>
        </section>

    )
}

export default Special