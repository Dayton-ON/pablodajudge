import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import MyButton from "./MyButton";

/*export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

  export const metadata: Metadata = {
    title: "Calculator",
    description: "It calculates things",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };

  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 object-center"
  fill="bg-amber-400"
  viewBox="0 0 24 24"
  stroke="currentcolor">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>

  export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en" className={`${GeistSans.variable}`}>
  
        <body>{children}</body>
      </html>
    );
  }
  );
}*/


export const metadata: Metadata = {
  title: "Calculator",
  description: "Calculate Things",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        {children}
      </body>
    </html>
  );
}

