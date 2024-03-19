import "@/app/globals.css";
import { notoSansKR } from "./ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="-IwdjVOVE-dAeJ3nX9j5ajxBm2FFZvj6gB1g6gcxdbg" />
      </head>
      <body className={notoSansKR.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
