import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (hash && pathname === '/') {
      const id = hash.replace('#', '');
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          requestAnimationFrame(attempt);
        }
      };
      requestAnimationFrame(attempt);
    } else if (pathname !== prevPathname.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash && pathname !== '/') {
      navigate(`/${hash}`);
    }
    prevPathname.current = pathname;
  }, [pathname, hash, navigate]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
