import type { Metadata } from "next";
import SidebarLayout from "./pages/sidebar"
import "@repo/ui/styles/globals.css"
import Header from "@repo/ui/layouts/header1"
export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body >
        
       <div className="flex py-16">
         <SidebarLayout/>
       </div>
       <div className="">
         <div className=" ">
           <Header  showNotifications={true} />
        </div>
        {children}
       </div>
      </body>
    </html>
  );
}
