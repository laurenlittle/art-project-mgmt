import "@/styles/global.css";
import GlassPane from "@/lib/components/glass-pane";

type AuthLayoutProps = {
  children: any;
}

export default function AuthRootLayout({ children }: AuthLayoutProps) {
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