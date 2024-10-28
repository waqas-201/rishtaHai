import { Metadata } from "next";
import "./globals.css";

import CustomToast from "@/components/customToast";

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
    <html lang="en">
      <body className="font-serif antialiased">

        <CustomToast />
        {children}

      </body>
    </html>
  );
}
