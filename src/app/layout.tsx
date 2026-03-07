import Navbar from "@/components/navbar";
import { ReduceMotionProvider } from "@/components/reduce-motion-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { isCrawler } from "@/lib/bot-detection";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { FlickeringGridWrapper } from "@/components/flickering-grid-wrapper";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    description: DATA.description,
    card: "summary_large_image",
  },
  verification: {
    google: "0_4pgQBRSzN_NKlgrEtiA-aL3aZCJ93bXbuBq5AGrxQ",
    yandex: "",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  const reduceMotion = isCrawler(userAgent);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-reduce-motion={reduceMotion ? "true" : undefined}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ReduceMotionProvider reduceMotion={reduceMotion}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGridWrapper
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        </ReduceMotionProvider>
      </body>
    </html>
  );
}
