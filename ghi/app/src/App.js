import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechForm from './TechForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='service/tech/' element={<TechForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
