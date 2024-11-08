import SvgComponent from "../icons/MatrimonialserviceIcon";
import { P } from "../ui/typography/P";
import { TypographyH4 } from "../ui/typography/TypoGraphyH4";

type BoxWrapperProps = {
    h2Text1: string;
    h2Text2: string;
    pText1: string;
    pText2: string;
}

// MatrimonialService.tsx
const BoxWrapper = ({ h2Text1, h2Text2, pText1, pText2 }: BoxWrapperProps) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6 text-center max-w-sm mx-auto">
                {/* Circle Icon Container */}
                <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-green-100 rounded-full"></div>
                    <div className="absolute inset-2 bg-green-50 rounded-full flex items-center justify-center">
                        {/* Globe Icon */}
                        <SvgComponent />
                    </div>
                </div>

                {/* Text Content */}
                <TypographyH4 className="text-primary/70">
                    {h2Text1}

                    <br />
                    {h2Text2}
                </TypographyH4>

                <P className="text-gray-600 text-sm md:text-base">
                    {pText1}
                    <br />
                    {pText2}
                </P>
            </div>
        </div>
    );
};

export default BoxWrapper;