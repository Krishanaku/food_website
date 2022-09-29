// import logo from './logo.svg';
import './App.css';
import Choose from './Components/sub_componentsChoose/Choose';
import Header from './Components/Header';
import Popular from './Components/Sub_componentPopular/Popular';
import Events from './Components/Events';
import From from './Components/Form';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      
      <Header/>
      <Popular/>
      <Choose/>
      <Events/>
      <From/>
      <Footer/>
     
    </div>
  );
}

export default App;
