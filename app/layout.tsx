import type { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Thriller",
  description: "Thriller Travels",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ padding: 0, margin: 0 }}>
        <Layout> {children}</Layout>
      </body>
    </html>
  );
}
