import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@code-hike/mdx/dist/index.css";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZQ42 - Easy background jobs for serverless functions",
  description:
    "Easy background jobs for serverless functions like Next.js in Vercel",
  keywords: "vercel, nextjs, background jobs, serverless",
  openGraph: {
    title: "EZQ42 - Easy background jobs for serverless functions",
    description:
      "Easy background jobs for serverless functions like Next.js in Vercel",
    url: "./",
    siteName: "EZQ42",
    images: "https://ezq42.com/index.webp",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://umami.magic.coolify.nico.fyi/script.js"
        data-website-id="ebf2c61c-e310-4954-8f12-3a25a25743ee"
        defer
      />
      <body className={inter.className}>
        <main className="prose max-w-7xl w-full pb-8 dark:prose-invert mx-auto p-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
