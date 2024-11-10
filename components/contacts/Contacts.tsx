'use client'

import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci"
import ControledWidthWrapper from "../controledWidthWrapper"
import ItemWrapper from "./ItemWrapper"

export const Contacts = () => {
    return <>
        <div className="w-full bg-primary/30 p-6 " >

            <ControledWidthWrapper>
                {/* Pass the Icon without using JSX instantiation */}
                <div className="flex w-full items-start gap-4 md:gap-8 md:items-center flex-wrap flex-col md:flex-row justify-between  " >
                    < ItemWrapper Icon={CiPhone} text1="Helpline 24X7" text2="0987654321" />
                    <ItemWrapper Icon={CiMail} text1="Send Your Queries" text2="info@rishtahai.com" />
                    <ItemWrapper Icon={CiLocationOn} text1="Head Office" text2="Pechs , Karachi, Pakistan" />
                </div>
            </ControledWidthWrapper>

        </div>
    </>
}