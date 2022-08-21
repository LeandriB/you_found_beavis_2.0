import './App.css'; // currently overrides some of my CSS fix this
import Header from './components/Header'
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
