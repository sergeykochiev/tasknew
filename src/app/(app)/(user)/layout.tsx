import Header from "@/components/Header/header/full";
import PageHeader from "@/components/PageHeader/header/Blank";
import FullPageHeader from "@/components/PageHeader/header/Full";

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
  