import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

// Theme Switcher components
import ScrollContext_Lenis from "@/providers/SmoothScrollContext_lenis";

// Local Fonts  
// 1. import, 2. add to body, 3. add to tailwind config
// 4. use as a className as. font-ogg-reg
const OggRegular = localFont({
  src: [
    {
      path: '../public/fonts/Ogg-Regular-BF646c18fc465e5.ttf',
    },
  ],
  variable: '--font-ogg-reg'
})

export const metadata: Metadata = {
  title: "Nexa - All Your Workflows Connected",
  description: "Unify Gmail, Sheets, Slack, Calendar, AI Agents, and your Website into one seamless SaaS platform. Stop switching between apps and boost your productivity.",
  keywords: ["productivity", "workflow", "automation", "SaaS", "integration", "Gmail", "Slack", "Google Sheets", "AI agents"],
  authors: [{ name: "Nexa Team" }],
  creator: "Nexa",
  publisher: "Nexa",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexa.com",
    title: "Nexa - All Your Workflows Connected",
    description: "Unify Gmail, Sheets, Slack, Calendar, AI Agents, and your Website into one seamless SaaS platform.",
    siteName: "Nexa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa - All Your Workflows Connected",
    description: "Unify Gmail, Sheets, Slack, Calendar, AI Agents, and your Website into one seamless SaaS platform.",
    creator: "@nexa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${OggRegular.variable} relative min-h-[100vh] cf2`}>
      
      <ScrollContext_Lenis>
      {/* <ThemeProvider enableSystem={true} defaultTheme="system"> */}
        {children}
        {/* </ThemeProvider> */}
      </ScrollContext_Lenis>
      </body>
    </html>
  );
}
