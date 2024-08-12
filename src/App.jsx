import Navbar from './Components/Navbar'
import Presentation from './Components/Presentation';
import Sobre from './Components/Sobre'
import Experiências from './Components/Experiências';
import Projetos from './Components/Projetos';
import Footer from './Components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {

  AOS.init({
    duration: 1200,
    easing: "ease-in-out"
  });

  return (
    <>
      <Navbar />
      <Presentation />
      <Sobre />
      <Experiências />
      <Projetos />
      <Footer></Footer>
    </>
  )
}

export default App
