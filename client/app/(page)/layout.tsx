import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { MenuContextProvider } from "../contexts/MenuContext";
import AnimationBackgroundWrapper from "../components/Animation/AnimationBackgroundWrapper";

export const metadata: Metadata = {
  title: "Space Tourism",
  description:
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="relative">
          <MenuContextProvider>
            <AnimationBackgroundWrapper>
              <Sidebar />
              <Header />
              {children}
            </AnimationBackgroundWrapper>
          </MenuContextProvider>
        </div>
      </body>
    </html>
  );
}
