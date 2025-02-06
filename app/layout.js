export const metadata = {
  title: {
    template: "%s | SkillUp",
    default: "SkillUp Services",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
