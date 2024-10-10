import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './componentes/Navbar';
import UncontrolledExample from './componentes/Carousel';
import Columna1 from './componentes/column1';
import ObjetivoE from './componentes/ObjetivoE';
import Explicacion from './componentes/Explicacion';
import Fundamentacion from './componentes/Fundamentacion';
import Hero from './componentes/Hero';
import Video from './componentes/ytvideo';
import Obj from './componentes/Spline';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
    <CollapsibleExample />
    <Hero />
    <ObjetivoE />
    <Obj />
    <Columna1 />
    <Explicacion />
    <UncontrolledExample />
    <Fundamentacion />
    <Video />
    <Footer/>
    </div>
  );
}

export default App;
