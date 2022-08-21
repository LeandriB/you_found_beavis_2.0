import './App.css'; // currently overrides some of my CSS fix this
import Header from './components/Header'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Contact/>
      <Portfolio/> */}
      <Footer/>
    </div>
  );
}

export default App;
