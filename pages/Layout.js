import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";


function Layout({children}) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;