import "@/styles/global.css";
import GlassPane from "@/lib/components/glass-pane";

type DashLayoutProps = {
  children: any;
}

export default function DashboardRootLayout({ children }: DashLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}