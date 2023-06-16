import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import list from './components/list';


function App() {
  const nome ='maria'
 return (
    <div className="App">
      <h1>testando css!</h1>
      <Frase/>
      <Frase/>
     <SayMyName nome="Alisson"/>
     <SayMyName nome="João"/>
     <SayMyName nome={nome}/>
     <Pessoa 
     nome="Rodrigo" 
     idade="18" 
     profissao="programador" 
     foto="https://via.placeholder.com/150"/>
     <list />
    
    
     
    </div>
  )
    
}

export default App;
