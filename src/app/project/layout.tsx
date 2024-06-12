import Header from "@/components/header/header";
import MonthContextProvider from "@/components/header/month-context-provider";
import Navigation from "@/components/navigation/navigation";

export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="w-full">
        <MonthContextProvider>
          <Header />
          {children}
        </MonthContextProvider>
      </div>
    </div>
  );
}
