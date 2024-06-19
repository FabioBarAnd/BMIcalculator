import Calculadora from './components/Calculadora';
import Header from './components/Header';
import Imc from './components/Imc';
import Significadoimc from './components/Significadoimc';
import BonsHabitos from './components/BonsHabitos';
import tabela from './components/Significadoimc/tabela-imc.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/home' element={<Imc/>}/>
          </Routes>
          <Routes>
            <Route path='/home' element={<Significadoimc/>}/>
          </Routes>
          <Routes>
            <Route path='/home' element={<BonsHabitos/>}/>
          </Routes>
      </BrowserRouter>
      <Calculadora/>           
      <Imc/>
      <Significadoimc imagem={tabela} alt="Tabela de IMC"/>
      <BonsHabitos/>
    </>
  );
}

export default App;
