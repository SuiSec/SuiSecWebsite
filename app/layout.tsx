import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuiSec",
  description: "dedicated to the security of the Sui ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
