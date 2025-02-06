import "@/app/_styles/globals.css";
import { manrope } from "./fonts/font";

export const metadata = {
  title: {
    template: "%s | SkillUp",
    default: "SkillUp Services",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}
