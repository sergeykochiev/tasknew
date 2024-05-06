import PageHeader from "@/components/PageHeader";
import PageHeading from "@/components/PageHeading";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (<>
      <PageHeader headings={[<PageHeading>Добро пожаловать!</PageHeading>]}/>
      {children}
    </>
    );
  }