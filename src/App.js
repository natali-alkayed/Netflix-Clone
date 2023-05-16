import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar';
import Home from './componentes/Home';
import FavList from './componentes/FavList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} /> 
      </Routes>
    </>
  );
}

export default App;
