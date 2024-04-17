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
        <Link className="fixed right-[8px] bottom-[8px] py-[8px] px-[16px] bg-main-dark rounded-[12px] text-tile-gray" href="/debug">Debug</Link>
    </main>
  );
}
        