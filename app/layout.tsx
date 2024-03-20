import "@/app/globals.css";
import { notoSansKR } from "./ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "컴퓨터 수리를 더 안전하게!",
  description: "컴퓨터를 수리할 때 덤탱이를 맞지 않도록 안전한 서비스를 제공합니다!",
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
        <Analytics />
      </body>
    </html>
  );
}
