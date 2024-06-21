import AuthFooter from "@/components/Footer/Auth";
import { UnauthHeader } from "@/components/Header/Unauthorized";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex flex-col min-h-screen max-h-screen">
        <UnauthHeader/>
        {children}
        <AuthFooter/>
    </div>;
}