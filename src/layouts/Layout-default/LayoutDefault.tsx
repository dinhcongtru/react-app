import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import './index.scss';

const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="l-document">
      <Header />
      <div id="l-container" className="l-container">
        <main id="l-main" role="main-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
