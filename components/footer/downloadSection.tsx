
export const DownloadSection = () => (
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
        <div className="flex flex-col space-y-4">
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