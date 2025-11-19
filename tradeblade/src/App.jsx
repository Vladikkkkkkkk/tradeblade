import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rectangle from './components/Rectangle/Rectangle';
import Numbers from './components/Numbers/Numbers';
import DealsSlider from './components/DealsSlider/DealsSlider';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Rectangle fileName="rectangle.svg" />
        <Numbers />
        <DealsSlider />
        <Rectangle fileName="rectangle.svg"/> 
        <About />
        <Features />
        <Rectangle fileName="rectangle-purple.svg" />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App;
