import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from "./Componenti/Navbar.jsx";
import MyFooter from './Componenti/Footer.jsx';
import Welcome from './Componenti/Welcome.jsx';
import AllTheBooks from './Componenti/AllTheBooks.jsx';



function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>

  );
}

export default App;
