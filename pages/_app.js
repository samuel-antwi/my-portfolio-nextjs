import '../styles/globals.css';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import AOS from 'aos';
import { useEffect } from 'react';
import { FormspreeProvider } from '@formspree/react';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <QueryClientProvider client={client}>
      <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_ID}>
        <Component {...pageProps} />
      </FormspreeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
