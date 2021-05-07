import Link from 'next/link';
import Image from 'next/image'; //yo use garaese width height define garnu parcha tala image ma

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="/favicon.ico" alt="#"/>  
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/prabesh"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;