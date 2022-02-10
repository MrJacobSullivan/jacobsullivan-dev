import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col items-center min-h-screen w-[45%]">
        <Header />
        <main className="flex justify-center flex-grow w-full prose dark:prose-invert">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
