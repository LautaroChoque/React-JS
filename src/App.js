import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Proximamente ''Bienvenidos a Mates Lagoa''"}/>
      
    </div>
  );
}

export default App;
