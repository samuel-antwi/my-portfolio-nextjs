import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children, title }) => {
  return (
    <div className='font-futura  text-gray-50'>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
