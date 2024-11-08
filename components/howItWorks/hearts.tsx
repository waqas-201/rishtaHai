export const HeartSection = () => {
    return (
        <div>
            <div className=" flex items-center justify-center bg-background  ">
                <div className="text-center">
                    <div className="flex items-center justify-center flex-wrap md:px-0 lg:px-0  px-4 ">
                        {["Get", "Ready", "With", "Us"].map((word, index, array) => (
                            <div key={word} className="flex items-center">
                                <span className="text-4xl md:text-5xl font-bold text-primary">
                                    {word}
                                </span>
                                {index !== array.length - 1 && (
                                    <div className="w-2 h-2 rounded-full bg-primary mx-2" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* hearts sections  */}
                    <div className="mt-6 flex items-center justify-center rounded-full">
                        <div className="w-8 h-[2px] bg-primary/50" />
                        <div className="mx-2">
                            <span className="text-primary/70 mx-0.5">♥</span>
                            <span className="text-primary/70 mx-0.5">♥</span>
                            <span className="text-primary/70 mx-0.5">♥</span>
                        </div>
                        <div className="w-8 h-[2px] bg-primary/70" />
                    </div>
                </div>
            </div>
        </div>
    );
};