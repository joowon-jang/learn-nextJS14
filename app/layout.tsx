import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | NextJS 연습",
    default: "NextJS 연습",
  },
  description: "SEO를 동적으로 생성해서 크롤러에 제공하지 못하는 문제를 해결할 수 있는 것 같다",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
