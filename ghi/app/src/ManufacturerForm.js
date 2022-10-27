import React from 'react'

class ManufacturerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleInputChange=(event)=> {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state}
        const manufactuerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        }
        const response = await fetch(manufactuerUrl, fetchConfig);
        if(response.ok){
                const newSalesPerson = await response.json();
            console.log(newSalesPerson);

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
                        <h1>Create Manufacturer</h1>
                        <form onSubmit={this.handleSubmit} id="create-hat-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleInputChange} value={this.state.name} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="manufacturer">Name</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManufacturerForm;
