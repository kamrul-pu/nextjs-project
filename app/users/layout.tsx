export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-4">
            {}
            <h1 style={{color: "red"}} className="text-2xl font-bold mb-4">THis is user routes</h1>
            {children}
        </div>
    );
}