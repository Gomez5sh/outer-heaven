import "./globals.css";
import Main from "@/components/layouts/main";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Main>{children}</Main>
      </body>
    </html>
  );
}
