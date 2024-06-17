import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boilerplates",
  description: "Boilerplates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#10002b] my-[2rem]">{children}</body>
    </html>
  );
}
