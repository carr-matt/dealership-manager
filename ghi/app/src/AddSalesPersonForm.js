import React from 'react'

class AddSalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            employee_id: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        const salesPersonUrl = "http://lochost:8090/api/sales/person/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
        const response = await fetch(salesPersonUrl, fetchConfig)
        if(response.ok){
            this.setState({
                name: "",
                employee_id: "",
            })

            const cleared ={
                name: "",
                employee_id: "",
            }
            this.setState(cleared)
        }
    };


    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new sales person</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.employee_id} placeholder="Employee Id" required type="text" name="employee_id" id="employee_id" className="form-control" />
                                <label htmlFor="id">Sales Person ID</label>
                            </div>
                            <button className="btn btn-primary" id="salesPersBtn">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSalesPersonForm;
