import type { Metadata } from "next";
import SidebarLayout from "./sidebar"
import "@repo/ui/styles/globals.css"
export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Gym Dashboard App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body >
       <div className="flex">
         <SidebarLayout/>
       <div>
        {children}
       </div>
       </div>
      </body>
    </html>
  );
}
