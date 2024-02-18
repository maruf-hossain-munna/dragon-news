import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Old from "@/utils/Old";
import Header from "@/components/shared/Header";


const inter = Inter({
  subsets: ["latin"],
  variable: "--inter"
});

// const old = Old({
//   subsets: ["latin"],
//   variable: "--old"
// });

export const metadata = {
  title: "Dragon News",
  description: "Developed by Maruf Hossain Munna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
          <NavBar />
        </header>
        <main className="min-h-screen mt-10 mb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
