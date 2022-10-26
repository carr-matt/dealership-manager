import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddPotentialCustomerForm from './PotentialCustomerForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="sales/person" element={<AddSalesPersonForm/>} />
          <Route path="sales/customer" element={<AddPotentialCustomerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
