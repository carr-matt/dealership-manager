import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AddSalesPersonForm from './AddSalesPersonForm';
import AddPotentialCustomerForm from './PotentialCustomerForm';
import ManufacturerForm from './ManufacturerForm';
import ManufacturerList from './ManufacturerList';
import AutoForm from './AutomobileForm';
import SaleRecordForm from './CreateSaleForm'
import TechForm from './TechForm';
import ServiceApptForm from './ServiceApptForm';
import ServiceApptsList from './ServiceApptsList';
import CreateModelForm from './CreateModelForm';
import ServiceHistoryList from './ServiceHistoryList';
import SalesPersonHistoryList from './SalesPersonHistory';
import ModelList from './ModelList';
import AutoList from './AutomobileList';
import ListSales from './ListSales';



function App() {
    return (
        <BrowserRouter>
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="sales">
                        <Route path="person" element={<AddSalesPersonForm />} />
                        <Route path="customer" element={<AddPotentialCustomerForm />} />
                        <Route path="new" element={<SaleRecordForm />} />
                        <Route path="list" element={<ListSales />} />
                        <Route path="history" element={<SalesPersonHistoryList />} />
                    </Route>
                    <Route path="manufacturer">
                        <Route path="new" element={<ManufacturerForm />} />
                        <Route path="model" element={<CreateModelForm />} />
                        <Route path="lists" element={<ManufacturerList />} />
                        <Route path="list" element={<ModelList />} />
                        <Route path="autolist" element={<AutoList />} />
                        <Route path="autoform" element={<AutoForm />} />
                    </Route>
                    <Route path='service/tech/' element={<TechForm />} />
                    <Route path='service/appt/' element={<ServiceApptForm />} />
                    <Route path='/service/appt/list' element={<ServiceApptsList />} />
                    <Route path="/service/history" element={<ServiceHistoryList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
