import Header from "@/components/Header/header/full";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
      <Header />
      <div className="flex flex-col items-center bg-bg-dark min-h-smscreen">{children}</div>
    </>      
    );
  }
  