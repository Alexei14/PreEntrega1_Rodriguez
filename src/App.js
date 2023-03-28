
import './App.css';
import NavBar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/itemlist container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
     <ItemListContainer greeting={'Cumple tus sueños, sé como ellos'}/>
    </div>
  );
}

export default App;
