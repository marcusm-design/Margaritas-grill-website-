import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import FullMenu from './components/FullMenu';
import Location from './components/Location';
import Footer from './components/Footer';
import FloralAccent from './components/FloralAccent';

export default function App() {
  return (
    <>
      <FloralAccent position="top-left" />
      <FloralAccent position="top-right" />
      <FloralAccent position="bottom-left" />
      <FloralAccent position="bottom-right" />

      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <FullMenu />
        <Location />
      </main>
      <Footer />
    </>
  );
}
