import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr and Mrs Prompt",
  description: "The Brain of the Brain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
