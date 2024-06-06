import Header from "@/components/header/header";
import Navigation from "@/components/navigation/navigation";

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* navigation */}
      <Navigation />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
