import BlankHeader from "@/components/Header/header/blank";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <BlankHeader />
            {children}
        </div>
    );
  }
  