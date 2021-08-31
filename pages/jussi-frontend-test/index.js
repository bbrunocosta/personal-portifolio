import Header from './components/header'
import Breadcrum from './components/breadcrum'
import Brands from './components/brands'
import Solutions from './components/solutions'
import About from './components/about'
import CallAction from './components/call-action'
import KeepInTouch from './components/keep-in-touch'
import Footer from './components/footer'
import { UseScrollProvider } from './hooks/useScroll'
function Desktop1() {
  return (
      <UseScrollProvider>
        <Header/>
        <main>
          <Breadcrum/>
          <Brands/>
          <Solutions/>
          <About/>
          <CallAction/>
          <KeepInTouch/>
        </main>
        <Footer/>
      </UseScrollProvider>
  );
}
  export default Desktop1;