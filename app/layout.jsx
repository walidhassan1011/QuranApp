import { StoreProvider } from "@/context/Store";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quran Image Generator",
  description: "Generate images of Quran verses with custom colors and fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
