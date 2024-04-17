import DefButton from "@/components/Button";
import ButtonGroup from "@/components/ButtonGroup";
import PageHeader from "@/components/PageHeader/header/Blank";
import PageHeaderEvo from "@/components/PageHeaderEvo";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex flex-col items-center min-h-smscreen bg-bg-dark relative">
            {children}
        </main>
    );
  }
  