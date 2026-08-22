import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super car website - AbdullahMoin",
  description:
    "Responsive Next Generation Car showcase website with e-commerce eligibility.",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
