import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./components/ReduxProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic-Resume-Designer",
  description: "Build your Resume and get hired",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENTID}`}
        >
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer/>
          </ReduxProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
