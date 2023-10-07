// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg'

// fonts
import { Sora } from "next/font/google"; '@next/font/google';

//  font assing
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});


const Layout = ({ children }) => {
  return (
    <html lang="en">
    <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>


      <TopLeftImg />
      <Nav/>

      <Header/>

      {children}
    </body>
  </html>

  );
};

export default Layout;
