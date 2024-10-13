import { Metadata } from "next";



export const metadata: Metadata = {
    title: "RishtaHai",
    description: "RishtaHai platform is dedicated to helping individuals connect with compatible partners",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div  >

            {children}
        </div>



    );
}
