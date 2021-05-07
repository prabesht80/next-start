import Head from 'next/head'
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

const About = () => {
    return ( 
        <>
            <Head>
                <title>About list</title> 
                <meta name="keywords" content="list" />
            </Head>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quos veniam iusto eius consequuntur minima similique non voluptas accusamus, quisquam delectus, porro fuga mollitia? Aut magnam sed molestias reprehenderit quibusdam!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quos veniam iusto eius consequuntur minima similique non voluptas accusamus, quisquam delectus, porro fuga mollitia? Aut magnam sed molestias reprehenderit quibusdam!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quos veniam iusto eius consequuntur minima similique non voluptas accusamus, quisquam delectus, porro fuga mollitia? Aut magnam sed molestias reprehenderit quibusdam!</p>
            </div>
        </>
     );
}
 
export default About;