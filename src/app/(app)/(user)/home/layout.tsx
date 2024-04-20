export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex flex-col items-center min-h-smscreen bg-bg-dark">
            {children}
        </main>
    );
  }
  