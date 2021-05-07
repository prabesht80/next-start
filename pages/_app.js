import Layout from '../comps/Layout'
import '../styles/globals.css'
 
//here wrapping layout component this will nested other children 
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
