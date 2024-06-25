import "./globals.css";

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
      <body className={`bg-slate-800 md:px-2 `}>
        <div className="container mx-auto  ">
          <div className=" flex items-center justify-center  ">{children}</div>
        </div>
      </body>
    </html>
  );
}
