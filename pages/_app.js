import '../styles/globals.css'
import '../styles/tailwind.css'
import 'aos/dist/aos.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import AOS from 'aos'
import { useEffect } from 'react'
import { FormspreeProvider } from '@formspree/react'
import SnackbarProvider from 'react-simple-snackbar'
import { StateProvider } from '../context/stateProvider'
import Layout from '../components/Layout'

const client = new QueryClient()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: function () {
        const maxWidth = 800
        return window.innerWidth < maxWidth
      },
    })
  })
  return (
    <Layout
      title='Samuel Antwi'
      description='Portfolio | Hello, welcome to my portfolio. My name is Samuel Antwi. I am a  front-end developer.'>
      <QueryClientProvider client={client}>
        <StateProvider>
          <SnackbarProvider>
            <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_ID}>
              <Component {...pageProps} />
            </FormspreeProvider>
          </SnackbarProvider>
        </StateProvider>
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
