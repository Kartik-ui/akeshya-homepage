"use client";
import { useEffect } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", delay: 0, once: true });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Akeshya</title>
        <meta
          name="description"
          content="This website is created by Kartik for demo"
        />
        <link href="/assets/favicon2.png" rel="icon" />
        <link href="/assets/favicon2.png" rel="apple-touch-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
