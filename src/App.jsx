import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from "./Componenti/Navbar.jsx";
import MyFooter from './Componenti/Footer.jsx';
import Welcome from './Componenti/Welcome.jsx';
import AllTheBooks from './Componenti/AllTheBooks.jsx';
import fantasyData from './Data/fantasy.json'
import SingleBook from './Componenti/SingleBook.jsx';
import BookList from './Componenti/BookList';


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <SingleBook book={fantasyData[0]} />
      <BookList books={fantasyData} />
      <MyFooter />
    </div>

  );
}

export default App;
