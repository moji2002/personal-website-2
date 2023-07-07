import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mojtaba Beheshti | Front-end Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-200 px-2 ${inter.className}`} >
        <div className="container mx-auto  ">

        <div className=" flex items-center justify-center h-screen bg-slate-200 ">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
