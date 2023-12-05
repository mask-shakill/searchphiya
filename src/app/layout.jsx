import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default layout;
