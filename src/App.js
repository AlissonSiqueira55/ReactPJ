import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome ='maria'
 return (
    <div className="App">
     <SayMyName nome="Alisson"/>
     <SayMyName nome="João"/>
     <SayMyName nome={nome}/>
     <Pessoa 
     nome="Rodrigo" 
     idade="18" 
     profissao="programador" 
     foto="https://via.placeholder.com/150"/>
    </div>
  )
    
}

export default App;
