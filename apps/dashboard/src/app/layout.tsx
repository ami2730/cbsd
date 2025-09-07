import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
