import "../globals.css";

export const metadata = {
  title: "Wilfftemple | Premium Minecraft Community",
  description: "A futuristic platform for elite Minecraft creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
