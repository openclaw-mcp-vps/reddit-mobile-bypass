import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedditClean – Browse Reddit Without App Nagging",
  description: "A clean mobile Reddit interface that strips app download prompts and lets you browse freely."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="573200f9-1ee4-4c2f-9dc8-3c7f33772cd6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
