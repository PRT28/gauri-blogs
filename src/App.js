import Route from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Header />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
