import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddPotentialCustomerForm from './PotentialCustomerForm';
import ManufacturerForm from './ManufacturerForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales">
          <Route path="person" element={<AddSalesPersonForm/>} />
          <Route path="customer" element={<AddPotentialCustomerForm />} />
          </Route>
          <Route path= "manufacturer">
          <Route path="new" element={<ManufacturerForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
