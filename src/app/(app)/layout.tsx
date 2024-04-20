import "../globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
        <Footer />
    </main>
  );
}
        