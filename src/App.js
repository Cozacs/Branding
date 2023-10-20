import './App.css';
import { useState } from 'react';
import Header from './componentes/topo';
import Banner from './componentes/secaoBanner';
import Experiencia from './componentes/secaoExp';
import Footer from './componentes/rodape';

function App() {
  const [ tema, setTema ] = useState("claro");
    
  const alterar = () => {
      tema  === "claro" ? setTema("escuro") : setTema("claro");
  }

  return (
    <div className="App">
    <Header tema={tema} alterar={alterar} />
    <Banner tema={tema}/>
    <Experiencia tema={tema} />
    <Footer tema={tema} />
    </div>
  );
}

export default App;