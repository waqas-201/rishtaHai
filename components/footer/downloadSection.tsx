
export const DownloadSection = () => (
    <div className=" border  md:basis-[20%] w-auto border-red-500">
        <h3 className="text-lg font-semibold ">Download Our App</h3>
        <div className="flex flex-col ">
            <a href="#" className="inline-block">
                <img
                    src="/api/placeholder/120/40"
                    alt="Download on App Store"
                    className="h-10"
                />
            </a>
            <a href="#" className="inline-block">
                <img
                    src="/api/placeholder/120/40"
                    alt="Get it on Google Play"
                    className="h-10"
                />
            </a>
        </div>
    </div>
);