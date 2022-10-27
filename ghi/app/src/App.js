import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddPotentialCustomerForm from './PotentialCustomerForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import SaleRecordForm from './CreateSaleForm'

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
            <Route path="new" element={<SaleRecordForm/>} />
          </Route>
          <Route path= "manufacturer">
          <Route path="new" element={<ManufacturerForm />} />
          <Route path="" element={<ManufacturerList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
