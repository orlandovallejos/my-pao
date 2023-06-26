import "./globals.css";
import Nav from "@/components/Nav";

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        
        <Nav />

        <div className="flex">
          <div className="w-1/4 bg-gray-100 p-4">
            <ul>
              <li>
                <a href="#" className="text-blue-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <div className="w-3/4 p-4">
            {props.children}
          </div>
        </div>

        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2022 My Web Page. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
