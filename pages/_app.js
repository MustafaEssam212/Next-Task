import '@/styles/globals.css'
import Layout1 from '@/Layouts/Layout1'
import Layout2 from '@/Layouts/Layout2'

export default function App({ Component, pageProps }) {
  // const  = props
  
  const Layouts = {
    'L1': Layout1,
    'L2': Layout2,
  }
  const Layout = Layouts[Component.Layout]

  return <Layout> <Component {...pageProps}  /> </Layout>
}
