import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | NextJS 연습",
    default: "NextJS 연습",
  },
  description: "직접 SSG를 거칠 필요가 없다!!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
