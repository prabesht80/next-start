import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prabesh lIST | hOME</title> 
        <meta name="keywords" content="list" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos repellat odio consequuntur magnam itaque quibusdam mollitia expedita aut eum. Dolor beatae quae necessitatibus id commodi perferendis hic odit dolore.l Lorem ipsum dolor, sit amet consectetur adipisicing elit. In adipisci nulla distinctio neque numquam esse iste animi recusandae repellat minima voluptate dolorum velit sed debitis, quae architecto cum, eius aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid totam consequuntur perspiciatis obcaecati officia fugit blanditiis iure nemo molestiae assumenda eius eum dolorem aspernatur, accusantium necessitatibus soluta ipsam! Ullam, veritatis.</p>
        <Link href="/prabesh">
          <a className={styles.btn}>See ninjas Listing</a>
        </Link>
      </div>
    </>
  )
}
