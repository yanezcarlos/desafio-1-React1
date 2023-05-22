import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import {moto1, moto2, moto3} from './assets/imgs'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="titulo">
        <Header title="Galería de Imágenes con React"></Header>
      </div>
      <section className='main'>
        <Card url={moto1} title="Moto" desciption="Para disfrutar una conducción emocionante."></Card>
        <Card url={moto2} title="Moto" desciption="Alta tecnología y un diseño clásico de BMW."></Card>
        <Card url={moto3} title="Moto" desciption="Prepárate para vivir la emoción de la libertad sobre dos ruedas."></Card>
      </section>
      <Footer text="Galeria de imágenes de las mejores motos del 2022"></Footer>
    </div>
  );
}

export default App;
