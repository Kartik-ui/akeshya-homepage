import Footer from "@/components/footer/Footer";
import Navbars from "@/components/navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
