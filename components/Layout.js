import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';
import ProgressBar from 'react-scroll-progress-bar';

const Layout = ({ children, title, description }) => {
  return (
    <div className='font-futura  text-gray-50 '>
      <ProgressBar bgcolor='#e31c6d' />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdescription' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{title}</title>
        <link rel='shortcut icon' href='/images/my-avatar.jpeg' />
      </Head>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
