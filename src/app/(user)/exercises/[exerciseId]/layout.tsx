
export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex flex-col items-center">
        {children}
    </div>
}
