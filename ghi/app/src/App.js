import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddPotentialCustomerForm from './PotentialCustomerForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import SaleRecordForm from './CreateSaleForm'
import TechForm from './TechForm';
import ServiceApptForm from './ServiceApptForm';
import ServiceApptsList from './ServiceApptsList';

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
          <Route path='service/tech/' element={<TechForm />} />
          <Route path='service/appt/' element={<ServiceApptForm />} />
          <Route path='/service/appt/list' element={<ServiceApptsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
