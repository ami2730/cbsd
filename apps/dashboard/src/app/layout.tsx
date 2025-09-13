import type { Metadata } from "next";
import { Sidebar } from "@repo/ui/components/sidebar"
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
       
      <body>
       <div className="flex">
         <Sidebar />
       <div>
        {children}
       </div>
       </div>
      </body>
    </html>
  );
}
