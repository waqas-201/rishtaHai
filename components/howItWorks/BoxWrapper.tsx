import SvgComponent from "../icons/MatrimonialserviceIcon";

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
                <h2 className="text-xl md:text-1xl font-bold text-primary/70 mb-3">
                    {h2Text1}

                    <br />
                    {h2Text2}
                </h2>

                <p className="text-gray-600 text-sm md:text-base">
                    {pText1}
                    <br />
                    {pText2}
                </p>
            </div>
        </div>
    );
};

export default BoxWrapper;