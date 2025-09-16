import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div id="l-container" className="l-container">
        <main id="l-main" role="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutDefault;
