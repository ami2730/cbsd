import type { Metadata } from "next";
import SidebarLayout from "./pages/sidebar"
import "@repo/ui/styles/globals.css"
import Header from "@repo/ui/components/header"
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
         <div >
           <Header userName="Amanuel" showNotifications={true} />
        </div>
       <div className="flex py-16">
         <SidebarLayout/>
       </div>
       <div className="">
        {children}
       </div>
      </body>
    </html>
  );
}
