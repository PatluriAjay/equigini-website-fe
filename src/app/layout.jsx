import "./globals.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "EquiGini",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased pt-[72px] `}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
