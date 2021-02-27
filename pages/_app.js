import '../styles/globals.css';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import AOS from 'aos';
import { useEffect } from 'react';

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
