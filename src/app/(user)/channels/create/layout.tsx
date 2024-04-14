import PageHeader from "@/components/PageHeader/header/Blank";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex flex-col items-center bg-bg-dark min-h-smscreen">
            {children}
        </main>
    );
  }