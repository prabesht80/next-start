import Head from 'next/head'
import Link from "next/link"
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <>
            <Head>
                <title>NOT Found</title> 
                <meta name="keywords" content="list" />
            </Head>
            <div className="not-found">
                <h1>Oops.....</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;