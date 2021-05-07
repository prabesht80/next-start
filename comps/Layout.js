import Footer from "./Footer"
import Navbar from "./Navbar"

//navbar and footer will be nested in all element .. app.js 
const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;