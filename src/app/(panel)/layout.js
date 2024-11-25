import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <header className="w-full p-4 bg-blue-200">
            Profile RootLayout Header
          </header>
          <div className="flex-1 p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
