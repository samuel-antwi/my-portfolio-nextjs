import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children, title }) => {
  return (
    <div className='font-futura  text-gray-50 '>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
