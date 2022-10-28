import React from 'react'


class AddPotentialCustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            phone: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        const customerUrl = 'http://localhost:8090/api/sales/customer/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
        const response = await fetch(customerUrl, fetchConfig);
        if(response.ok){
                const newCustomer = await response.json();
            console.log(newCustomer);

            const cleared ={
                name: "",
                address: "",
                phone: "",
            }
            this.setState(cleared)
        }
    };
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new customer</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Customer Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="adress" className="form-control" />
                                <label htmlFor="id">Add Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.phone} placeholder="Phone Number" required type="text" name="phone" id="phone" className="form-control" />
                                <label htmlFor="id">Add Phone Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPotentialCustomerForm;
