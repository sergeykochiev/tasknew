import Header from "@/components/Header/header/full";
import PageHeader from "@/components/PageHeader/header/Blank";
import FullPageHeader from "@/components/PageHeader/header/Full";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div >
            <Header />
            {children}
        </div>
    );
  }
  