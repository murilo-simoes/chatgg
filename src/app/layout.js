export const metadata = {
  title: "ChatGG",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="app" />
        <div id="modals" />
        {children}
      </body>
    </html>
  );
}
