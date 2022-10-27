import React from 'react';


class SaleRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobiles: [],
            automobile: '',
            salesPersons: [],
            sales_person: '',
            customers: [],
            customer: '',
            price: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }

    async componentDidMount() {

        const autoResponse = await fetch('http://localhost:8090/api/sales/unsold/')
        const saleResponse = await fetch('http://localhost:8090/api/sales/person/')
        const customerResponse = await fetch('http://localhost:8090/api/sales/customer/')

        if(autoResponse.ok && saleResponse.ok && customerResponse.ok){
            const autoData = await autoResponse.json();
            const saleData = await saleResponse.json();
            const customerData = await customerResponse.json();

            this.setState({automobiles: autoData.automobiles})
            this.setState({salesPersons: saleData.sales_people})
            this.setState({customers: customerData.customers})
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        delete data.automobiles;
        delete data.salesPersons;
        delete data.customers;


        const newSaleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
        const response = await fetch(newSaleUrl, fetchConfig);
        if(response.ok){
            this.setState({
                automobiles: [],
                salesPersons: [],
                customers: [],
                price: '',
            })
    }
    };

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>New Sale Form!</h1>
                        <form onSubmit={this.handleSubmit}>

                            <div className="mb-3">
                                <select onChange={this.handleInputChange} value={this.state.automobile} required id="automobile" name="automobile" className="form-select">
                                    <option value="">Select automobile</option>
                                    {this.state.automobiles.map(automobile => {
                                        return (
                                            <option key={automobile.vin} value={automobile.vin}>{automobile.vin}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        <div className="mb-3">
                            <select onChange={this.handleInputChange} value={this.state.sales_person} id="sales_person" name="sales_person" className="form-select">
                                <option value="">Select Sales Person</option>
                                    {this.state.salesPersons.map(sales_person => {
                                        return (
                                            <option key={sales_person.employee_id} value={sales_person.employee_id}>{sales_person.name}</option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleInputChange} value={this.state.customer} id="customer" name="customer" className="form-select">
                                <option value="">Select Customer</option>
                                    {this.state.customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleInputChange} value={this.state.price} placeholder="price" required type="text" name="price" id="price" className="form-control" />
                                <label htmlFor="manufacturer">Price</label>
                        </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
    export default SaleRecordForm;
